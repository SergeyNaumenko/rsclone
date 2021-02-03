import React from 'react';
import { UserContextConsumer } from '../../context/login-context';

// eslint-disable-next-line @typescript-eslint/ban-types
const withUser = (Wrapped: any) => {
  return (props: any) => {
    return (
      <UserContextConsumer>
        {(prop:any) => {
          return <Wrapped {...props} prop = {prop} />;
        }}
      </UserContextConsumer>
    );
  };
};

export default withUser;