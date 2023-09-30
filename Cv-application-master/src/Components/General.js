import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function handleClick(e) {
  const element = e.target;
  const tag = e.target.tagName;
  console.log(element, tag);
  const active = (document.querySelector('.general').querySelector('input:not(.none)'));
  console.log(active)
  if(active && tag !== 'INPUT') {
    active.classList.add('none');
    active.previousElementSibling.classList.remove('none');
  }

  if(tag === 'DIV' || tag === 'INPUT' || tag === 'IMG' || tag === 'BUTTON' ||
    tag === 'svg' || tag === 'path') return;

  // show the input and hide the element
  element.classList.add('none');
  const input = element.nextElementSibling;
  console.log(input);
  input.classList.remove('none');
  input.select();
}

function General(props) {
  return (
    <div className="general flex" onClick={handleClick}>
      <div className="basic">
        <div id="firstName">
          <h1>{props.details.firstName}</h1>
          <input onChange={props.handleChange} value={props.details.firstName} className="none"/>
        </div>
        <div id="lastName">
          <h1>{props.details.lastName}</h1>
          <input onChange={props.handleChange} value={props.details.lastName} className="none"/>
        </div>
        <div id="designation">
          <p>{props.details.designation}</p>
          <input onChange={props.handleChange} value={props.details.designation} className="none"/>
        </div>
        <div id="city">
          <p>{props.details.city}</p>
          <input onChange={props.handleChange} value={props.details.city} className="none"/>
        </div>
      </div>
      <div className="image">
        <div className="profile-pic">
          <img src='/Cv-application/images/6536da15-58c3-44a6-acc1-47270e24e028.jpg' alt="profile pic"/>
        </div>
      </div>
      <div id="links">
        <div id="phone">
          <FontAwesomeIcon icon={faPhoneAlt}/>
          <p>{props.details.phone}</p>
          <input onChange={props.handleChange} value={props.details.phone} className="none" />
        </div>
        <div id="email">
          <FontAwesomeIcon icon={faEnvelope}/>
          <p>{props.details.email}</p>
          <input onChange={props.handleChange} value={props.details.email} className="none" />
        </div>
        <div id="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn}/>
          <p>{props.details.linkedin}</p>
          <input onChange={props.handleChange} value={props.details.linkedin} className="none" />
        </div>
        <div id="github">
          <FontAwesomeIcon icon={faGithub}/>
          <p>{props.details.github}</p>
          <input onChange={props.handleChange} value={props.details.github} className="none" />
        </div>
      </div>
    </div>
  )
}

export default General;
