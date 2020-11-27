import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api.js";
import {fetchQuestionList} from "./store/api-actions.js";

import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer.js";

const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(fetchQuestionList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
