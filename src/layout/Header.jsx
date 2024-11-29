import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [ isDropped, setIsDropped ] = useState(false)
  const navigate = useNavigate();

  return (
    <>
      <header className="header-section">
        <div className="container header-container">
          <div className="logo">
            <h2 onClick={() => navigate("/")}>WorldAtlas</h2>
          </div>
          <ul className={isDropped? "ul-active" : ''}>
            <li onClick={()=> navigate('/')} >Home</li>
            <li onClick={()=> navigate('/about')} >About</li>
            <li onClick={()=> navigate('/country')} >Country</li>
            <li onClick={()=> navigate('/contact')} >Contact</li>
          </ul>
          <div className="bars" >
            <IoMenuSharp onClick={()=> setIsDropped(!isDropped)} />
          </div>
        </div>
      </header>
    </>
  );
};
