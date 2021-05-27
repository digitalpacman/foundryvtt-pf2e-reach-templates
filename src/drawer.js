const { nextColor, releaseColor } = require('./colors');
const { getState } = require('./state');

async function draw(token, reach, template) {  
  const drawn = await Drawing.create({
    type: CONST.DRAWING_TYPES.FREEHAND,
    author: game.user._id,
    x: token.x - (reach / 5) * canvas.scene.data.grid,
    y: token.y - (reach / 5) * canvas.scene.data.grid,
    fillType: CONST.DRAWING_FILL_TYPES.NONE,
    strokeWidth: 4,
    strokeColor: nextColor(),
    strokeAlpha: 0.75,
    points: template.map(([x, y]) => 
      [
        x * canvas.scene.data.grid,
        y * canvas.scene.data.grid,
      ]),
  });
  tokenAttacher.attachElementToToken(drawn, token, true);
  return drawn.id;
}

async function clear(token) {
  const { drawnId } = getState(token);
  const drawn = DrawingsLayer.instance.get(drawnId);
  if (drawn) {
    releaseColor(drawn.data.strokeColor);
    await drawn.delete();
  }
}

module.exports = {
  draw,
  clear,
};