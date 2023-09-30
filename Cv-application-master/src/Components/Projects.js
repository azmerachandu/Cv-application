import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="projectsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.projects').querySelector('.addForm');
  console.log(btn);
  const form = document.querySelector('form[name="projectsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  addProject = (e) => {
    e.preventDefault();
    const title = document.projectsForm.title.value;
    const description = document.projectsForm.description.value;

    this.setState((prevState) => {
      return { projects: [...prevState.projects, {title, description}]}
    })
    const close = document.querySelector('.projects').querySelector('.closeForm');
    close.click();
  }

  removeProject = (e) => {
    const div = e.target.parentElement;
    const index = div.getAttribute('data-index');
    this.setState(prevState => {
      prevState.projects.splice(index,1)
      return {projects: prevState.projects}
    })
  }

  render() {
    return (
      <div className="projects">
        <h3>Projects</h3>
        <hr />
        <div>
          {this.state.projects.map((project, index) =>
            <div className="project" key={index} data-index={index}>
              <ul>
                <li><b>{project.title}</b> {project.description}</li>
              </ul>
              <button onClick={this.removeProject}>Remove project</button>
            </div>)
          }
        </div>
        <form className="none" name="projectsForm">
          <div className="projectsForm">
            <div>
              <label>Title</label>
              <input placeholder="Title of your project" name="title"/>
            </div>

            <div>
              <label>Description</label>
              <input placeholder="A brief description of your project" name="description"/>
            </div>

            <button className="closeForm" onClick={cancel}>Cancel</button>
            <button type="submit" onClick={this.addProject}>+ project</button>
          </div>
        </form>
        <button className="addForm" onClick={handleClick}>Add Projects</button>
      </div>
    )
  }
}

export default Projects;
