function intersect(rects) {
  const sortedX = rects.sort((a, b) => {
    if (a[0][0] < b[0][0]) { return -1; }
    else if (a[0][0] === b[0][0]) return 0;
    return 1;
  });
  sortedX;

  const points = [];
  // top left
  for (let i = 0; i < sortedX.length; ++i) {
    const [[x1, y1]] = sortedX[i];
    points.push([x1, y1]);
    if (i < sortedX.length - 1) {
      const [[x2, y2]] = sortedX[i+1];
      points.push([x2, y1]);
    }
  }

  points;

  // top right
  for (let i = sortedX.length - 1; i >= 0; --i) {
    const [[, y1], [x1]] = sortedX[i];
    points.push([x1, y1]);
    if (i > 0) {
      const [[, y2], [x2]] = sortedX[i-1];
      points.push([x1, y2]);
    }
  }

  points;

  // bottom right
  for (let i = 0; i < sortedX.length; ++i) {
    const [, [x1, y1]] = sortedX[i];
    points.push([x1, y1]);
    if (i < sortedX.length - 1) {
      const [, [x2, y2]] = sortedX[i+1];
      points.push([x2, y1]);
    }
  }

  points;

  // bottom left
  for (let i = sortedX.length - 1; i >= 0; --i) {
    const [[x1], [, y1]] = sortedX[i];
    points.push([x1, y1]);
    if (i > 0) {
      const [[x2], [, y2]] = sortedX[i-1];
      points.push([x1, y2]);
    }
  }

  points;

  const [[x, y]] = sortedX[0];
  points.push([x, y]);

  points;
  return points;
}

const square = (x, y, w, h) => {
  return [[x, y], [x + w, y + h]];
};

var reachTemplates = [
  [square(0, 0, 3, 3)],
  [square(0, 0, 5, 5)],
  [square(0, 2, 7, 3), square(1, 1, 5, 5), square(2, 0, 3, 7)],
  [square(0, 3, 9, 3), square(1, 1, 7, 7), square(3, 0, 3, 9)],
  [square(0, 4, 11, 3), square(1, 2, 9, 7), square(2, 1, 7, 9), square(4, 0, 3, 11)],
];

function stretch(size, template) {
  const diff = size - 1;
  const resized = template.map(([[x1, y1], [x2, y2]]) => {
    x1;
    return [[x1, y1], [x2 + diff, y2 + diff]];
  });
  return resized;
}

function areas(reach) {
  const template = reachTemplates[reach / 5 - 1];
  return template;
}

const a = areas(15);
a;
const s = stretch(1, a);
s;
const i = intersect(s);
i;

module.exports = (size, reach) => {
  const area = areas(reach);
  const stretched = stretch(size, area);
  const template = intersect(stretched);
  return template;
};