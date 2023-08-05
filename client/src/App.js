import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//header
// import NavTabs from './components/NavTabs/NavTabs';
//pages
import Drinks from "./pages/Drinks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <header>
            <Nav />
          </header>

          <Routes>
            <Route index element={<Drinks />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
