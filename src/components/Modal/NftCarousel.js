import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageList } from "@mui/material";
import { useRef } from "react";

export default function NftCarousel(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = props.images;
  const slider = useRef(null);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Slider ref={slider} {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image}
                alt="NFT"
                style={{
                  margin: "auto",
                  height: "100vh",
                }}
              />
            </div>
          );
        })}
      </Slider>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "5px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "100%",
        cursor: "pointer",
      }} onClick={() => slider?.current?.slickPrev()}>
        <img src="../../assets/img/image-left.png" alt="arrow"/>
      </div>
      <div style={{
        position: "absolute",
        top: "50%",
        right: "5px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "100%",
        cursor: "pointer",
      }} onClick={() => slider?.current?.slickNext()}>
        <img src="../../assets/img/image-left.png" alt="arrow" style={{ transform: 'rotate(-180deg)' }}/>
      </div>
    </div>
  );
}
