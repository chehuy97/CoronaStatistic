import {combineReducers} from 'redux';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {statisticPayload} from './statistic';
import statisticReducer from './statistic/statistic.reducer';

export type AppState = {
  statistic: statisticPayload;
};

const rootReducer = combineReducers<AppState>({
  statistic: statisticReducer,
});

export const useSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> =
  useReduxSelector;

export default rootReducer;
