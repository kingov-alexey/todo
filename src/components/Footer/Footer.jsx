import React from 'react';
import css from './Footer.module.css';

const Footer = props => {
  return (
    <div className={css.style}>
      <div>{props.copyright}</div>
      <a href={props.url} target="_blank">
        {props.urlText}
      </a>
    </div>
  );
};
export default Footer;
