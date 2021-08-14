import { statisitcTypes, AcctionSuccess, AcctionFailure, statisticPayload, Statistic} from './statistic.types'

export const fetchStatisticData = () => {
    console.log('ACTION FETCH STATISTIC DATA');
    
    return {
        type: statisitcTypes.FETCH_STATISTIC_DATA
    }
}

export const fetchStatisticSuccess = (data:Statistic[]):AcctionSuccess<Statistic[]> => {
    return {
        type: statisitcTypes.FETCH_STATISTIC_SUCCESS,
        payload: data
    }
}

export const fetchStatisticError = (msg:string):AcctionFailure => {
    return {
        type: statisitcTypes.FETCH_STATISTIC_FAILURE,
        payload: {
            message: msg
        }
    }
}