import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="resources">
        <h6>Resources</h6>
        <a
          href="https://www.cntraveler.com/story/black-owned-bookstores "
          target="_blank"
          rel="noreferrer"
        >
          Support BIPOC Owned Bookstores{" "}
        </a>
        <br></br>
        <a
          href="https://www.redbookmag.com/life/g34991012/bipoc-authors-2020/ "
          target="_blank"
          rel="noreferrer"
        >
          Support BIPOC Authors
        </a>
        <br></br>
        <a
          href="https://www.penguinrandomhouse.com/the-read-down/the-ultimate-book-list-for-pride-month "
          target="_blank"
          rel="noreferrer"
        >
          Support LGBTQ+ Authors and Stories
        </a>
        <br></br>
        <a
          href="https://reedsy.com/discovery/blog/feminist-books"
          target="_blank"
          rel="noreferrer"
        >
          Feminist Books
        </a>
        <br></br>
        <a href="https://bookshop.org/" target="_blank" rel="noreferrer">
          Find a bookstore near you
        </a>
        <br></br>
        <a
          href="https://librarytechnology.org/libraries/uspublic/"
          target="_blank"
          rel="noreferrer"
        >
          Find a library near you
        </a>
      </div>
      <br></br>
      <br></br>

      <div>
        <div className="links">
          <a
            href="https://github.com/brittanyowen"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              alt="GitHub Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bnowen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              alt="LinkedIn Logo"
            />
          </a>
        </div>

        <p>
          Designed and Developed by: <br /> &copy; Brittany Owen - 2021
        </p>
        <br></br>
        <p className="icons">
          Icons made by{" "}
          <a
            href="https://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noreferrer"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
