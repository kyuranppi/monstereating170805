import {
     FOOD_NEW,
     FOOD_NEW_SUCCESS,
     FOOD_NEW_FAILURE,
     FOOD_READ,
     FOOD_READ_SUCCESS,
     FOOD_READ_FAILURE,
     FOOD_UPDATE,
     FOOD_UPDATE_SUCCESS,
     FOOD_UPDATE_FAILURE,
     FOOD_DELETE,
     FOOD_DELETE_SUCCESS,
     FOOD_DELETE_FAILURE
     
} from './ActionTypes';
import axios from 'axios';

export function foodNewRequest(name, ingredients){
    return (dispatch) => {
        dispatch(foodNew());
        
        let url = "/api/food/newFood";
        console.log("foodNewRequest : " + url + "//" + name + "//" + ingredients);
        
        return axios.post(url, {name, ingredients})
        .then((res) => {
            dispatch(foodNewSuccess(res.data));
            console.log("FoodNewResponse" + res);
        }).catch((err) => {
            dispatch(foodNewFailure(err));
        });
    };
}

export function foodNew() {
    return {
        type: FOOD_NEW
    };
}

export function foodNewSuccess(data){
    return {
        type: FOOD_NEW_SUCCESS,
        data
    };
}

export function foodNewFailure(err){
    return {
        type: FOOD_NEW_FAILURE,
        err: err
    };
}



export function foodReadRequest(){
    return (dispatch) => {
        dispatch(foodRead());
        
        let url = "/api/food/allFood";
        console.log("foodReadRequest : " + url );
        
        return axios.get(url)
        .then((res) => {
            dispatch(foodReadSuccess(res.data));
            console.log("FoodReadResponse" + res);
        }).catch((err) => {
            dispatch(foodReadFailure(err));
        });
    };
}

export function foodRead() {
    return {
        type: FOOD_READ
    };
}

export function foodReadSuccess(data){
    return {
        type: FOOD_READ_SUCCESS,
        data
    };
}

export function foodReadFailure(err){
    return {
        type: FOOD_READ_FAILURE,
        err: err
    };
}

//음식 수정
export function foodUpdateRequest(id, name, ingredients){
    return (dispatch) => {
        dispatch(foodUpdate());
        
        let url = "/api/food/updateFood";
        console.log("foodUpdateRequest : " + url + "//" + id + "//" + name + "//" + ingredients);
        
        return axios.post(url, {id, name, ingredients})
        .then((res) => {
            dispatch(foodUpdateSuccess(res.data));
            console.log("FoodUpdateResponse" + res);
        }).catch((err) => {
            dispatch(foodUpdateFailure(err));
        });
    };
}

export function foodUpdate() {
    return {
        type: FOOD_UPDATE
    };
}

export function foodUpdateSuccess(data){
    return {
        type: FOOD_UPDATE_SUCCESS,
        data
    };
}

export function foodUpdateFailure(err){
    return {
        type: FOOD_UPDATE_FAILURE,
        err: err
    };
}


//음식 삭제
export function foodDeleteRequest(id){
    return (dispatch) => {
        dispatch(foodDelete());
        
        let url = "/api/food/deleteFood";
        console.log("foodDeleteRequest : " + url + "//" + id);
        
        return axios.post(url, {id})
        .then((res) => {
            dispatch(foodDeleteSuccess(res.data));
            console.log("FoodDeleteResponse" + res);
        }).catch((err) => {
            dispatch(foodUpdateFailure(err));
        });
    };
}

export function foodDelete() {
    return {
        type: FOOD_DELETE
    };
}

export function foodDeleteSuccess(data){
    return {
        type: FOOD_DELETE_SUCCESS,
        data
    };
}

export function foodDeleteFailure(err){
    return {
        type: FOOD_DELETE_FAILURE,
        err: err
    };
}