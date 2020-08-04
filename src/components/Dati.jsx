import React, { Component } from "react";

import { connect } from "react-redux";
import { getList } from "../redux/actions/timu";
class Dati extends Component {
  componentDidMount() {
    this.props.getTimuList(1);
    console.log(this.props.timuList);
  }
  render() {
    return (
      <div>
        {this.props.timuList.map((item, index) => {
          return <p key={index}>{item.quiz}</p>;
        })}
      </div>
    );
  }
}
export default connect(
  (state) => ({
    timuList: state.timuList,
  }),
  {
    getTimuList: getList,
  }
)(Dati);
