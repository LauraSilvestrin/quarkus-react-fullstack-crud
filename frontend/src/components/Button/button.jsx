import React from 'react';
import { Link } from 'react-router-dom';

function Button({ route, buttonText }) {
  return (
    <Link to={route}>
      <button>{buttonText}</button>
    </Link>
  );
}

export default Button;
