import { fork } from "redux-saga/effects";
import { coinsPricesRootSaga } from "../modules/CoinsPrices/sagas";

export const rootSaga = function* () {
  yield fork(coinsPricesRootSaga);
};
