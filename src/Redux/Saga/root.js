import { takeEvery,call,put} from 'redux-saga/effects';
import Axios from 'axios';


export function* rootSaga(){
     yield takeEvery("PEOPLE_READ_ACTION",handleReadPeople);
     yield takeEvery("PEOPLE_WRITE_ACTION",handleWritePeople);
}

function getCaller(url){
    return Axios.get(url);
}

function postCaller(url,data){
    return Axios.post(url,data);
}
function* handleReadPeople(){
    let response=yield call(getCaller,"http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people");
    yield put({type:'PEOPLE_ACTION',data:response.data});
}

function* handleWritePeople(action){
    let person=action.data;
    yield  call(postCaller,"http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people",person);
    yield handleReadPeople();
}
