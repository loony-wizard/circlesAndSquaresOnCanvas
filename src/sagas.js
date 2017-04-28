import { call, put, takeEvery } from 'redux-saga/effects';
import api from './api';

import {
    circlesLoaded,
    squaresLoaded,
    ADD_CIRCLE,
    ADD_SQUARE,
    DELETE_CIRCLE,
    DELETE_SQUARE
} from './actions';

function* loadCircles() {
    const jsonData = yield call(api.get, 'circles');
    yield put(circlesLoaded(jsonData));
}

function* loadSquares() {
    const jsonData = yield call(api.get, 'squares');
    yield put(squaresLoaded(jsonData));
}

function* watchForNewCircles() {
    yield takeEvery(ADD_CIRCLE, saveCircle);
}

function* watchForNewSquares() {
    yield takeEvery(ADD_SQUARE, saveSquare);
}

function* saveCircle(action) {
    const { circle } = action.payload;
    yield call(api.post, 'circles', circle);
}

function* saveSquare(action) {
    const { square } = action.payload;
    yield call(api.post, 'squares', square);
}

function* watchForDeletingCircles() {
    yield takeEvery(DELETE_CIRCLE, deleteCircle);
}

function* deleteCircle(action) {
    const { id } = action.payload;
    yield call(api.deleteRequest, `circles/${id}`);
}

function* watchForDeletingSquares() {
    yield takeEvery(DELETE_SQUARE, deleteSquare);
}

function* deleteSquare(action) {
    const { id } = action.payload;
    yield call(api.deleteRequest, `squares/${id}`);
}

export default function* rootSaga() {
    yield [
        loadCircles(),
        loadSquares(),
        watchForNewCircles(),
        watchForNewSquares(),
        watchForDeletingCircles(),
        watchForDeletingSquares()
    ];
}