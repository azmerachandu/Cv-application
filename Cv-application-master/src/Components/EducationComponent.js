import React from "react";

function EducationComponent(props) {
  return(
    <div className="education" data-index={props.index}>
      <div className="flex overview">
        <div>
          <p><b>{props.details.school}</b></p>
          <p>{props.details.degree}</p>
        </div>
        <div className="timePlace">
          <p>{props.details.from} - {props.details.to}</p>
          <p>{props.details.city}</p>
        </div>
      </div>
      <div>
        <p>{props.details.description}</p>
      </div>
      <button onClick={props.removeEducation}>Remove education</button>
    </div>
  )
}

export default EducationComponent;
