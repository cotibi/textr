import React, { Component } from "react";
import Card from "./Card";
import Input from "./Input";

class App extends Component {
  state = {
    input: [{ title: "" }, { body: "" }],
    card: []
  };

  handleTitleChange = (e) => {
    this.setState({
      input: [{ title: e.target.value }, { body: this.state.input[1].body }]
    });
  };

  handleBodyChange = (e) => {
    this.setState({
      input: [{ title: this.state.input[0].title }, { body: e.target.value }]
    });
  };

  handleClick = () => {
    let prevArr = this.state.card;

    this.setState({ card: [...prevArr, this.state.input] });

    // console.log(this.state.card);

    return this.setState({ input: [{ title: "" }, { body: "" }] });
  };


  deleteCard = (id) => {

    let prevArr = this.state.card;
    let newArr = prevArr.filter((item, index) => {
      return index !== id;
    });

    this.setState({ card: newArr });
  };


  render() {
    return (
      <div className="container">
        <h1 className="heading">Txtr</h1>
        <Input
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.input[0].title}
        />
        <Input
          type="text"
          onChange={this.handleBodyChange}
          value={this.state.input[1].body}
        />
        <button onClick={this.handleClick}>Insert</button>

        {this.state.card.map((item, index) => (
          <Card
            key={index}
            id={index}
            title={item[0].title}
            body={item[1].body}
            onChecked={this.deleteCard}
          />
        ))}

      </div>
    );
  }
}

export default App;
