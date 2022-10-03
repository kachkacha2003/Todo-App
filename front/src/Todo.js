import React from "react";
import { ReactComponent as Cross } from "./images/icon-cross.svg";


class Todo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.data,
      color: false,
    };
    this.ovalHandleClick=this.ovalHandleClick.bind(this)
  }
  ovalHandleClick = () => {
    this.setState({ color: !this.state.color });
  };
  DeleteTodo=(id)=>{
    
    let TodoMap=this.state.data.filter(todo=>todo.id===id)
    
    fetch(`http://localhost:4000/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(TodoMap),
          }).then((response) => response.json()).then(data => {
            this.props.setData(data)
          })
  
  }
    
 
  
 

  render(){
    return(
    
          <div className={`input-Div `}  >
                <div className="flex">
                  <div
                    key={this.props.id}
                    onClick={this.ovalHandleClick}
                    className={`oval ${this.props.dark ? "active" : null}
         ${this.state.color ? "oval-click " : null}  ` }
                  >
                  
                  </div>
                  <h2 onClick={this.ovalHandleClick} className={`info ${this.props.dark ? "white" : null} 
                  ${this.state.color ? "line" : null} `}>
                    {this.props.info}
                  </h2>
                </div>
                 <Cross className="cross" onClick={()=>this.DeleteTodo(this.props.id)} />
                 
              </div>
              
    )
  }





}

export default Todo