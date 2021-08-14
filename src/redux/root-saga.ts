import { statisitcTypes } from './statistic/statistic.types';
import { all, call, takeLatest } from "redux-saga/effects";
import { statisticSagas, fetchStatistics } from "./statistic/statistic.sagas";

export default function* rootSaga() {
    yield all([
        call(statisticSagas)])
}
