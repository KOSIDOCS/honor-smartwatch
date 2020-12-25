import dotenv from "dotenv";
import React, { useState } from "react";
import "./App.css";
import dark from "./image/dark 1.png";
import smartwaatch from "./image/smartwaatch 4.png";
import blanco from "./image/blanco 1.png";
import Carousel from "react-bootstrap/Carousel";

import {
  MainWrapper,
  HeaderContainer,
  ScrollSection,
  Title,
  Button,
  PageButton,
  ClickWrapper,
  MenuIcon,
  DetailWrapper,
  DeatailHead,
  DetailSub,
  DetailDes,
  ProductScroll,
  ProductBox,
  ProductBoxHead,
  ProductBoxSub,
  ProductImg,
  FullDisplay,
  FullImg,
  SideBar,
  SibarFullWidth,
  CloseBtn,
  Nav,
  NavWrapper,
  NextIcon,
  NextWrapper,
  NextIconRight,
} from "./components/StyledComponents";

import { X, ChevronDown, ChevronRight } from "react-feather";
import SectionTwo from "./components/SectionTwo";
import { CarouselItem } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
dotenv.config();

const stripePromise = loadStripe(`${process.env.PUBSHIABLE_KEY}`);

function App() {
  const [index, setIndex] = useState(0);
  const [section1, setSection1] = useState(true);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-session", {
      method: "POST",
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const openBar = () => {
    if (
      document.getElementById("bar-overlay") &&
      document.getElementById("overlay") &&
      document.getElementById("bar") &&
      document.getElementById("bar-link")
    ) {
      document.getElementById("overlay").style.width = "100vw";
      document.getElementById("bar-overlay").style.width = "20vw";
      document.getElementById("bar").style.display = "block";
      document.getElementById("bar-link").style.display = "flex";
      if (window.screen.width <= 1024) {
        document.getElementById("bar-overlay").style.width = "60vw";
      }
    }
  };

  const closeBar = () => {
    if (
      document.getElementById("overlay") &&
      document.getElementById("bar-link")
    ) {
      document.getElementById("overlay").style.width = "0vw";
      document.getElementById("bar-overlay").style.width = "0vw";
      document.getElementById("bar").style.display = "none";
      document.getElementById("bar-link").style.display = "none";
    }
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    if (index !== 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const sectionSelection = () => {
    setSection1(!section1);
  };

  const handleHome = () => {
    setSection1(true);
  };

  const handleSmartPhone = () => {
    setSection1(false);
  };

  const productClick1 = () => {
    setIndex(0);
  };

  const productClick2 = () => {
    setIndex(1);
  };

  const productClick3 = () => {
    setIndex(2);
  };

  return (
    <MainWrapper color={section1 ? "#08162B" : null}>
      <HeaderContainer dark={section1 ? "#08162B" : null}>
        <div onClick={openBar}>
          <MenuIcon color={section1 ? "#FFFFFF" : "#000000"}></MenuIcon>
        </div>
        <ClickWrapper>
          <Title color={section1 ? "#FFFFFF" : "#000000"}></Title>
          <div>
            <PageButton
              solid={section1 ? "solid" : null}
              color={section1 ? "#FFFFFF" : "#000000"}
              onClick={handleHome}
            >
              Home
            </PageButton>
            <PageButton
              solid={section1 ? null : "solid"}
              color={section1 ? "#FFFFFF" : "#000000"}
              onClick={handleSmartPhone}
            >
              Smartphone
            </PageButton>
            <PageButton color={section1 ? "#FFFFFF" : "#000000"}>
              Store
            </PageButton>
            <Button role="link" onClick={handleClick}>
              Buy Now
            </Button>
          </div>
        </ClickWrapper>
      </HeaderContainer>
      {section1 ? (
        <ScrollSection dark>
          <div>
            <DetailWrapper>
              <DeatailHead dark>Smartwatch</DeatailHead>
              <DetailSub>ELEMENT SERIE</DetailSub>
              <DetailDes>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                congue sed et leo, dignissim odio justo.
              </DetailDes>
            </DetailWrapper>
            <ProductScroll>
              <ProductBox dark onClick={productClick1}>
                <ProductBoxHead dark>Pink</ProductBoxHead>
                <ProductBoxSub>Element</ProductBoxSub>
                <ProductImg src={smartwaatch}></ProductImg>
              </ProductBox>
              <ProductBox dark onClick={productClick2}>
                <ProductBoxHead dark>White</ProductBoxHead>
                <ProductBoxSub>Element</ProductBoxSub>
                <ProductImg src={blanco}></ProductImg>
              </ProductBox>
              <ProductBox dark onClick={productClick3}>
                <ProductBoxHead dark>Dark</ProductBoxHead>
                <ProductBoxSub>Element</ProductBoxSub>
                <ProductImg src={dark}></ProductImg>
              </ProductBox>
            </ProductScroll>
          </div>

          <FullDisplay>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              indicators={false}
            >
              <CarouselItem>
                <FullImg src={smartwaatch}></FullImg>
              </CarouselItem>
              <CarouselItem>
                <FullImg src={blanco}></FullImg>
              </CarouselItem>
              <CarouselItem>
                <FullImg src={dark}></FullImg>
              </CarouselItem>
            </Carousel>
          </FullDisplay>

          <NextWrapper onClick={sectionSelection}>
            <NextIcon>
              <ChevronDown color="#2B3544" size={48}></ChevronDown>
            </NextIcon>
          </NextWrapper>
          <NextWrapper>
            <NextIconRight>
              <ChevronRight
                color="white"
                size={48}
                onClick={handleNext}
              ></ChevronRight>
            </NextIconRight>
          </NextWrapper>
        </ScrollSection>
      ) : (
        <SectionTwo
          index={index}
          handleSelect={handleSelect}
          handleNext={handleNext}
          sectionSelection={sectionSelection}
        ></SectionTwo>
      )}
      <SibarFullWidth id="overlay">
        <SideBar id="bar-overlay">
          <CloseBtn id="bar">
            <X id="bar" size={37} onClick={closeBar} />
          </CloseBtn>
          <Nav id="bar-link">
            <PageButton color="#FFFFFF" onClick={handleHome}>
              Home
            </PageButton>
            <PageButton color="#FFFFFF" onClick={handleSmartPhone}>
              Smartphone
            </PageButton>
            <PageButton color="#FFFFFF">Store</PageButton>
            <NavWrapper color="#FFFFFF"></NavWrapper>
          </Nav>
        </SideBar>
      </SibarFullWidth>
    </MainWrapper>
  );
}

export default App;
