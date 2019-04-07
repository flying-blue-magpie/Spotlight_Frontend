export default (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    throw Error('input should be an object.');
  }

  return Object.keys(obj)
    .filter((key) => obj[key] !== null && typeof obj[key] !== 'undefined')
    .map((key) => (
      `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    ))
    .join('&');
};
