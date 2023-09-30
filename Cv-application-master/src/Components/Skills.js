import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.skills').querySelector('.addForm');
  console.log(btn);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  addSkill = (e) => {
    e.preventDefault();
    const skill = document.skillsForm.skill.value;
    this.setState((prevState) => {
      return { skills: [...prevState.skills, skill]}
    })
    const close = document.querySelector('.skills').querySelector('.closeForm');
    close.click();
  }

  removeSkill = (e) => {
    const div = e.target.parentElement;
    console.log(div);
    const index = +div.getAttribute('data-index');
    console.log(index);

    this.setState(prevState => {
      prevState.skills.splice(index,1);
      return {skills: prevState.skills}
    })
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <hr />
        <div className="flex">
          {this.state.skills.map((skill, index) =>
            <div className="skill flex" key={index} data-index={index}>
              <p>{skill}</p>
              <button onClick={this.removeSkill}>+</button>
            </div>)
          }
        </div>
        <form className="none" name="skillsForm">
          <div className="skillsForm">
            <input id="skill" placeholder="Add your top skills!" name="skill"/>
            <button className="closeForm" onClick={cancel}>Cancel</button>
            <button onClick={this.addSkill}>+ skill</button>
          </div>
        </form>
        <button className="addForm" onClick={handleClick}>Add skills</button>
      </div>
    )
  }
}

export default Skills;
