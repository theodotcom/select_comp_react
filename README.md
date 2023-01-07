# React-Select

The Select control for [React](https://reactjs.org). Initially built for my HRNet study project.

Features include:

- Associate an array with pairs value/label and get a flexible approach to data and displays.
- Controllable state props



# Installation and usage

The easiest way to use react-select is to install it from npm and build it into your app

```
npm i my-react-select
```

Then use it in your app:

Raw component
```js
const Select = ({ items, onChange, selected }) => {
    return (
        <select
            defaultValue={selected}
            onChange={(e) => onChange(e.target.value)}
        >
            {items.map((i) => (
                <option key={i.value} value={i.value}>
                    {i.label}
                </option>
            ))}
        </select>
    )
}

export default Select

```

Exemple
```js
import React from 'react';
import { render } from "react-dom";
import { Select } from "./lib/Select.js";
import { useState } from 'react'


const App = () => {
  const [states, setStates] = useState('Alabama')
 const states = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Arizona', value: 'AZ' },]

  return (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Select   
    items={states}
    onChange={(state) =>setStates(state)}
    selected={state} />
  </div>)
};

render(<App />, document.getElementById("root"));

```

## Props

Common props you may want to specify include:

- `items` - associate the array you want for datas with pair value/label
- `label` - what will be shown into the option of the select
- `value` - value associated with each label and stored or displayed elsewhere.
- `selected` - value rendered or stored elsewhere
- `onChange` - subscribe to change events
- `placeholder` - (native additionnal) change the text displayed when no option is selected




