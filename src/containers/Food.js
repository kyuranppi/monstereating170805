//Home꺼 가져옴
import React from 'react';
import { List, FoodWrite, FoodList} from 'components';
import { connect } from 'react-redux';
import {
    foodNewRequest,
    foodReadRequest,
    foodUpdateRequest,
    foodDeleteRequest
    
} from 'actions/food';

class Food extends React.Component {
    
    constructor(props){
        super(props);
        
        }
        
    
    componentDidMount(){
        this.props.foodReadRequest().then(() => {
           console.log("items: " + this.props.items) 
        });
    }
    
    render() {
        return (
            <div className="row">
              <FoodList
                 items={this.props.foods}
                 onUpdate={this.props.foodUpdateRequest}
                 onDelete={this.props.foodDeleteRequest}
                 />
                 <FoodWrite 
                 onPost={this.props.foodNewRequest}
                 />
                 
               
            </div>
        )
    }
}

Food.PropTypes = {
  
}

Food.defaultProps = {
   
}


const mapStateToProps = (state) => {
    return {
        foods: state.food.list.data
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        foodNewRequest: (name, ingredients) => {
            return dispatch(foodNewRequest(name, ingredients));
        },
        foodReadRequest: () => {
            return dispatch(foodReadRequest());
        },
        
        foodUpdateRequest: (id, name, ingredients) => {
            return dispatch(foodUpdateRequest(id, name, ingredients));
        },
        
        foodDeleteRequest: (id) => {
            return dispatch(foodDeleteRequest(id));
        }
       
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Food);