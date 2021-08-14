export const statisitcTypes = {
  FETCH_STATISTIC_DATA: 'FETCH_STATISTIC_DATA',
  FETCH_STATISTIC_SUCCESS: 'FETCH_STATISTIC_SUCCESS',
  FETCH_STATISTIC_FAILURE: 'FETCH_STATISTIC_FAILURE',
};

export interface Statistic {
  ID: string;
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export type statisticPayload = {
    statistics: Statistic[]
}

export const defaultsate:statisticPayload = {
  statistics: []
}

export type AcctionSuccess<T> = {
    type: string
    payload: T
}

export type AcctionFailure = {
    type: string
    payload: {
        message: string
    }
}

export type statisticAction = AcctionSuccess<statisticPayload> | AcctionSuccess<Statistic[]> | AcctionFailure