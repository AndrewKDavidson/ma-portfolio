import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel-styles.css";

const useStyles = makeStyles(theme => ({
    arrows: {
        display: "block", 
        backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        color: theme.palette.buttonText[theme.palette.type],
        borderRadius: '100%',
        height: '119px',
        width: '119px',
    }
}))

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
        {console.log(props)}
        <div
        className={`${className} + ${props.classes}`}
        style={{...style}}
        onClick={onClick}
        />
        </>
    );
}
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} + ${props.classes}`}
        style={{...style}}
        onClick={onClick}
        />
    );
}

const Carousel = props => {
    //grabbing the styles from above
    const classes = useStyles();

    const settings = {
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        nextArrow: <NextArrow classes={classes.arrows} />,
        prevArrow: <PrevArrow classes={classes.arrows} />,
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