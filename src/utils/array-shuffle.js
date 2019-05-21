/**
 * Shuffles array in place. ES6 version
 * https://stackoverflow.com/a/6274381/5450156
 */
export default (array) => {
  const a = array.slice();

  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
