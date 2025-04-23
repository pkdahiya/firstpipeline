import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/authSaga'; // Replace with your actual saga imports

// Root saga
export default function* rootSaga() {
    yield all([
        fork(authSaga), // Add your sagas here
    ]);
}