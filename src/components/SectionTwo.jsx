import React from "react";
import {
  ScrollSection,
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
  NextIcon,
  NextWrapper,
  NextIconRight,
} from "./StyledComponents";

import dark from "../image/dark 1.png";
import smartwaatch from "../image/smartwaatch 4.png";
import blanco from "../image/blanco 1.png";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-feather";

const SectionTwo = (props) => {
  return (
    <ScrollSection>
      <div>
        <DetailWrapper>
          <DeatailHead>Smartwatch</DeatailHead>
          <DetailSub>ELEMENT SERIE</DetailSub>
          <DetailDes>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            congue sed et leo, dignissim odio justo.
          </DetailDes>
        </DetailWrapper>
        <ProductScroll>
          <ProductBox>
            <ProductBoxHead>Pink</ProductBoxHead>
            <ProductBoxSub>Element</ProductBoxSub>
            <ProductImg src={smartwaatch}></ProductImg>
          </ProductBox>
          <ProductBox>
            <ProductBoxHead>White</ProductBoxHead>
            <ProductBoxSub>Element</ProductBoxSub>
            <ProductImg src={blanco}></ProductImg>
          </ProductBox>
          <ProductBox>
            <ProductBoxHead>Dark</ProductBoxHead>
            <ProductBoxSub>Element</ProductBoxSub>
            <ProductImg src={dark}></ProductImg>
          </ProductBox>
        </ProductScroll>
      </div>

      <FullDisplay>
        <Carousel
          activeIndex={props.index}
          onSelect={props.handleSelect}
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

      <NextWrapper onClick={props.sectionSelection}>
        <NextIcon>
          <ChevronDown color="#2B3544" size={38}></ChevronDown>
        </NextIcon>
      </NextWrapper>
      <NextWrapper>
        <NextIconRight>
          <ChevronRight
            color="#000000"
            size={48}
            onClick={props.handleNext}
          ></ChevronRight>
        </NextIconRight>
      </NextWrapper>
    </ScrollSection>
  );
};

export default SectionTwo;
