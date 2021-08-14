import { defaultsate, statisitcTypes, AcctionSuccess, statisticAction, statisticPayload, Statistic } from './statistic.types'

 const reducer = (state = defaultsate, action: statisticAction):statisticPayload => {
     console.log('STATISTIC REDUCER');    
    switch (action.type) {
        case statisitcTypes.FETCH_STATISTIC_SUCCESS:
            action = <AcctionSuccess<Statistic[]>>action
            return {
                ...state,
                statistics: action.payload
            }
        default:
          return state;
      }

}

export default reducer