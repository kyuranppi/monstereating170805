//ActionType 에서 정의해둔 응답코드를 임포트한다.
import {
    /* 응답코드 */
    POST_CREATE,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAILURE,
    POST_READ,
    POST_READ_SUCCESS,
    POST_READ_FAILURE,
    POST_UPDATE,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAILURE,
    POST_DELETE,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE
} from './ActionTypes';
import axios from 'axios'; // AJAX 통신 


// 하나의 Action을 발생시키는 것
// 요청 메소드 안에서, 메소드 실행/성공/실패 를 리턴하는 메소드를 가진다.
// post create
export function postCreateRequest(title, content){
    return (dispatch) => {
        dispatch(postCreate());
        
        let url = "/api/post/create";
        console.log("postCreateRequest : " + url + "//" + title + "//" + content);
        
        return axios.post(url, {title, content})
        .then((res) => {
            dispatch(postCreateSuccess(res.data));
            console.log("postCreateResponse" + res);
        }).catch((err) => {
            dispatch(postCreateFailure(err));
        });
    };
}

export function postCreate() {
    return {
        type: POST_CREATE
    };
}

export function postCreateSuccess(data){
    return {
        type: POST_CREATE_SUCCESS,
        data
    };
}

export function postCreateFailure(err){
    return {
        type: POST_CREATE_FAILURE,
        err: err
    };
}


// post read
export function postReadRequest(){
    return (dispatch) => {
        dispatch(postRead());
        
        let url = "/api/post/all";
        console.log("postReadRequest : " + url);
        
        return axios.get(url)
        .then((res) => {
            dispatch(postReadSuccess(res.data));
            console.log("postReadResponse" + res);
        }).catch((err) => {
            dispatch(postReadFailure(err));
        });
    };
}

export function postRead() {
    return {
        type: POST_READ
    };
}

export function postReadSuccess(data){
    return {
        type: POST_READ_SUCCESS,
        data
    };
}

export function postReadFailure(err){
    return {
        type: POST_READ_FAILURE,
        err: err
    };
}



// post update
export function postUpdateRequest(id, title, content){
    return (dispatch) => {
        dispatch(postUpdate());
        
        let url = "/api/post/update";
        console.log("postUpdateRequest : " + url + "//" + id + "//" + title + "//" + content);
        
        return axios.post('/api/post/update', {id, title, content})
        .then((res) => {
            dispatch(postUpdateSuccess(res.data));
        }).catch((err) => {
            dispatch(postUpdateFailure(err));
        });
    };
}

export function postUpdate() {
    return {
        type: POST_UPDATE
    };
}

export function postUpdateSuccess(data){
    return {
        type: POST_UPDATE_SUCCESS,
        data
    };
}

export function postUpdateFailure(err){
    return {
        type: POST_UPDATE_FAILURE,
        err: err
    };
}



// post delete
export function postDeleteRequest(id){
    return (dispatch) => {
        dispatch(postDelete());
        
        let url = "/api/post/delete";
        console.log("postDeleteRequest : " + url + "//" + id);
        
        return axios.post('/api/post/delete', {id})
        .then((res) => {
            dispatch(postDeleteSuccess(res.data));
        }).catch((err) => {
            dispatch(postDeleteFailure(err));
        });
    };
}

export function postDelete() {
    return {
        type: POST_DELETE
    };
}

export function postDeleteSuccess(data){
    return {
        type: POST_DELETE_SUCCESS,
        data
    };
}

export function postDeleteFailure(err){
    return {
        type: POST_DELETE_FAILURE,
        err: err
    };
}

