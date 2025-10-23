//***gam***//
//the main orchestrator //

import { Concepts } from './concepts/index.js';

// elements
const select = document.getElementById('conceptSelect');
const output = document.getElementById('output');
const codeView = document.getElementById('codeView');
const copyBtn = document.querySelector('.copy-btn');
const initBtn = document.getElementById('initBtn');

// populate dropdown
for (const [key, mod] of Object.entries(Concepts)) {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = mod.label;
  select.appendChild(opt);
}

// event: run concept
initBtn.addEventListener('click', () => {
  const key = select.value;
  if (!key) return alert("Please select a concept, sir.");
  const mod = Concepts[key];
  if (!mod) return alert("Concept not found.");
  mod.run();
  codeView.textContent = mod.code;
});

// copy button
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(codeView.textContent).then(() => {
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1000);
  });
});

