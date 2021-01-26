import React from 'react'
import { Link } from 'react-router-dom';

function MenuItem(props) {
   return (
     <div className="MenuItem" key={props.index}>
       <Link to="/">
         <img src={props.img} alt="" />
         <p>{props.name}</p>
       </Link>
     </div>
   );
}

export default MenuItem

