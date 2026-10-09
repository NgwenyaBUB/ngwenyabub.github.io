'use strict';

const panels = [...document.querySelectorAll('.mode-panel')];
const modeLinks = [...document.querySelectorAll('[data-mode]')];
const writingSections = new Set(['off-clock', 'essays']);
const workSections = new Set(['work', 'selected-work', 'background']);
let currentMode;

function updateMode() {
  const target = location.hash.slice(1);
  const nextMode = writingSections.has(target) ? 'off-clock'
    : workSections.has(target) ? 'work' : currentMode || 'work';
  panels.forEach(panel => { panel.hidden = panel.id !== nextMode; });
  modeLinks.forEach(link => {
    if (link.dataset.mode === nextMode) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.body.dataset.mode = nextMode;
  document.title = nextMode === 'work'
    ? 'Brandon Ngwenya — Work & Writing'
    : 'Brandon Ngwenya — Off the Clock';
  currentMode = nextMode;
  // Reveal a linked section before scrolling to it, including browser history navigation.
  const section = document.getElementById(target);
  if (target === 'work' || target === 'off-clock') {
    window.scrollTo({ top: 0, behavior: 'instant' });
  } else if (section) {
    section.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
}

window.addEventListener('hashchange', updateMode);
window.addEventListener('load', updateMode);
updateMode();
document.getElementById('year').textContent = new Date().getFullYear();
