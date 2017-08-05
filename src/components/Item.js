import React from 'react';


// List에 들어가는 Item 하나를 만듦

class Item extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            is_editable: false,
            title: this.props.field.title,
            content: this.props.field.content
        }
        this.handleEditable = this.handleEditable.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }
    
    handleEditable(){
        this.setState({
           is_editable: !this.state.is_editable 
        });
    }
    
    handleTitleChange(e){
        this.setState({
           title: e.target.value
        });
    }
    
    handleContentChange(e){
        this.setState({
           content: e.target.value
        });
    }
    
    handleUpdate(e){
        const id = e.target.dataset.id;
        const title = this.state.title;
        const content = this.state.content;
        
        this.props.updateMethod(id, title, content).then(
            () => {
                console.log("update item");
                this.props.field.content = content;
                this.props.field.title = title;
                this.setState({
                    is_editable: false
                })
            });
    }
    
    handleDelete(e){
        const id = e.target.dataset.id;
        this.props.deleteMethod(id).then(
            () => {
                console.log("delete item");
                this.setState({
                    is_editable: false
                })
            });
    }
    
    
    render() {
        
        const editBox = (
            <div className="card-content row">
                <div className="input-field">
                    <input onChange={(e) => this.handleTitleChange(e)} placeholder="title" name="title" id={"title-" + this.props.index} value={this.state.title} />
                    <label htmlFor={"title-" + this.props.index}>Title</label>
                </div>
                <div className="input-field">
                    <textarea className="materialize-textarea" placeholder="content" name="content" id={"content-" + this.props.index} onChange={this.handleContentChange} value={this.state.content}></textarea>
                    <label htmlFor={"content-" + this.props.index}>Title</label>
                </div>
            </div>  
        );
        
        const normalBox = (
            <div className="card-content row">
                <div className="card-title">{this.props.field.title}</div>
                <p>{this.props.field.content}</p>
            </div>  
        );
        
        const editBtn = (
            <div className="card-action">
                <a href="#!" onClick={this.handleEditable}>취소</a>
                <a href="#!" data-id={this.props.field._id} onClick={this.handleUpdate}>수정</a>
                <a href="#!" data-id={this.props.field._id} onClick={this.handleDelete}>삭제</a>
            </div>
        );
            
        const normalBtn = (
            <div className="card-action">
                <a href="#!" onClick={this.handleEditable}>수정</a>
            </div>        
        );
        
        return (
            <div className="col s12 m4 l3">
                <div className="card hoverable">
                    {this.state.is_editable ? editBox:normalBox}
                    {this.state.is_editable ? editBtn:normalBtn}
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    field: React.PropTypes.object,
    updateMethod: React.PropTypes.func,
    deleteMethod: React.PropTypes.func
}

Item.defaultProps = {
    field: {
        title: "newTitle",
        content: "newContent",
        created: Date.now()
    },
    updateMethod: () => { console.log("updateMethod is not defined")},
    deleteMethod: () => { console.log("deleteMethod is not defined")}
}

export default Item;