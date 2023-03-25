import React from "react";
import axios from "axios";

class getapi extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://6380e309786e112fe1bd1aa5.mockapi.io/a`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.string}</li>
        ))}
      </ul>
    );
  }
}
export default getapi;
