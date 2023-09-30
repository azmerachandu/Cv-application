import React from "react";

function JobComponent(props) {
  console.log(props.details)
  return(
    <div className="job">
      <div className="flex overview" data-index={props.index}>
        <div>
          <p><b>{props.details.role}</b></p>
          <p>{props.details.company}</p>
        </div>
        <div className="timePlace">
          <p>{props.details.from} - {props.details.to}</p>
          <p>{props.details.city}</p>
        </div>
      </div>
      <div>
        <p>{props.details.description}</p>
      </div>
      <button onClick={props.removeExperience}>Remove experience</button>
    </div>
  )
}

export default JobComponent;
