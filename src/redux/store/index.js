import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

const store = () => {
    const saga = createSaga();
    return {
        ...createStore(reducers, applyMiddleware(saga)),
        runSaga: saga.run(sagas)
    };
}

export default store;