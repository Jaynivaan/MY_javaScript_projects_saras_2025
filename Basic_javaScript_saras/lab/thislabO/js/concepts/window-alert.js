// concepts/window-alert.js
export const name  = 'windowAlert';
export const label = 'Window Object Alert';

export function run() {
  window.alert('🪷 This alert is called through the global window object 🪷');
}

export const code = `// Concept: Using the window object for alerts
function run() {
  window.alert('🪷 This alert is called through the global window object 🪷');
}`;
