import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel-styles.css";

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        style={{ display: "block", background: "red", height: '100px', backgroundImage: "url(/images/dark-switch-icon.svg)", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        onClick={onClick}
        />
    );
}
  
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        style={{ display: "block", background: "green", height: '100px', backgroundImage: "url(/images/dark-switch-icon.svg)", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        onClick={onClick}
        />
    );
}

const Carousel = props => {
    const settings = {
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
    <div>
        <div style={{padding: '15px 40px'}}>
            <Slider {...settings}>
            <div>
                <img alt="some text here" src={props.props.project.image} />
            </div>
            <div>
                <img alt="some text here" src={props.props.project.image} />
            </div>
            <div>
                <img alt="some text here" src={props.props.project.image} />
            </div>
            <div>
                <img alt="some text here" src={props.props.project.image} />
            </div>
            </Slider>
        </div>
    </div>
    );
}

export default Carousel;