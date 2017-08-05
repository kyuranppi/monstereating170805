import React from 'react';

class FoodWrite extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            ingredients: props.ingredients,
            readMode: props.readMode,
            modifyMode: false
        }
        this.handleNewFood = this.handleNewFood.bind(this);
        this.handleUpdateFood = this.handleUpdateFood.bind(this);
        this.handleDeleteFood = this.handleDeleteFood.bind(this);
        this.handleModifyModeCancel = this.handleModifyModeCancel.bind(this);
    }
    
    componentDidMount(){
    }
    
    handleNameChange(e){
        //Name 값이 바뀌면 갱신
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        });
            }
            
    handleIngredientsChange(e){
        //Ingredients 값이 바뀌면 갱신
         this.setState({
            ingredients: e.target.value
        });
    }
    
    handleNewFood(){
        //서버로 값을 전송
        this.props.onPost(this.state.name, this.state.ingredients)
        .then(() =>{
            console.log("we post!")
            this.setState({
                name: "",
                ingredients: ""
            });
        });
    }
    
    handleUpdateFood(){
        if( this.state.modifyMode){
        this.props.onUpdate(this.props.id, this.state.name, this.state.ingredients).then(() => {
            console.log("update ended");
            this.setState({
                modifyMode: false
            })
        });
    } else{
        this.setState({
            modifyMode: true
        });
        }
    }
    
    handleDeleteFood(){
        this.props.onDelete(this.props.id).then(()=> {
           console.log("delete ended"); 
        });
    }
    
    handleModifyModeCancel(){
        this.setState({
            modifyMode: false,
            name: this.props.name,
            ingredients: this.props.ingredients
        });
    }
    
    render() {
        const phName = this.state.readMode ? "":"name";
        const phIngredients = this.state.readMode? "":"ingredients";
        const ableInput = (
                <input 
                        value={this.state.name} 
                        placeholder={phName} 
                        name="name" 
                        id="name" 
                        type="text" 
                        className="validate" 
                        onChange={(e) => this.handleNameChange(e)}/>
            )
        const disableInput = (
                 <input disabled
                        value={this.state.name} 
                        placeholder={phName}
                        name="name" 
                        id="name" 
                        type="text" 
                        className="validate" 
                        onChange={(e) => this.handleNameChange(e)}/>
            )
            
        const ableTextArea = (
             <textarea 
                        className="materialize-textarea validate" 
                        placeholder={phIngredients}
                        name="ingredients" 
                        id="ingredients"
                        value={this.state.ingredients}
                        onChange={(e) => this.handleIngredientsChange(e)}></textarea>
            )
            
         const disableTextArea = (
             <textarea disabled
                        className="materialize-textarea validate" 
                        placeholder={phIngredients}
                        name="ingredients" 
                        id="ingredients"
                        value={this.state.ingredients}
                        onChange={(e) => this.handleIngredientsChange(e)}></textarea>
            )
            
         const cancelBtn = (
             <a href="#!" 
                        className="grey-text text-darken-4" 
                        onClick={this.handleModifyModeCancel}>취소</a>
            )
                
        
        const createBtn = (
             <a href="#!" 
                        className="btn btn-small grey darken-4" 
                        onClick={this.handleNewFood}>등록</a>
                        )
        
        const modifyBtn = (
            <div>
            <a href="#!" 
                        className="grey-text text-darken-4" 
                        onClick={this.handleUpdateFood}>수정</a>
                        
            <a href="#!" 
                        className="grey-text text-darken-4" 
                        onClick={this.handleDeleteFood}>삭제</a>
                        { this.state.modifyMode ? cancelBtn: ""}
            </div>
            
            )
        
      //느낌표는 반대를 의미한다. 
        return (
            <div className="col s3">
                  <div className="card hoverable">
                    <div className="card-content row">
                    
                        <div className= "input-field col s12" >
                            {this.state.modifyMode || !this.state.readMode ? ableInput : disableInput}
                            <label htmlFor="name">{this.state.readMode ? "" : "Name"}</label>
                        </div>
                        <div className="input-field col s12">
                            {this.state.modifyMode || !this.state.readMode ? ableTextArea : disableTextArea}
                             <label htmlFor="ingredients">{this.state.readMode ? "" : "Ingredients"}</label>
                        </div>
                    </div>  
                    <div className="card-action">
                       {this.state.readMode ? modifyBtn : createBtn}
                    </div> 
                </div>
               
            </div>
        )
    }
}

FoodWrite.PropTypes = {
    onPost: React.PropTypes.func,
    readMode: React.PropTypes.bool,
    onUpdate: React.PropTypes.func,
    onDelte: React.PropTypes.func
  
}

FoodWrite.defaultProps = {
   onPost: (name, ingredients) => {console.log("onPost is undefined")},
   onUpdate: (id, name, ingredients) => {console.log("onUpdate is undefined")},
   onDelte: (id) => {console.log("onDelte is undefined")},
   readMode: false
}


export default FoodWrite;