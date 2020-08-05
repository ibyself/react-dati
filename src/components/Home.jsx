import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./style.css";
export default class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <h2>百万答题</h2>
        <Button onClick={() => this.props.history.push("/dati")}>
          随机答题
        </Button>
      </div>
    );
  }
}
