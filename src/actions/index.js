export const GET_EMP_INFO = 'GET_EMP_INFO';
export const CHANGE_DEPT = 'CHANGE_DEPT';
export const CHANGE_EMP = 'CHANGE_EMP';
export const GET_EMP_INFO_SUCCESS = ' GET_EMP_INFO_SUCCESS';
export const GET_EMP_INFO_FAILURE = 'GET_EMP_INFO_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';

export const changeDept = (key) => ({
    type: CHANGE_DEPT,
    key
});

export const changeEmp = (id) => ({
    type: CHANGE_EMP,
    id
});

export const getEmpInfo = () => ({
    type: GET_EMP_INFO,
});

export const getEmpInfoSuccess = (empData) => ({
    type: GET_EMP_INFO_SUCCESS,
    payload: empData
});

export const getEmpInfoFailure = (errorMsg) => ({
    type: GET_EMP_INFO_FAILURE,
    payload: errorMsg
});

export const clearData = () => ({
    type: CLEAR_DATA
})