import React from "react";
import Header from './Header';
import TodoItems from "./FetchTodo";
import Footer from "./Footer";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { active: false,data: [],
    info:{info:"",done:"false"},
    todo: { info: "", done: "false" } };
    this.handleClick=this.handleClick.bind(this)
  }


  componentDidMount() {
    fetch("http://localhost:4000")
      .then((response) => response.json() )
      .then((data) => this.setState({ data }));
  }
  
  handleClick() {
    this.setState({ active: !this.state.active });
  };

  setData = (data) => {
    this.setState({...this.state, data})
  }


  

  render(){
    console.log(this.state.data.length)
    return(
      <div className={`container ${this.state.active ? "black" : null}`} >
        <Header setData={this.setData} data={this.state.data} title="TODO" isDark={this.state.active} handleClick={this.handleClick}/>
        <TodoItems  setData={this.setData} data={this.state.data}  isDark={this.state.active} handleClick={this.handleClick} />
      </div>

    )
  }
}

export default App;
