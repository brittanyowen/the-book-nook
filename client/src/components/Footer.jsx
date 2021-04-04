import React from 'react';


function Footer(props) {
  return (
    <div className="footer">
      <a href="https://github.com/brittanyowen" target="_blank">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="GitHub Logo"
            rel="no referrer"
            />
        </a>
        <a href="https://www.linkedin.com/in/bnowen/" target="_blank">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="LinkedIn Logo"
            rel="no referrer"
            />
        </a>
      <p>Designed and Developed by: <br/> &copy; Brittany Owen - 2021</p>
    </div>
  );
}

export default Footer;