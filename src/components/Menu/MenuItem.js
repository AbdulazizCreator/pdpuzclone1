import React from 'react'

function MenuItem(props) {
   return (
     <div className="MenuItem">
       <a href='/'>
         {props.img}
         <p>{props.name}</p>
       </a>
     </div>
   );
}

export default MenuItem

