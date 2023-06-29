import React from "react";
export default class EssayForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {value: "Please write your hobby"};

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
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
          <input type="submit" value="Send!"/>
      </form>
    )
  }
}