import React from "react";


class Footer extends React.Component {
  render(){
    console.log(this.props.data.length)
    return(
      <>
      <footer className={`${this.props.isDark ? 'active' : null}`}>
        <h4>{this.props.data.length} items left</h4>
        <div className="all-active-completed">
          <h4 className="all">All</h4>
          <h4>Active</h4>
          <h4>Completed</h4>

        </div>

        <div className="Clear-Completed">
          <h4 >Clear Completed</h4>
        </div>

      </footer>
      <div className={`reserve-footer ${this.props.isDark ? 'active' : null}`}>
      <h4> {this.props.data.length} items left</h4>
      <h4 >Clear Completed</h4>
        
      </div>
      <div className={`reserve-footer2 ${this.props.isDark ? 'active' : null}`}>
        <div className="flex2">
      <h4 className="all">All</h4>
          <h4>Active</h4>
          <h4>Completed</h4>
        
      </div>
      </div>
      </>


    )
  }


}

export default Footer;