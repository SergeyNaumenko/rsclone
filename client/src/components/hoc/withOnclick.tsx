import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const withOnclick = (fn: Function) => (Wrapped: any) => {
  return (props: any) => {
    return <Wrapped {...props} onItemSelected={fn}></Wrapped>;
  };
};

export default withOnclick;
