import React from 'react';

const Items = ({items}) => { //destructure items
    return(
        <ul>
          {items.map((item,index) => (
            <li key={Date.now() + 'r' + index}>{item}</li>
          ))}
        </ul>
    )
}
 export default Items;