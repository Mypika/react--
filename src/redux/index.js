import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduce from "./reduce"
import Mysage from './saga'

const SagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(Mysage)
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(SagaMiddleware))

const store = createStore(reduce,enhancer)

export default store