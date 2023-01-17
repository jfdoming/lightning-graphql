import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <ColorModeScript />
      <App />
    </ApolloProvider>
  </StrictMode>
);
