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
  position: relative;
  top: 0px;
  left: 0px;
  width: 1165px;
  height: 1400px;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <UI>
        <Nav />
        <hr
          style={{
            position: "relative",
            border: "1px solid #cecece",
            top: "65px",
            width: "97%",
          }}
        />
        <Header />
        <Orders />
        <Dashboard />
        <Details />
      </UI>
    </Provider>
  );
};

export default App;
