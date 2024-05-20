import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageList } from '@mui/material';

export default function NftCarousel(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = props.images

  return (
    <div>
        <Slider {...settings}>
            {
                images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image} alt="NFT" style={{
                                width: "400px",
                                margin: "auto",
                                height: "400px",
                            }} />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}
