import rootReducer from '../../core/reducers';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger()

export const store = createStore(rootReducer,
    applyMiddleware(
        loggerMiddleware,
        thunk,
        
    )
);

