import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const withChildFunction = (fn: Function) => (Wrapped: any) => {
  return (props: any) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

export default withChildFunction;
