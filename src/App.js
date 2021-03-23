import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
//Import components
import Home from './pages/Home';
import Nav from './components/Nav';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Nav />
            <Home />
        </ApolloProvider>
    );
}

export default App;
