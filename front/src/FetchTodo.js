import React from "react";
import "./index.css";
import Footer from "./Footer";
import { ReactComponent as Check } from "./images/icon-check.svg";
import Todo from "./Todo";
class TodoItems extends React.Component {
constructor(props){
  super(props);

}


  




  render() {
   
    return (
      <>
        <div className={`comments ${this.props.isDark ? "active" : null} `}>
          {this.props.data.map((todos) => (
            <div key={todos.id}>
              <Todo
                setData={this.props.setData}
                id={todos.id}
                dark={this.props.isDark}
                info={todos.info}
                data={this.props.data}
                check={<Check />}
                
                
              />
            </div>
          ))}
        </div>
        <Footer
          data={this.props.data}
          isDark={this.props.isDark}
          handleClick={this.props.handleClick}
        />
      </>
    );
  }
}

export default TodoItems;
