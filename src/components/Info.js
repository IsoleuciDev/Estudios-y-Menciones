import React from 'react';
import '../styles_sheets/Info.css';

function Info(props){
  return(
    <div className='contenedor-info'>
      <img 
        className='image-info'
        src={require(`../images/image-${props.image}.jpg`)}
        alt='CCH Naucalpan'/>
      <div className='contenedor-texto-info'>
        <p className='titulo'> {props.title} </p>
        <p className='evento'>{props.event}</p>
        <p className='texto'> {props.text}</p>
      </div>
    </div>
  );
}

export default Info;