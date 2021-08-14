import Axios from 'axios'

const baseAPI = 'https://api.covid19api.com/'

export const fetchStatisticAPI = () => Axios.get(baseAPI+'summary')