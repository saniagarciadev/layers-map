import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { graphClient } from "./data/apollo-client";
import MapContainer from "./components/Map/MapContainer";
import "./App.css";

function App() {
  return (
      <ApolloProvider client={graphClient}>
    <BrowserRouter>
    <Routes>
          <Route
            exact
            path="/"
            element={<div className="App">
                <h1>LAYERS</h1>
                <h3>A Collaborative Map</h3>
                <p>Currently in development.</p>
                <Link to="/Map">Layers 0.00001</Link>
                </div>
            }
          />
          <Route exact path="/Map" element={<MapContainer />} />
</Routes>
      </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
