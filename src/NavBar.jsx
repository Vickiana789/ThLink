import React from 'react';
import './NavBar.css';

export default ({pages, onChange} = {}) => (
  <ul className="navbar">
  {
    pages.map(({name, component} = {}) => (
      <li key={name}>
          <a onClick={() => onChange(component)}>{name}</a>
      </li>
    ))
  }
  </ul>
)