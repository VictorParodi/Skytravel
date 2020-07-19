import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import reducers from './../reducers';
import sagas from './../sagas';

const store = () => {
    const saga = createSaga();
    return {
        ...createStore(reducers, applyMiddleware(saga)),
        runSaga: saga.run(sagas)
    };
}

export default store;