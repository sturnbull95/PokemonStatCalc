import React, { Component } from "react";
//var functions = require("./PokemonFunctionality.js");
import axios from "axios";
import ChooseFirst from "./ChooseFirst.jsx";
import ChooseSecond from "./ChooseSecond.jsx";
import Suggestions from "./Suggestions.jsx";
import Stats from "./Stats.jsx";
import Moves from "./Moves.jsx";
import "../public/index.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon1: "",
      pokemon2: "",
      firstPok: "",
      secondPok: "",
      firstSelect: [],
      secondSelect: [],
      results1: [],
      results2: [],
      flag: false,
      potential: "",
      moves1: [],
      moves2: []
    };
    this.change = this.change.bind(this);
    this.handleInputChange1 = this.handleInputChange1.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
    this.choose1 = this.choose1.bind(this);
    this.choose2 = this.choose2.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.getInfo2 = this.getInfo2.bind(this);
  }
  // componentDidMount() {
  //   var context = this;
  //   axios.get("/pok").then(function(resp) {
  //     // var genderRev = functions.genderGen(
  //     //   resp.data.gender,
  //     //   100 - resp.data.gender
  //     // );
  //     context.setState({
  //       pokemon: resp.data.img
  //     });
  //   });
  // }
  handleInputChange1(e) {
    console.log(e.target.value);
    this.setState(
      {
        firstPok: e.target.value
      },
      () => {
        if (this.state.firstPok && this.state.firstPok.length > 0) {
          this.getInfo();
        } else if (!this.state.firstPok) {
        }
      }
    );
  }
  handleInputChange2(e) {
    console.log(e.target.value);
    this.setState(
      {
        secondPok: e.target.value
      },
      () => {
        if (this.state.secondPok && this.state.secondPok.length > 0) {
          this.getInfo2();
        } else if (!this.state.secondPok) {
        }
      }
    );
  }
  getInfo() {
    var context = this;
    axios
      .get("/pok", {
        params: {
          name: this.state.firstPok
        }
      })
      .then(({ data }) => {
        console.log(data, "DATA");
        context.setState({
          results1: data
        });
      });
  }
  getInfo2() {
    var context = this;
    axios
      .get("/pok", {
        params: {
          name: this.state.secondPok
        }
      })
      .then(({ data }) => {
        console.log(data, "DATA");
        context.setState({
          results2: data
        });
      });
  }
  firstPoke() {
    console.log("change poke");
  }
  change(e) {
    console.log(e.target.value);
    this.setState({
      user: e.target.value
    });
  }
  choose1(val) {
    var context = this;
    console.log(typeof val.target.innerText);
    axios
      .get("/find", {
        params: {
          name: val.target.innerText
        }
      })
      .then(({ data }) => {
        console.log(data, "DATA");
        context.setState(
          {
            firstSelect: data,
            pokemon1: data[0].img,
            firstPok: "",
            results1: [],
            flag: true
          },
          function() {
            console.log(context.state.firstSelect, "hello", context.state.flag);
          }
        );
      });
  }
  choose2(val) {
    var context = this;
    axios
      .get("/find", {
        params: {
          name: val.target.innerText
        }
      })
      .then(({ data }) => {
        console.log(data, "DATA");
        context.setState(
          {
            secondSelect: data,
            pokemon2: data[0].img,
            secondPok: "",
            results2: [],
            flag: true
          },
          function() {
            console.log(context.state.secondSelect);
          }
        );
      });
  }

  render() {
    var tag1;
    if (this.state.flag) {
      console.log(this.state.firstSelect);
      tag1 = (
        <div className="tag1">
          <Moves moves={this.state.firstSelect[0].moves} />
        </div>
      );
    } else {
      tag1 = "";
    }
    return (
      <div className="container">
        <div className="firstPokMov">
          <img className="img1" src={this.state.pokemon1} />
          <div className="moves1">{tag1}</div>
        </div>
        <img className="img3" src={this.state.pokemon1} />
        <img className="img4" src={this.state.pokemon2} />
        <img className="img2" src={this.state.pokemon2} />
        <div className="First">
          <ChooseFirst
            firstPok={this.state.firstPok}
            handleInputChange1={this.handleInputChange1}
          />
        </div>
        <div className="moves1">{tag1}</div>
        <div className="Second">
          <ChooseSecond
            secondPok={this.state.secondPok}
            handleInputChange2={this.handleInputChange2}
          />
        </div>
        <div className="list1">
          <Suggestions choose={this.choose1} results={this.state.results1} />
        </div>
        <div className="list2">
          <Suggestions choose={this.choose2} results={this.state.results2} />
        </div>
      </div>
    );
  }
}

export default App;
