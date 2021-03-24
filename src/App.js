import React from 'react';
import ApolloClient from 'apollo-boost';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
//Import components
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const App = () => {
    return (
        <ApolloProvider client={client}>
        <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </ApolloProvider>
    );
}

export default App;
