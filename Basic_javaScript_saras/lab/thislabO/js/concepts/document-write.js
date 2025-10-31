// concepts/document-write.js
export const name  = 'documentWrite';
export const label = 'Document Write Example';

export function run() {
  document.write('<h2 style="color:cyan; text-align:center;">🪷 *gam* The document speaks now 🪷</h2>');
  document.write('<p style="text-align:center;">This line was written using <code>document.write()</code>.</p>');
}

export const code = `// Concept: Writing directly to the document
function run() {
  document.write('<h2 style="color:cyan; text-align:center;">🪷 *gam* The document speaks now 🪷</h2>');
  document.write('<p style="text-align:center;">This line was written using <code>document.write()</code>.</p>');
}`;
