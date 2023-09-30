import React, {Component} from 'react';
import JobComponent from "./JobComponent";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="jobsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.jobs').querySelector('.addForm');
  console.log(btn);
  const form = document.querySelector('form[name="jobsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }

  }

  addExperience = (e) => {
    e.preventDefault();
    const {role, company, from, to, city, description} = document.jobsForm;

    this.setState((prevState) => {
      return {
        jobs: [...prevState.jobs, {
          role: role.value,
          company: company.value,
          from: from.value,
          to: to.value,
          city: city.value,
          description: description.value
        }]
      }
    })

    const close = document.querySelector('.jobs').querySelector('.closeForm');
    close.click();
  }

  removeExperience = (e) => {
    const div = e.target.parentElement;
    const index = div.getAttribute('data-index');
    this.setState(prevState => {
      prevState.jobs.splice(index,1)
      return {projects: prevState.jobs}
    })
  }

  render() {
    return (
      <div className="jobs">
        <h3>Employment</h3>
        <hr />
        <div>
          {this.state.jobs.map((job, index) =>
            <JobComponent
              key={index}
              index={index}
              details={job}
              removeExperience={this.removeExperience}
            />)
          }
        </div>
        <form className="none" name="jobsForm">
          <div>
            <label>Role</label>
            <input placeholder="Role" name="role"/>
          </div>

          <div>
            <label>Company Name</label>
            <input placeholder="Company Name" name="company"/>
          </div>

          <div className="duration flex">
            <div>
              <label>From</label>
              <input placeholder="DD/MM/YYYY" name="from"/>
            </div>
            <div>
              <label>To</label>
              <input placeholder="DD/MM/YYYY or Present" name="to"/>
            </div>
          </div>

          <div>
            <label>City</label>
            <input placeholder="City" name="city"/>
          </div>

          <div>
            <label>Description</label>
            <input placeholder="Responsibilities and achievements" name="description"/>
          </div>

          <button className="closeForm" onClick={cancel}>Cancel</button>
          <button onClick={this.addExperience}>+ Experience</button>
        </form>
        <button className="addForm" onClick={handleClick}>Add Work experience</button>
      </div>
    )
  }
}

export default Employment;
