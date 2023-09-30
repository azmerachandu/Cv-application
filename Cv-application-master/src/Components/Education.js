import React, {Component} from 'react';
import EducationComponent from "./EducationComponent";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="educationsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.educations').querySelector('.addForm');
  console.log(btn);
  const form = document.querySelector('form[name="educationsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Education extends Component{

  constructor(props) {
    super(props);
    this.state = {
      educations: []
    }
  }

  addEducation = (e) => {
    e.preventDefault();
    const {school, city, from, to, degree, description} = document.educationsForm;

    this.setState((prevState) => {
      return {
        educations: [...prevState.educations, {
          school: school.value,
          degree: degree.value,
          from: from.value,
          to: to.value,
          city: city.value,
          description: description.value
        }]
      }
    })

    const close = document.querySelector('.educations').querySelector('.closeForm');
    close.click();
  }

  removeEducation = (e) => {
    const div = e.target.parentElement;
    const index = div.getAttribute('data-index');
    this.setState(prevState => {
      prevState.educations.splice(index,1)
      return {projects: prevState.educations}
    })
  }

  render() {
    return (
      <div className="educations">
        <h3>Education</h3>
        <hr />
        <div>
          {this.state.educations.map((education, index) =>
            <EducationComponent
              key={index}
              index={index}
              details={education}
              removeEducation={this.removeEducation}
            />)
          }
        </div>
        <form className="none" name="educationsForm">
          <div>
          <label>University or School Name</label>
          <input placeholder="University" name="school"/>
          </div>

          <div>
            <label>Degree or stream</label>
            <input placeholder="Degree" name="degree"/>
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
            <input placeholder="Grades and achievements" name="description"/>
          </div>

          <button className="closeForm" onClick={cancel}>Cancel</button>
          <button onClick={this.addEducation}>+ Education</button>
        </form>
        <button className="addForm" onClick={handleClick}>Add Education</button>
      </div>
    )
  }
}

export default Education;
