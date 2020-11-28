import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api.js";
import {checkAuth, fetchQuestionList} from "./store/api-actions.js";
import {redirect} from "./store/middlewares/redirect.js";

import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer.js";
import {requireAuthorization} from "./store/action.js";
import {AuthorizationStatus} from "./lib/const.js";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(fetchQuestionList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
