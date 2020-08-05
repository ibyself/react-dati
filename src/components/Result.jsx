import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./style.css";
export default class Result extends Component {
  toHome = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    return (
      <div className="content">
        <h2>分数：{this.props.location.state.score}</h2>
        <Button onClick={this.toHome}>回到首页</Button>
      </div>
    );
  }
}
