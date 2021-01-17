import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer has-background-light">
      <div className="field is-grouped is-grouped-centered">
        <p className="control">©︎2020 biyokoyama</p>
        <p className="control">
          <a
            href="https://github.com/biyokoyama/wiki-react-typescript-practice"
            target="_blank"
            rel="noreferrer"
            className="button is-small"
          >
            <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
            <span>Github</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
