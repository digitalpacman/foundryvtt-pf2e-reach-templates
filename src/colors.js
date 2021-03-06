const defaultColors = [
  '#ffffff',
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#00ffff',
];

const colorMap = defaultColors.reduce((acc, cur) => {
  acc[cur] = () => game.settings.get('pf2e-reach-templates', `color_${cur}`);
  return acc;
}, {});

let reservations = [];
const nextColor = () => {
  if (reservations.length === defaultColors.length) {
    reservations.length = 0;
  }

  const available = defaultColors.filter(color => 
    !reservations.find(({ defaultColor }) => defaultColor === color));
  const defaultColor = available[0];
  const actualColor = colorMap[defaultColor]();
  reservations.push({ defaultColor, actualColor } );
  return actualColor;
};

const releaseColor = (color) => {
  reservations = reservations.filter(({ actualColor }) => actualColor !== color);
};

module.exports = {
  nextColor,
  releaseColor,
  defaultColors,
};