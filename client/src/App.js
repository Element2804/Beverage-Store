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
            <nav>
              <h1>GulpCo</h1>
              <NavLink to="drinks">Drinks</NavLink>
              <NavLink to="login">Login</NavLink>
              <NavLink to="signup">Signup</NavLink>
            </nav>
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
