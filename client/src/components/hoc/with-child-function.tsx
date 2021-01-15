import React from 'react';

const withChildFunction = (fn: Function) => (Wrapped: any) => {
  return (props: any) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

export default withChildFunction;