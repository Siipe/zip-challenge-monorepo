import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import client from 'graphql/client';
import { ZipChallengeProvider } from 'contexts/ZipChallengeContext';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ZipChallengeProvider>
        <App />
      </ZipChallengeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
