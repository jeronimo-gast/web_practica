import { useState } from 'react';
import './Banner.css';

function Banner(){
  const [visible,setVisible]=useState(true);
  if(!visible) return null;

  return(
    <div className="site-banner">
      <span>Descubre la evolución completa de los videojuegos</span>
      <button className="close-banner" onClick={()=>setVisible(false)}>×</button>
    </div>
  );
}

export default Banner;
