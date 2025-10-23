// *** gam ***
// main orchestrator

import { Concepts } from './concepts/index.js';

// elements
const select   = document.getElementById('conceptSelect');
const codeView = document.getElementById('codeView');
const copyBtn  = document.querySelector('.copy-btn');
const initBtn  = document.getElementById('initBtn');

/* ===== Energy control (drives ∞ speed & O scale) ===== */
let energyTweenId;

function setEnergy(x){
  const v = Math.max(0, Math.min(1, Number(x)));
  document.documentElement.style.setProperty('--energy', v);
}

function tweenEnergy(to = .25, ms = 600){
  const cs = getComputedStyle(document.documentElement);
  const start = parseFloat(cs.getPropertyValue('--energy')) || 0;
  const t0 = performance.now();
  cancelAnimationFrame(energyTweenId);
  function loop(t){
    const k = Math.min(1, (t - t0) / ms);
    const eased = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2; // easeInOutQuad
    setEnergy(start + (to - start) * eased);
    if (k < 1) energyTweenId = requestAnimationFrame(loop);
  }
  energyTweenId = requestAnimationFrame(loop);
}

// idle micro-variations (breathing) when not testing
setEnergy(.25);
let idleTimer = setInterval(()=>{
  if (!document.body.classList.contains('is-testing')){
    const target = 0.18 + Math.random() * 0.22; // 0.18–0.40
    tweenEnergy(target, 1000);
  }
}, 3500);

// populate dropdown
for (const [key, mod] of Object.entries(Concepts)) {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = mod.label;
  select.appendChild(opt);
}

/* ===== Code view helper (Prism highlighting) ===== */
function showCode(codeStr = '') {
  // Safe: textContent prevents injection
  codeView.textContent = codeStr;
  // Re-highlight if Prism is available
  if (window.Prism && typeof Prism.highlightElement === 'function') {
    Prism.highlightElement(codeView);
  }
}

// simple reset function
function resetUI() {
  select.value = '';
  showCode('');                 // clears + de-highlights safely
  initBtn.disabled = false;
  copyBtn.textContent = 'Copy';

  document.body.classList.remove('is-testing');
  // settle energy gently
  tweenEnergy(.25, 1200);
}

// run concept and reset after delay
initBtn.addEventListener('click', () => {
  const key = select.value;
  if (!key) return alert('Please select a concept, sir.');
  const mod = Concepts[key];
  if (!mod || typeof mod.run !== 'function') return alert('Concept not found.');

  // start heart animation + speed up energy visuals
  document.body.classList.add('is-testing');
  tweenEnergy(1, 400); // surge

  // run the demo and display its source
  mod.run();
  showCode(mod.code ?? '');

  // disable to prevent double click
  initBtn.disabled = true;

  // auto-reset after 3 seconds
  setTimeout(() => resetUI(), 3000);
});

// copy code block
copyBtn.addEventListener('click', () => {
  const text = codeView.textContent || '';
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1000);
  });
});
