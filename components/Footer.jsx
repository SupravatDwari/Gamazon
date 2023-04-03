import React from 'react';
import { AiFillInstagram, AiOutlineFacebook, AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 SDR PC All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
        <AiOutlineTwitter />
        <AiOutlineMail />


      </p>
    </div>
  )
}

export default Footer