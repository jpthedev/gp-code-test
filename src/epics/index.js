import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    GET_EMP_INFO,
    getEmpInfoSuccess,
    getEmpInfoFailure
} from '../actions';

const url = 'https://reqres.in/api/users/';

function getEmpInfoEpic(action$, store) {
    return action$
        .ofType(GET_EMP_INFO)
        .switchMap(() => {
            return ajax
                .getJSON(url + store.value.empId)
                .map(data => data.data)
        })
        .map(empData => getEmpInfoSuccess(empData))
        .catch(error => Observable.of(getEmpInfoFailure('Record Not Found')))
}

export const rootEpic = combineEpics(getEmpInfoEpic);