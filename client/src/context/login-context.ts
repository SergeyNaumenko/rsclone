import React from 'react';

const {
  Provider: UserContextProvider,
  Consumer: UserContextConsumer,
} = React.createContext({});

export { UserContextProvider, UserContextConsumer };