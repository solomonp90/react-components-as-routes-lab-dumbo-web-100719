import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      { directors.map((director)=>{
         return <div>
           {
             director.name
           }, {
             director.movies
           }
         </div>
       }) }
    </div>
  );
}

export default Directors
