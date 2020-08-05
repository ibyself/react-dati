import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../redux/actions/timu";
import "./dati.css";
class Dati extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      optionStyle: ["bgItem", "bgItem", "bgItem", "bgItem"],
      isChoose: false,
      score: 0,
    };
  }
  componentDidMount() {
    let page = parseInt(Math.random() * 1600);
    this.props.getTimuList(page);
    console.log(this.props.timuList);
  }
  handleEvent = (index) => {
    if (this.state.isChoose) return;
    console.log(index);
    let answerIndex = parseInt(
      this.props.timuList[this.state.currentIndex].answer
    );

    if (index + 1 === answerIndex) {
      let newOptionStyle = this.state.optionStyle;
      let score = this.state.score;
      score += 10;
      newOptionStyle[index] = "bgCorrect";
      this.setState({
        optionStyle: newOptionStyle,
        isChoose: true,
        score,
      });
    } else {
      let newStyle = this.state.optionStyle;
      newStyle[index] = "bgError";
      newStyle[answerIndex - 1] = "bgCorrect";
      this.setState({
        optionStyle: newStyle,
        isChoose: true,
      });
    }
    setTimeout(() => {
      let index = this.state.currentIndex;
      index++;
      if (index === 10) {
        this.props.history.push("/result", { score: this.state.score });
      } else {
        this.setState({
          currentIndex: index,
          optionStyle: ["bgItem", "bgItem", "bgItem", "bgItem"],
          isChoose: false,
        });
      }
    }, 2000);
  };
  render() {
    let cIndex = this.state.currentIndex;
    let timuList = this.props.timuList;
    console.log(timuList);
    if (timuList.length > 0) {
      let options = JSON.parse(timuList[cIndex].options);
      return (
        <div className="main">
          <h1>{timuList[cIndex].quiz}</h1>
          <ul>
            {options.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    this.handleEvent(index);
                  }}
                  className={this.state.optionStyle[index]}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
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
