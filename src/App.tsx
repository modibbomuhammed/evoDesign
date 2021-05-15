import React from "react";
import styled from "styled-components";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { rootReducer, rootSaga } from "./store/";
import createSagaMiddleware from "redux-saga";

import Header from "./containers/Header";
import { Nav } from "./components/navbar/Nav";
import Orders from "./containers/Orders";
import { Dashboard } from "./components/dashboard/Dashboard";
import Details from "./containers/Details";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

const UI = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-bottom: none;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <UI>
        <Nav />
        <Header />
        <Orders />
        <Dashboard />
        <Details />
      </UI>
    </Provider>
  );
};

export default App;
