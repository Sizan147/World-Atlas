import footerData from "../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

export const Footer = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  const navigate = useNavigate();

  return (
    <>
      <section className="footer-section">
        <div className="container ">
          <ul className="footer-container grid">
            {footerData.map(({ id, icon, title, details }) => {
              return (
                <li key={id}>
                  <div className="icon">{footerIcons[icon]}</div>
                  <div>
                    <h2>{title}</h2>
                    <p> {details} </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="footer-section-2">
        <div className="footer-container-2 container">
          <p>
            Copyright &copy; 2024. All rights reserved by{" "}
            <NavLink
              to="https://www.facebook.com/sizan14789/"
              target="_blank"
              style={{ color: "#0020d393", fontSize: "1.8rem" }}
            >
              Sizan Molla
            </NavLink>
          </p>
          <ul className="footer-menu">
            <li onClick={() => navigate("/")}>Home</li>
            <li>
              <NavLink
                className='social-link'
                to='https://www.facebook.com/sizan14789/'
                target="_blank"
              >
                Social
              </NavLink>
            </li>
            <li onClick={() => navigate("/")}>Source Code</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
      </section>
    </>
  );
};
