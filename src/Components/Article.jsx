/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.h4`
  color: #1c1c1c;
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
`;

const StyledHeadLine = styled.h2`
  margin-top: 16px;
  color: #1c1c1c;
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.48px;
  text-transform: capitalize;
`;

const StyledContent = styled.div`
  margin-top: 16px;
  color: #1c1c1c;
  font-family: Arial;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  & p,
  ul {
    margin-top: 16px;
  }
`;

const StyledButton = styled.button`
  border-radius: 12px;
  background: #ff9f00;
  color: #fff;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 16px 32px;
  border: 0px;
  margin-top: 16px;
`;

const Article = ({
  className,
  title,
  headline,
  image,
  buttonText,
  children,
}) => {
  return (
    <article className={className}>
      {image && <StyledImage src={image} />}
      <StyledTitle>{title}</StyledTitle>
      <StyledHeadLine>{headline}</StyledHeadLine>
      <StyledContent>{children}</StyledContent>
      {buttonText && <StyledButton>{buttonText}</StyledButton>}
    </article>
  );
};

const StyledArticle = styled(Article)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default StyledArticle;
