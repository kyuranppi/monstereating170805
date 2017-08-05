import React from 'react';
import {
    FoodWrite 
    
} from 'components';

class FoodList extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){

    }
    
    showList(dataArr){
        if(typeof dataArr === "undefined" || dataArr.length === 0) return "";
        return dataArr.map((item,index) => 
          <FoodWrite
            key={item._id}
            id={item._id}
            name={item.name}
            ingredients={item.ingredients}
            readMode= {true}
            onUpdate = {this.props.onUpdate}
            onDelete = {this.props.onDelete}
          />
        );
    }
    
    render() {
        
        const show = this.showList(this.props.items);
        
        return (
            <div >
                 {show}
            </div>
        )
    }
}

FoodList.PropTypes = {
    items: React.PropTypes.array,
    onUpdate: React.PropTypes.func, 
    onDelete: React.PropTypes.func
  
}

FoodList.defaultProps = {
   items: [],
   onUpdate: (id, name, ingredients) => {console.log("onUpdate is undefined")},
   onDelete: (id) => {console.log("onDelete is undefined")},
}


export default FoodList;