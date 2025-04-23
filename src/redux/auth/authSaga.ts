import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { authApi } from '../../api/authApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

function* loginUserSaga(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const response: { data: { user: any; token: string } } = yield call(
      authApi.login, 
      action.payload
    );
    yield put(loginSuccess(response.data));
    
    if (response.data.user.role === 'provider') {
      yield put(push('/provider/dashboard'));
    } else {
      yield put(push('/client/dashboard'));
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(loginStart.type, loginUserSaga);
}

export default function* authSaga() {
  yield all([
    watchLogin(),
    // other auth sagas
  ]);
}