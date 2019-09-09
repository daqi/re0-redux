// f(g(h(x))) => compose(f,g,h)(x)
export default function compose(...funcs) {
  if (funcs.length === 0) return arg => arg;
  if (funcs.length === 1) return funcs[0];
  return funcs.reduceRight((a, b) => (...args) => b(a(...args)));
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
