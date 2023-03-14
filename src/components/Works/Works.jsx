import { Routes, Route } from 'react-router-dom';
import WorkAllWorks from './WorkAllWorks'

export default function Works(props) {



  return (
    <div id="works">
      <br />
      <h2 className="--works-title">WORKS</h2>
      
        <WorkAllWorks  works={props.works} />

     
    </div>
  );
}
