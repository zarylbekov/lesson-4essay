import React from "react";
export default class FlaworForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {value: "coconut"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log("Send message: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your favorite taste:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="coconut">coconut</option>
            <option value="lime">lime</option>
          </select>
        </label>
          <input type="submit" value="Send!"/>
      </form>
    )
  }
}