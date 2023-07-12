/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "../assets/logo.png";

const StyledLogo = styled.img`
  align-self: center;
`;
const StyledMenu = styled.ul`
  color: #fff;
  font-family: Assistant;
  font-size: 26px;
  font-weight: 400;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <StyledLogo src={logo}></StyledLogo>
      <StyledMenu>
        <li>Courses</li>
        <li>Careers</li>
        <li>About us</li>
        <li>Contact us</li>
      </StyledMenu>
    </header>
  );
};

const StyledHeader = styled(Header)`
  background-color: #0e1649;
  padding: 33px 64px;
  display: flex;
  justify-content: space-between;
`;

export default StyledHeader;
