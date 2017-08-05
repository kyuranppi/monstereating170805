import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    post: {
        status: 'INIT',
        error: -1,
        success: false
    },
    get: {
        status: 'INIT',
        error: -1,
        success: false
    },
    list: {
        status: 'INIT',
        data: []
    }
}

export default function post(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }
    
    
    switch(action.type){
        case types.POST_CREATE:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.POST_CREATE_SUCCESS:
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.POST_CREATE_FAILURE:
            return update(state,{
                list: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        
        case types.POST_READ:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.POST_READ_SUCCESS:
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.POST_READ_FAILURE:
            return update(state,{
                list: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
            
        case types.POST_UPDATE:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.POST_UPDATE_SUCCESS:
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.POST_UPDATE_FAILURE:
            return update(state,{
                list: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        case types.POST_DELETE:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.POST_DELETE_SUCCESS:
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
                }
            });
        case types.POST_DELETE_FAILURE:
            return update(state,{
                list: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
            
        default:
            return state;
    }
}