import React from "react";


export default class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }

    render() {
        return (
          <div style={{marginLeft: 100}}>
            <p> ddd {this.state.date}</p>
          </div>
        );
      }
}