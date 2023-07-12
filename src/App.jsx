import "./App.css";
import styled, { css } from "styled-components";
import Header from "./Components/Header";
import Article from "./Components/Article";
import laptopImage from "./assets/laptop.png";

const StyledContainer = styled.div`
  width: 200px;
`;
function App() {
  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Article
          title="design system"
          buttonText="Subscribe"
          image={laptopImage}
          headline="How do you handle component spacing in a design system?"
        >
          <p>
            Say you’ve got a component. It’s highly likely it shouldn’t be
            butted right up against any other components with no spacing around
            it. That’s true for… pretty much every component. So, how do you
            handle component spacing in a design system?
          </p>
        </Article>
      </StyledContainer>
    </>
  );
}

export default App;
