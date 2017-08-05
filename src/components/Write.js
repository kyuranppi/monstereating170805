import React from 'react';


class Write extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: ""
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }
    
    
    componentDidMount(){
        $('#content').val('');
        
    }
    
    handleCreate(){
        const title = this.state.title;
        const content = this.state.content;
        
        this.props.onPost(title, content).then(
            () => {
               console.log("item create");
               this.setState({
                   title: "",
                   content: ""
               })
            });
    }
    
     handleTitleChange(e){
        this.setState({
           title: e.target.value
        });
        console.log("title change : " + this.state.title);
    }
    
    handleContentChange(e){
        this.setState({
           content: e.target.value
        });
        console.log("content change : " + this.state.content);
    }
    
  
    render() {
    
        return (
            <div className="col s12 m4 l3">
                <div className="card hoverable">
                    <div className="card-content row">
                        <div className="input-field col s12">
                            <input value={this.state.title} placeholder="title" name="title" id="title" type="text" className="validate" onChange={(e) => this.handleTitleChange(e)}/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea 
                            className="materialize-textarea validate" 
                            placeholder="content" 
                            name="content" 
                            id="content"
                            value={this.state.content}
                            onChange={(e) => this.handleContentChange(e)}></textarea>
                            <label htmlFor="content">Content</label>
                        </div>
                    </div>  
                    <div className="card-action">
                        <a 
                        href="#!" 
                        className="btn btn-small grey darken-4" 
                        onClick={this.handleCreate}>등록</a>
                    </div> 
                </div>
            </div>
        );
    }
}

Write.propTypes = {
    onPost: React.PropTypes.func
}

Write.defaultProps = {
    onPost: (title, content) => { console.error('post function is not define'); }
}

export default Write;