import React from 'react';
import { List } from 'components';
import { connect } from 'react-redux';
import {
    postCreateRequest,
    postReadRequest,
    postUpdateRequest,
    postDeleteRequest
} from 'actions/post';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.postReadRequest().then(
            () => {
               console.log("get post : " + this.props.postList + "  state : " + this.props.postReadStatus); 
            });
    }
    
    createMethod(title, content){
        this.props.postCreateRequest(title, content).then(
            () => {
               console.log("create " + title + "//" + content);
            });
    }
    
    updateMethod(id,title,content){
        this.props.postUpdateRequest(id, title, content).then(
            () => {
               console.log("update " + id + "//" + title + "//" + content); 
            });
    }
    
    deleteMethod(id){
        this.props.postDeleteRequest(id).then(
            () => {
               console.log("delete " + id); 
            });
    }
    
    render() {
        return (
            <div>
                <List 
                posts={this.props.postList} 
                updateMethod={this.props.postUpdateRequest} 
                createMethod={this.props.postCreateRequest} 
                deleteMethod={this.props.postDeleteRequest} />
            </div>
        )
    }
}

Home.PropTypes = {
    postList: React.PropTypes.array
}

Home.defaultProps = {
    postList: []
}

const mapStateToProps = (state) => {
    return {
        postList: state.post.list.data,
        postReadStatus: state.post.list.status,
        postStatus: state.post.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postCreateRequest: (title, content) => {
            return dispatch(postCreateRequest(title, content));
        },
        postReadRequest: () => {
            return dispatch(postReadRequest());
        },
        postUpdateRequest: (id, title, content) => {
            return dispatch(postUpdateRequest(id, title, content));
        },
        postDeleteRequest: (id) => {
            return dispatch(postDeleteRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);