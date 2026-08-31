const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const required = [
  'data/rules/00-index.md',
  'data/rules/01-product-principles.md',
  'data/rules/02-event-selection.md',
  'data/rules/03-process-writing.md',
  'data/rules/04-sources-and-citations.md',
  'data/rules/05-geography.md',
  'data/rules/06-territory-population.md',
  'data/rules/07-political-maps.md',
  'data/rules/08-dynasty-and-cross-period.md',
  'data/rules/09-audit-and-acceptance.md',
  'data/rules/10-rule-sync.md'
];

const errors = [];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`missing=${file}`);
}

const read = file => fs.readFileSync(path.join(root, file), 'utf8');
if (fs.existsSync(path.join(root, 'data/rules/10-rule-sync.md'))) {
  const sync = read('data/rules/10-rule-sync.md');
  for (const token of ['SYNC-001', '对应正式规则文档', 'data/schema.md']) {
    if (!sync.includes(token)) errors.push(`syncMissing=${token}`);
  }
}
if (fs.existsSync(path.join(root, 'data/schema.md')) && !read('data/schema.md').includes('data/rules/')) {
  errors.push('schemaMissingRulesReference');
}

console.log(`requiredDocs=${required.length}`);
console.log(`documentationErrors=${errors.length}`);
if (errors.length) {
  errors.forEach(error => console.log(error));
  process.exitCode = 1;
}
