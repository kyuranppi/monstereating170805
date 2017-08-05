import React from 'react';
import { Item, Write } from 'components';

class List extends React.Component {
    
    
    showPost(arr){
        if( arr == null || arr.length < 1) return null;
        return arr.map((item,i) =>
            <Item 
            deleteMethod={this.props.deleteMethod}
            updateMethod={this.props.updateMethod}
            field={item} 
            index={i}
            />
        );
    }
    
    render() {
        const postArr = this.showPost(this.props.posts);
        
        return (
            <div className="row">
                {postArr}
                <Write onPost={this.props.createMethod}/>
            </div>
        );
    }
}

List.propTypes = {
    posts: React.PropTypes.array,
    createMethod: React.PropTypes.func,
    updateMethod: React.PropTypes.func,
    deleteMethod: React.PropTypes.func
}

List.defaultProps = {
    posts: [],
    createMethod: (title, content) => { console.log("createMethod is not defined")},
    updateMethod: (id, title, content) => { console.log("updateMethod is not defined")},
    deleteMethod: (id) => { console.log("deleteMethod is not defined")}
}


export default List;