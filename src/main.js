const templates = require('./templates');
const drawer = require('./drawer');
const { resetColors, defaultColors } = require('./colors');
const { getState, setState, clearState } = require('./state');
const Mutex = require('async-mutex').Mutex;

Hooks.on("ready", function() {
  document.addEventListener('keydown', handleKeyDown);

  for (let i = 0; i < defaultColors.length; ++i) {
    const color = defaultColors[i];
    game.settings.register('pf2e-reach-templates', `color_${color}`, {
      name: `Color ${i+1}`,
      scope: 'world',
      config: true,
      default: color,
      type: String,
    });
  }

  resetColors();
});

const mutex = new Mutex();

async function handleKeyDown(event) {
  const token = TokenLayer.instance.controlled[0];
  if (!token || event.key !== 'r') return;
  if (document.body !== document.activeElement) return;

  if (mutex.isLocked()) return;

  await mutex.runExclusive(async () => reachTemplate(token));
}

async function reachTemplate(token) {
  const { reach: currentReach } = getState(token);
  await drawer.clear(token);
  const reach = currentReach < 25 ? currentReach + 5 : 0;
  if (reach === 0) {
    await clearState(token);
  } else {
    const width = token.data.width;
    const template = templates(width, reach);
    const drawnId = await drawer.draw(token, reach, template);
    await setState(token, { drawnId, reach });
  }
}