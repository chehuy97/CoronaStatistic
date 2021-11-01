import {statisitcTypes, Statistic} from './statistic.types';
import {takeLatest, put, all, call} from 'redux-saga/effects';
import {fetchStatisticError, fetchStatisticSuccess} from './statistic.actions';
import {fetchStatisticAPI} from '../../utils/network';
import {AxiosResponse} from 'axios';

export function* fetchStatistics() {
  // console.log('SAGA STATISTIC');
  try {
    const result: AxiosResponse<any> = yield call(fetchStatisticAPI);
    let statisticData: Statistic[] = result.data.Countries;
    // console.log('STATISTIC DATA IS ', statisticData);
    
    yield put(fetchStatisticSuccess(statisticData));
  } catch (err:any) {
    yield put(fetchStatisticError(err.msg));
  }
}

export function* onStatisticStart() {
  yield takeLatest(statisitcTypes.FETCH_STATISTIC_DATA, fetchStatistics);
}

export function* statisticSagas() {
  yield all([call(onStatisticStart)]);
}
