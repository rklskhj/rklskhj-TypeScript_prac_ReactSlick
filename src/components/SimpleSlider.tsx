import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../data/Images";
import Next from "../data/Image/Next.png";
import Prev from "../data/Image/Prev.png";

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 4vw;
  }
  /* 
  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: "";
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;
    &::before {
      content: "";
    }
  } */
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const NextArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 65px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;

const PrevArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 25px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 1000, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      arrows: true,
      nextArrow: (
        <NextArrow>
          <img alt="next" src={Next} />
        </NextArrow>
      ),
      prevArrow: (
        <PrevArrow>
          <img alt="prev" src={Prev} />
        </PrevArrow>
      ),
    };

    const items = images;
    return (
      <div>
        <h2> navbar 들어갈 위치</h2>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </div>
    );
  }
}
