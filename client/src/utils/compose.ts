import React from 'react';

const compose = (...funcs: any[]) => (value: React.FC | React.Component) => {
  return funcs.reduceRight((wrapped, f) => f(wrapped), value);
};

export default compose;
