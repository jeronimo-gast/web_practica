import { useEffect, useState } from 'react';
import './Cookies.css';

function Cookies(){
  const [visible,setVisible]=useState(false);

  useEffect(()=>{
    if(!document.cookie.includes('cookiesAccepted=true')){
      setVisible(true);
    }
  },[]);

  const aceptarCookies=()=>{
    document.cookie="cookiesAccepted=true; path=/; max-age=31536000";
    setVisible(false);
  };

  if(!visible) return null;

  return(
    <>
      <div className="cookies-overlay"></div>
      <div className="cookies-banner">
        <p>Este sitio utiliza cookies para mejorar la experiencia del usuario.</p>
        <button onClick={aceptarCookies}>Aceptar</button>
      </div>
    </>
  );
}

export default Cookies;
