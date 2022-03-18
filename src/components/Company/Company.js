import React from "react";

import "./Company.css";
const Company = ({ Name }) => {
  return (
    <li>
      <div>
        {Name}
        <input className="input" type="checkbox" />
      </div>
    </li>
  );
};

export default Company;
