import React from 'react';

// setup redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import Reducer from './src/reducers';

const store = createStore(
    Reducer,
    {},
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

// import main navigation
import MainNavigation from './src/navigation/main';

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>
    );
};

export default App;
