import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>
        <ClassButton title={this.props.buttonText} />
      </div>
    );
  }
}

export default ClassDiv;