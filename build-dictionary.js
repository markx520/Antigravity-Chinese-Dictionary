/**
 * build-dictionary.js
 * 
 * Antigravity 多语言词典开源构建器 (Locale Packages Builder)
 * 支持：
 * - zh-CN (简体中文) -> locales/zh-CN/dictionary.json & dist/zh-cn-ui-dictionary.json
 * - zh-TW (繁体中文) -> locales/zh-TW/dictionary.json & dist/zh-tw-ui-dictionary.json
 * - ja-JP (日本語)   -> locales/ja-JP/dictionary.json & dist/ja-jp-ui-dictionary.json
 * 
 * 四重门禁安全审计：
 * 1. 变量占位符守恒校验 (${command}, {0})
 * 2. 防自递归自包含检查 (防止 DOM 递归无限堆叠)
 * 3. 品牌专有名词绝对守恒 (Antigravity 绝对禁止翻译为“反重力”)
 * 4. 文件名与代码路径绝对免疫门禁 (文件名与路径绝对禁止翻译)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const REPO_ROOT = __dirname;
const LOCALES_ROOT = path.join(REPO_ROOT, 'locales');
const DIST_ROOT = path.join(REPO_ROOT, 'dist');

const ALL_LOCALES_CONFIG = [
  { code: 'zh-CN', aliases: ['cn', 'zh-cn', 'zh'], name: '简体中文 (Simplified Chinese)', legacyDict: 'dicts' },
  { code: 'zh-TW', aliases: ['tw', 'zh-tw'], name: '繁体中文 (Traditional Chinese)', legacyDict: 'dicts_tw' },
  { code: 'ja-JP', aliases: ['ja', 'ja-jp', 'jp'], name: '日本語 (Japanese)', legacyDict: 'dicts_ja' },
  { code: 'ko-KR', aliases: ['ko', 'ko-kr', 'kr'], name: '한국어 (Korean)' },
  { code: 'de-DE', aliases: ['de', 'de-de'], name: 'Deutsch (German)' },
  { code: 'fr-FR', aliases: ['fr', 'fr-fr'], name: 'Français (French)' },
  { code: 'es-ES', aliases: ['es', 'es-es'], name: 'Español (Spanish)' },
  { code: 'it-IT', aliases: ['it', 'it-it'], name: 'Italiano (Italian)' },
  { code: 'pt-BR', aliases: ['pt', 'pt-br', 'br'], name: 'Português (Portuguese)' },
  { code: 'ru-RU', aliases: ['ru', 'ru-ru'], name: 'Русский (Russian)' }
];

const LOCALE_REGISTRY = ALL_LOCALES_CONFIG.map(cfg => {
  const distFileName = `${cfg.code.toLowerCase()}-ui-dictionary.json`;
  return {
    code: cfg.code,
    aliases: cfg.aliases,
    name: cfg.name,
    dir: path.join(LOCALES_ROOT, cfg.code),
    dictsDir: path.join(LOCALES_ROOT, cfg.code, 'dicts'),
    targetFile: path.join(LOCALES_ROOT, cfg.code, 'dictionary.json'),
    manifestFile: path.join(LOCALES_ROOT, cfg.code, 'manifest.json'),
    legacyTarget: path.join(DIST_ROOT, distFileName),
    legacyDictsDir: cfg.legacyDict ? path.join(REPO_ROOT, cfg.legacyDict) : null
  };
});

const args = process.argv.slice(2);
let targetLocale = 'all';
const locIdx = args.indexOf('--locale');
if (locIdx !== -1 && args[locIdx + 1]) {
  targetLocale = args[locIdx + 1].toLowerCase();
}

console.log('================================================================');
console.log('    ANTIGRAVITY 多语言包构建与四重安全审计流水线                ');
console.log('================================================================\n');

function compileSingleLocale(loc) {
  console.log(`>>> 正在编译语言包: [${loc.name}] (代号: ${loc.code})`);
  console.log(`    分片目录: ${path.relative(REPO_ROOT, loc.dictsDir)}`);
  console.log(`    输出产物: ${path.relative(REPO_ROOT, loc.targetFile)}`);

  if (!fs.existsSync(loc.dictsDir)) {
    console.error(`    [FATAL] 分片目录不存在: ${loc.dictsDir}`);
    return { success: false, errors: 1, totalKeys: 0, mergedCount: 0 };
  }

  const sliceFiles = fs.readdirSync(loc.dictsDir).filter(f => f.endsWith('.json')).sort();
  console.log(`    发现模块化分片: ${sliceFiles.length} 个`);

  const mergedDict = {};
  let totalKeys = 0;
  let errors = 0;

  sliceFiles.forEach(file => {
    const fp = path.join(loc.dictsDir, file);
    try {
      const raw = fs.readFileSync(fp, 'utf8');
      const data = JSON.parse(raw);
      const count = Object.keys(data).length;
      console.log(`      -> 加载分片 [${file.padEnd(25)}]: ${String(count).padStart(5)} 词条`);

      for (const [key, val] of Object.entries(data)) {
        // 1. 变量守恒安全校验
        if (key.includes('${command}') && !String(val).includes('${command}')) {
          console.error(`         [ERROR] 毒性词条拦截: "${key}" ➔ "${val}" 丢失 \${command} 占位符！`);
          errors++;
        }
        if (key.includes('{0}') && !String(val).includes('{0}')) {
          console.error(`         [ERROR] 毒性词条拦截: "${key}" ➔ "${val}" 丢失 {0} 占位符！`);
          errors++;
        }

        // 2. 防自递归自包含检查
        if (typeof val === 'string' && val.includes(key) && val !== key) {
          console.error(`         [ERROR] 毒性自递归条目拦截: "${key}" ➔ "${val}" (会导致 DOM 递归无限堆叠！)`);
          errors++;
        }

        // 3. 品牌专有名词绝对守恒门禁
        const protectedBrands = ['Antigravity', 'Google Antigravity', 'Antigravity Nexus', 'Antigravity IDE'];
        const isBrandMentioned = protectedBrands.some(brand => key.includes(brand));
        if ((isBrandMentioned || key.includes('反重力')) && typeof val === 'string' && (val.includes('反重力') || key.includes('反重力'))) {
          console.error(`         [ERROR] 品牌专有名词守恒违规拦截: "${key}" ➔ "${val}" (严禁将品牌名翻译为包含“反重力”的中文！)`);
          errors++;
        }

        // 4. 文件名与文件路径不可侵犯绝对免疫门禁
        const trimmedKey = key.trim();
        const FILE_EXT_REGEX = /\.(?:md|markdown|js|jsx|ts|tsx|py|json|jsonc|html|css|scss|less|vue|rs|go|c|cpp|h|sh|bat|cmd|ps1|yml|yaml|toml|ini|env|lock|log|sql|svg|png|jpg|exe|dll|asar|map|wasm|diff|patch)$/i;
        const SPECIAL_FILENAMES = new Set([
          'package.json', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'gemfile.lock',
          'dockerfile', 'makefile', 'cmakelists.txt', 'cargo.toml', 'cargo.lock',
          'implementation_plan.md', 'walkthrough.md', 'system-specs.js', 'build.py'
        ]);
        if (SPECIAL_FILENAMES.has(trimmedKey.toLowerCase())) {
          console.error(`         [FATAL] 违规文件名词条拦截: "${key}" (严格禁止翻译特殊/工程文件名！)`);
          errors++;
        } else if (FILE_EXT_REGEX.test(trimmedKey) && !trimmedKey.includes(' ') && trimmedKey.length <= 40) {
          console.error(`         [FATAL] 违规带扩展名文件条目拦截: "${key}" (严格禁止翻译带扩展名的文件！)`);
          errors++;
        }

        mergedDict[key] = val;
        totalKeys++;
      }
    } catch (err) {
      console.error(`         [FATAL] 解析分片 ${file} 失败: ${err.message}`);
      errors++;
    }
  });

  const mergedCount = Object.keys(mergedDict).length;
  console.log('    ------------------------------------------------------------');
  console.log(`    分片词条总计: ${totalKeys} | 去重合并后总计: ${mergedCount} 词条`);
  console.log(`    安全审计错误: ${errors} 项`);

  if (errors > 0) {
    console.error(`    [FAIL] [${loc.code}] 编译失败：发现安全违规，阻断输出！\n`);
    return { success: false, errors, totalKeys, mergedCount };
  }

  // 1. 写入语言包独立产物
  const jsonContent = JSON.stringify(mergedDict, null, 2);
  fs.writeFileSync(loc.targetFile, jsonContent, 'utf8');
  const fileSizeKB = (fs.statSync(loc.targetFile).size / 1024).toFixed(1);
  const fileHash = crypto.createHash('sha256').update(jsonContent).digest('hex');

  // 2. 写入语言包独立 manifest.json 元数据
  const manifest = {
    locale: loc.code,
    name: loc.name,
    slicesCount: sliceFiles.length,
    termsCount: mergedCount,
    fileSizeKB: parseFloat(fileSizeKB),
    sha256: fileHash,
    updatedAt: new Date().toISOString()
  };
  fs.writeFileSync(loc.manifestFile, JSON.stringify(manifest, null, 2), 'utf8');

  // 3. 兼容输出
  if (loc.legacyTarget) {
    fs.mkdirSync(path.dirname(loc.legacyTarget), { recursive: true });
    fs.writeFileSync(loc.legacyTarget, jsonContent, 'utf8');
  }
  if (loc.legacyDictsDir && fs.existsSync(loc.legacyDictsDir)) {
    sliceFiles.forEach(file => {
      const src = path.join(loc.dictsDir, file);
      const dst = path.join(loc.legacyDictsDir, file);
      try { fs.copyFileSync(src, dst); } catch (_) {}
    });
  }

  console.log(`    [SUCCESS] [${loc.code}] 编译成功！`);
  console.log(`              产物路径: ${loc.targetFile} (${fileSizeKB} KB, SHA256: ${fileHash.slice(0, 12)}...)`);
  console.log(`              元数据表: ${loc.manifestFile}\n`);

  return { success: true, errors: 0, totalKeys, mergedCount, sizeKB: fileSizeKB };
}

let allPassed = true;
const targetList = (targetLocale === 'all')
  ? LOCALE_REGISTRY
  : LOCALE_REGISTRY.filter(l => l.code.toLowerCase() === targetLocale || l.aliases.includes(targetLocale));

if (targetList.length === 0) {
  console.error(`[FATAL] 未知目标语言区域: ${targetLocale}`);
  process.exit(1);
}

for (const loc of targetList) {
  const res = compileSingleLocale(loc);
  if (!res.success) {
    allPassed = false;
  }
}

console.log('================================================================');
if (allPassed) {
  console.log('[SUCCESS] 多语言独立词库构建全部成功！各语种物理完全隔离！');
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error('[ERROR] 多语言构建存在错误，请核查日志！');
  console.log('================================================================\n');
  process.exit(1);
}
