import React, { Component } from "react";
import { Button } from "antd-mobile";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.history.push("/dati")}>
          随机答题
        </Button>
      </div>
    );
  }
}
