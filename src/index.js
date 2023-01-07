import React from 'react';
import { render } from "react-dom";
import {Select}  from "./lib/Select.js";
import { useState } from 'react'


const App = () => {
  const [department, setDepartment] = useState('Engineering')
  const departments = [
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Engineering', value: 'Engineering' },
    { label: 'Human Resources', value: 'Human Resources' },
    { label: 'Legal', value: 'Legal' },
]
  return (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Select   
    items={departments}
    onChange={(department) =>setDepartment(department)}
    selected={department} />
  </div>)
};

render(<App />, document.getElementById("root"));
