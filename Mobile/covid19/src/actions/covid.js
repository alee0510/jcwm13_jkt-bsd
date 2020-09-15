import Axios from 'axios';
import { URL, GET_SUMMARY, GET_COUNTRY } from './helpers';

export const GetCovidGlobalSummary = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(URL + '/summary');
            dispatch({ type: GET_SUMMARY, payload: data });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
        }
    };
};

export const GetCountry = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(URL + '/countries');
            dispatch({ type: GET_COUNTRY, payload: data });
        } catch (err) {
            console.log(err.response ? err.response.data : err);
        }
    };
};
