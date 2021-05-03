import React from "react";
import NewOrderButton from "./NewOrderButton";
import { NavBar, SpanStar, NavName } from "./Styles";

export const Nav: React.FC = (): JSX.Element => {
  return (
    <NavBar>
      <>
        <SpanStar>
          <i className="fal fa-star"></i>
        </SpanStar>
        <NavName>Joseph Smith</NavName>
      </>
      <NewOrderButton />
    </NavBar>
  );
};
