import { FETCH_DATA, CHECT_TYPE } from './Types';

/** Testing **/
export const getData = () => dispatch => {
    dispatch({
        body: { name: "React Redux" },
        type: FETCH_DATA
    });
};
