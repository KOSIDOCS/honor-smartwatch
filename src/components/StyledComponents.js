import styled from "styled-components";
import { lighten, darken, saturate, rgba, opacify } from "polished";
import LogoIcon from "./LogoIcon";
import SideMenuIcon from "./SideMenuIcon";

const theme = {
  dark: "#08162B",
  light: "#FFFFFF",
  textblack: "#000000",
  boxcolor: "#2B3544",
  buttoncolor: "#EF9C9C",
  textbbrown: "#D8D8D8",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  exactScreen: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.color ? props.color : theme.light)};

  @media ${device.tablet} {
    min-height: 100vh;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  margin: 1.1em 0em 1em 0em;
  min-width: 20vw;
  min-height: 10vh;
  background: ${(props) => (props.dark ? props.dark : theme.light)};
  color: ${(props) => (props.dark ? theme.light : theme.textblack)};
  justify-items: start;

  @media ${device.tablet} {
    margin: 1.1em 3em 1em 3em;
    min-height: 10vh;
    justify-content: space-between;
  }

  @media ${device.laptop} {
    margin: 1.1em 3em 1em 3em;
    min-height: 20vh;
    justify-content: space-between;
  }
`;

export const Title = styled(LogoIcon)`
  text-decoration: none;
  margin: 0em 0em 0em 1em;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin: 0em 5em 0em 2em;
  }

  @media ${device.laptop} {
    margin: 0em 5em 0em 2em;
  }
`;

export const MenuIcon = styled(SideMenuIcon)`
  text-decoration: none;
  margin: 0em 2em 0em 2em;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ClickWrapper = styled.div`
  display: flex;
  position: relative;

  & a {
    display: none;
  }

  @media ${device.laptop} {
    & a {
      display: inline;
    }
  }
`;

export const Button = styled.button`
  background: ${darken(0.0, theme.buttoncolor)};
  color: ${lighten(0.3, theme.light)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${theme.buttoncolor};
  border-radius: 3px;
  position: absolute;
  top: 400px;
  right: -21px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: inline;
    position: relative;
    margin: 1em;
    top: 0px;
    right: 0px;
    z-index: 1;
  }

  @media ${device.laptop} {
    display: inline;
    position: relative;
    margin: 1em;
    top: 0px;
    right: 0px;
    z-index: 1;
  }
`;

export const PageButton = styled.a`
  color: ${(props) => (props.color ? props.color : theme.dark)};
  font-weight: 400;
  margin: 1em;
  padding: 0.3em;
  border: 2px ${(props) => (props.solid ? props.solid : null)}${theme.buttoncolor};

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ScrollSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0em 2em 2em 0em;
  min-width: 20vw;
  min-height: 20vh;
  background: ${(props) => (props.dark ? theme.dark : theme.light)};
  color: ${(props) => (props.dark ? theme.light : theme.textblack)};
  justify-items: start;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.exactScreen} {
    flex-direction: column;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 0em 1.2em 2em;

  @media ${device.tablet} {
    margin: 0em 0em 3em 9em;
  }

  @media ${device.laptop} {
    margin: 0em 0em 3em 9em;
  }
`;

export const DeatailHead = styled.h1`
  font-size: 3.4em;
  font-weight: 700;
  color: ${(props) =>
    props.dark ? lighten(0.2, theme.light) : darken(0.2, theme.dark)};
  line-height: 0.2em;
  font-style: normal;
  margin: 0em;

  @media ${device.tablet} {
    font-size: 5em;
    line-height: 0.1em;
  }

  @media ${device.laptop} {
    font-size: 5em;
    line-height: 0.1em;
  }
`;

export const DetailSub = styled.h3`
  font-size: 1em;
  font-weight: 300;
  font-style: normal;
  color: ${saturate(0.2, theme.buttoncolor)};
  line-height: 4.5em;
  letter-spacing: 0.5em;
  margin: 0em;

  @media ${device.tablet} {
    font-size: 1.5em;
  }

  @media ${device.laptop} {
    font-size: 1.5em;
  }
`;

export const DetailDes = styled.div`
  font-size: 17px;
  font-weight: 300;
  font-style: normal;
  line-height: 1.5em;
  text-align: justify;
  margin: 0em;
  width: 320px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.laptop} {
    width: 400px;
  }
`;

export const ProductScroll = styled.div`
  min-width: 40vw;
  min-height: 40vh;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    width: 40vw;
    height: 40vh;
    flex-wrap: nowrap;
  }

  @media ${device.laptop} {
    flex-direction: row;
    width: 40vw;
    height: 40vh;
    flex-wrap: nowrap;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  padding: 1em 2em 1em 1em;
  justify-items: center;
  justify-content: start;
  background: ${(props) =>
    props.dark ? saturate(0.0, theme.boxcolor) : saturate(0.2, theme.light)};
  box-shadow: 0px 0px 50px ${saturate(0.0, rgba(0, 0, 0, 0.1))};
  border-radius: 20px;
  width: 190px;
  height: 220px;

  &:hover {
    transform: scale(1.06, 1.1);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  @media ${device.tablet} {
    margin: 4em 0.5em 0em 1.5em;

    &:first-of-type {
      margin: 4em 0.2em 4em 1em;
    }
  }

  @media ${device.laptop} {
    margin: 4em 0.5em 0em 1.5em;

    &:first-of-type {
      margin: 4em 0.2em 4em 1em;
    }
  }
`;

export const ProductBoxHead = styled.h1`
  font-size: 2em;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  margin: 0em;
  line-height: 40px;
  color: ${(props) =>
    props.dark ? saturate(0.2, theme.light) : saturate(0.2, theme.textblack)};
`;

export const ProductBoxSub = styled.h4`
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  margin: 0em 0em 0em 2.7em;
  line-height: 10px;
  color: ${(props) =>
    props.dark
      ? saturate(0.1, theme.textbbrown)
      : saturate(0.1, theme.textbbrown)};
`;

export const ProductImg = styled.img`
  width: 143px;
  height: 140px;
`;

export const FullDisplay = styled.div`
  margin: 0px 0em 0em 0em;
  min-width: 55vw;
  position: relative;
  order: -1;
  @media ${device.tablet} {
    margin: 0px 0em 0em 2.9em;
  }

  @media ${device.laptop} {
    order: 0;
    margin: -60px 1em 0em 2em;
  }
`;

export const FullImg = styled.img`
  width: 340px;
  height: 404px;
  position: relative;
  @media ${device.tablet} {
    left: 2px;
    width: 840px;
    height: 604px;
  }
  @media ${device.laptop} {
    left: 150px;
    width: 640px;
    height: 604px;
  }
`;

export const SibarFullWidth = styled.div`
  display: flex;
  width: 0vw;
  min-height: 100vh;
  background: ${opacify(0.1, "rgba(0, 0, 0, 0.5)")};
  position: fixed;
  z-index: 1;
  transition: 0.5s;
  left: 0;
  top: 0;
`;
export const SideBar = styled.div`
  display: flex;
  width: 0vw;
  min-height: 100vh;
  flex-direction: column;
  background: ${darken(0.2, theme.textblack)};
  color: ${lighten(0.2, theme.light)};
  position: fixed;
  z-index: 2;
  transition: 0.5s;
  left: 0;
  top: 0;
`;

export const CloseBtn = styled.div`
  color: ${saturate(0.2, theme.light)};
  text-align: right;
  margin: 1em 1em 1em 1em;
  display: none;
`;

export const Nav = styled.div`
  margin: 2em 2em 2em 2em;
  display: none;
  flex-direction: column;
  font-size: 1.3em;
  font-weight: 500;
`;

export const NavWrapper = styled(Title)`
  height: 1.5em;
  margin: 11.5em 0em 0.2em -0.8em;

  @media ${device.tablet} {
    margin: 16.5em 0em 0.2em 3.5em;
  }

  @media ${device.laptop} {
    margin: 16.5em 0em 0.2em 3.5em;
  }
`;

export const NextWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const NextIcon = styled.div`
  position: absolute;
  bottom: -20px;
  right: 750px;

  &:hover {
    cursor: pointer;
    transform: scale(1.06, 1.1);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
`;

export const NextIconRight = styled.div`
  position: absolute;
  top: 190px;
  left: -30px;
  display: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.06, 1.1);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  @media ${device.laptop} {
    display: flex;
  }
`;
