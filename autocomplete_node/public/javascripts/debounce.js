export default function(func, delay) {
  let timeout;
  return function(...args) {
    if (timeout) { clearTimeout(timeout)}
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};