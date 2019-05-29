import {
    GET_EMP_INFO,
    CHANGE_DEPT,
    CHANGE_EMP,
    GET_EMP_INFO_FAILURE,
    GET_EMP_INFO_SUCCESS,
    CLEAR_DATA
} from '../actions';

const deptData = {
    'HR': [1, 2, 3, 4, 5],
    'ENGINEERING': [6, 7, 8, 9, 10]
}

const initialState = {
    empData: '',
    depKey: 'HR',
    empList: deptData['HR'],
    empId: deptData['HR'][0],
    isLoading: false,
    error: null
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_EMP_INFO:
            return {
                ...state,
                isLoading: true
            };
        case GET_EMP_INFO_SUCCESS:
            return {
                ...state,
                empData: action.payload,
                isLoading: false
            };
        case GET_EMP_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CHANGE_DEPT:
            return {
                ...state,
                depKey: action.key.key,
                empList: deptData[action.key.key],
                empId: deptData[action.key.key][0],
            };
        case CHANGE_EMP:
            return {
                ...state,
                empId: action.id.key
            };
        case CLEAR_DATA:
            return initialState;
        default:
            return state;
    }
}