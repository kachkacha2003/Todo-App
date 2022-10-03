import React from "react";
import "./index.css";
import { ReactComponent as ReactLogo } from "./images/icon-moon.svg";
import { ReactComponent as Sun } from "./images/icon-sun.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: { info: "", done: "false" }, data: this.props.data };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ todo: { info: event.target.value, done: "false" } });
  };
  handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.trim()) {
        if (event.target.value !== "") {
          event.preventDefault();
          fetch("http://localhost:4000", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.todo),
          }).then((response) => response.json()).then(data => {
            this.props.setData(data)
          })
          // console.log(this.state.todo);

          

          //   this.props.data.push(this.state);
          //  console.log(this.props.data)

          event.target.value = "";
        }
      }
    }
  };

  render() {
    let { info, done } = this.state.todo;
    return (
      <header>
        <div className="header">
          <div className="todo-header">
            <h1 onClick={() => console.log(this.state.data)}>
              {this.props.title}
            </h1>

            {this.props.isDark ? (
              <Sun className="img" onClick={() => this.props.handleClick()} />
            ) : (
              <ReactLogo
                className="img"
                onClick={() => this.props.handleClick()}
              />
            )}
          </div>
          <div
            className={`input-div ${
              this.props.isDark ? "active border" : null
            }`}
          >
            <div
              className={`oval  ${this.props.isDark ? "active" : null}`}
            ></div>
            <textarea
              className={`area ${this.props.isDark ? "active inpt" : null}`}
              type={"text"}
              placeholder={"Create a new todo…"}
              defaultValue={info}
              onKeyPress={this.handleSubmit}
              onChange={this.handleChange}
              maxLength="50"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
