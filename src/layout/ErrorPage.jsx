import { useNavigate, useRouteError } from 'react-router-dom';
import sorry from '/public/images/—Pngtree—404 error interface art word_4043816.png'
import { useState } from 'react';

export const ErrorPage = () => {
  const navigate = useNavigate()
  const errors = useRouteError()
  const [ showStatus, setShowStatus ] = useState(false)

  return (
    <section className="error-section grid grid-two--cols container">
      <div className="infos">
        <h4>So Sorry!</h4>
        <h2>The page you are looking for cannot be found</h2>
        <ul>
          <h1>Possible Reasons</h1>
          <li>The address you are looking for could not be found.</li>
          <li>It may be a broken or outdated link</li>
          <li style={showStatus? {display:"block"} : {display:"none"} }  >{errors & errors.status} {errors & errors.data} </li>
          <button onClick={()=> setShowStatus(!showStatus)} >View console error</button>
        </ul>
        <div className="buttons">
          <button onClick={()=> navigate('/')} >Go to Homepage</button>
          <button onClick={()=> navigate(-1)} >Go Back</button>
        </div>
      </div>
      <figure>
        <img src={sorry} alt="missing.png" />
      </figure>
    </section>
  );
};
