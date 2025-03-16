const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }
  let minDistance = 10000000;
  let result = [];
  for (const [loc, p] of locations) {
    if (getDistance(point, p) < minDistance) {
      minDistance = getDistance(point, p);
      result = [loc, p]
    }
  }
  return result;
}
// END
