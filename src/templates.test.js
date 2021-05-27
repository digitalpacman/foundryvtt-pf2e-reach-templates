const templates = require('./templates');

test('5ft medium', () => {
  const template = templates(1, 5);
  const points = point(0,0)
    .right(3)
    .down(3)
    .left(3)
    .up(3)
    .points();
  expect(template).toEqual(points);
});

test('10ft medium', () => {
  const template = templates(1, 10);
  const points = point(0,0)
    .right(5)
    .down(5)
    .left(5)
    .up(5)
    .points();
  expect(template).toEqual(points);
});

test('15ft medium', () => {
  const template = templates(1, 15);
  const corner = point(0, 2)
    .right(1)
    .up(1)
    .right(1)
    .up(1)
    .points();
  const points = squareOff(corner, 3);
  expect(template).toEqual(points);
});

test('20ft medium', () => {
  const template = templates(1, 20);
  const corner = point(0, 3)
    .right(1)
    .up(2)
    .right(2)
    .up(1)
    .points();
  const points = squareOff(corner, 3);
  expect(template).toEqual(points);
});

function squareOff(topLeft, side) {
  const [cornerWidth] = topLeft[topLeft.length - 1];
  const width = cornerWidth * 2 + side;
  const topRight = [...topLeft].reverse().map(([x, y]) => [width - x, y]);
  const bottomRight = topLeft.map(([x, y]) => [width - x, width - y]);
  const bottomLeft = [...topLeft].reverse().map(([x, y]) => [x, width - y]);

  return [ ...topLeft, ...topRight, ...bottomRight, ...bottomLeft, topLeft[0] ];
}

function point(x, y) {
  const points = [[x, y]];
  return {
    up: function(distance) {
      const [x, y] = points[points.length - 1];
      points.push([x, y - distance]);
      return this;
    },
    down: function(distance) {
      const [x, y] = points[points.length - 1];
      points.push([x, y + distance]);
      return this;
    },
    left: function(distance) {
      const [x, y] = points[points.length - 1];
      points.push([x - distance, y]);
      return this;
    },
    right: function(distance) {
      const [x, y] = points[points.length - 1];
      points.push([x + distance, y]);
      return this;
    },
    points: function() { return points },
  };
}

test('25ft medium', () => {
  const template = templates(1, 25);
  const corner = point(0, 4)
    .right(1)
    .up(2)
    .right(1)
    .up(1)
    .right(2)
    .up(1)
    .points();
  const points = squareOff(corner, 3);
  expect(template).toEqual(points);
});

test('5ft large', () => {
  const template = templates(2, 5);
  const points = point(0,0)
    .right(4)
    .down(4)
    .left(4)
    .up(4)
    .points();
  expect(template).toEqual(points);  
});

test('10ft large', () => {
  const template = templates(2, 10);
  const points = point(0,0)
    .right(6)
    .down(6)
    .left(6)
    .up(6)
    .points();
  expect(template).toEqual(points);
});

test('15ft large', () => {
  const template = templates(2, 15);
  const corner = point(0, 2)
    .right(1)
    .up(1)
    .right(1)
    .up(1)
    .points();
  const points = squareOff(corner, 4);
  expect(template).toEqual(points);
});

test('20ft large', () => {
  const template = templates(2, 20);
  const corner = point(0, 3)
    .right(1)
    .up(2)
    .right(2)
    .up(1)
    .points();
  const points = squareOff(corner, 4);
  expect(template).toEqual(points);
});

test('25ft large', () => {
  const template = templates(2, 25);
  const corner = point(0, 4)
    .right(1)
    .up(2)
    .right(1)
    .up(1)
    .right(2)
    .up(1)
    .points();
  const points = squareOff(corner, 4);
  expect(template).toEqual(points);
});

test('15ft huge', () => {
  const template = templates(3, 15);
  const corner = point(0, 2)
    .right(1)
    .up(1)
    .right(1)
    .up(1)
    .points();
  const points = squareOff(corner, 5);
  expect(template).toEqual(points);
});