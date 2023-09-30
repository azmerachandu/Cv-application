import React, {Component} from 'react';
import General from "./Components/General";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      designation: "Designation",
      city: "City, Country",
      phone: "Phone",
      email: "Email",
      linkedin: "Linkedin",
      github: "Github"
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.parentNode.id;
    console.log(value, id);
    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <div className="App">
        <General
          handleChange={this.handleChange}
          details={this.state}
        />
        <Skills/>
        <Employment
          handleChange={this.handleChange}
        />
        <Education
          handleChange={this.handleChange}
        />
        <Projects/>
      </div>
    )
  }
}

export default App;
