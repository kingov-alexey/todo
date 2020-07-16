import React from 'react';
import css from './Footer.module.css';

const Footer = props => {
  return (
    <div className={css.style}>
      <a href={props.urlFrontend} target="_blank" rel="noopener noreferrer">
        {props.urlTextFrontend}
      </a>
      <br />
      <a href={props.urlBackend} target="_blank" rel="noopener noreferrer">
        {props.urlTextBackend}
      </a>
      <br />
      <br />
      <div>{props.copyright}</div>
    </div>
  );
};
export default Footer;
