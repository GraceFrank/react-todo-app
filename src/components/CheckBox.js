import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input
          onChange={() => this.props.handleChange(this.props.item.id)}
          type="checkbox"
          checked={this.props.item.completed}
          className="custom-control-input"
          id={`customCheck${this.props.item.id}`}
        />
        <label
          style={this.styleText()}
          className="custom-control-label"
          htmlFor={`customCheck${this.props.item.id}`}
        >
          {this.props.item.text}
        </label>
      </div>
    );
  }

  styleText() {
    return this.props.item.completed
      ? { color: "grey", textDecoration: "line-through" }
      : { color: "red" };
  }
}

export default CheckBox;
