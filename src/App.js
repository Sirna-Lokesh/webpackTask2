import React from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
import Component1 from './Component1';
function f () {
    return (
        <div>
            <h1>Webpack and Babel</h1>
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
    )
}
export default f;