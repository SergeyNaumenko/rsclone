const compose = (...funcs: any[]) => (comp: React.FC | React.Component) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), comp);
};

export default compose;