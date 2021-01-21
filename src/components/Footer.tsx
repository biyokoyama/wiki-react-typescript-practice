import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import StoreSample from "./StoreSample";

const Wrapper = styled.footer`
  padding: 3rem;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper className="footer has-background-light">
      <div className="field is-grouped is-grouped-centered">
        <p className="control">©︎2020 biyokoyama</p>
        <StoreSample />
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
    </Wrapper>
  );
};

export default Footer;
