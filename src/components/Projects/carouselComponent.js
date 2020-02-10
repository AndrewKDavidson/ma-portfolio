import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import Hidden from "@material-ui/core/Hidden";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel-styles.css";

const useStyles = makeStyles(theme => ({
    sliderContainer: {
        padding: '15px 120px',
        [theme.breakpoints.only('xs')]: {
            padding: '15px 0',
        },
        [theme.breakpoints.only('sm')]: {
            padding: '15px 80px',
        },
        [theme.breakpoints.only('md')]: {
            padding: '15px 100px',
        },
        "& img": {
            maxWidth: '100%',
            height: 'auto'
        },
        "& i": {
            position: 'absolute',
            fontSize: '50px',
            left: '55%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            [theme.breakpoints.only('sm')]: {
                fontSize: '40px'
            }
        },
        "& li button:before": {
            color: theme.palette.carouselArrow[theme.palette.type]
        },
        "& li.slick-active button:before": {
            color: theme.palette.carouselArrow[theme.palette.type]
        },
        "& .fa-chevron-right": {
            left: '53%',
        },
        "& .fa-chevron-left": {
            left: '47%',
        },
    },
    arrows: {
        display: "block", 
        backgroundColor: 'transparent',
        color: '#5DADA8',
        transition: '150ms color ease',
        borderRadius: '100%',
        height: '80px',
        width: '80px',
        zIndex: '10',
        '&:hover': {
            color: theme.palette.carouselArrow[theme.palette.type]
        },
        [theme.breakpoints.only('sm')]: {
            height: '80px',
            width: '80px',
        },
    },
    leftArrow: {
        right: '-80px'
    },
    rightArrow: {
        left: '-80px'
    }
}))

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <Hidden xsDown>
            <div
            className={`${className} ${props.classes}`}
            onClick={onClick}
            >
                <i className="fa fa-chevron-right"></i>
            </div>
        </Hidden>
    );
}
  
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <Hidden xsDown>
            <div
            className={`${className} ${props.classes}`}
            onClick={onClick}
            >
                <i className="fa fa-chevron-left"></i>
            </div> 
        </Hidden>
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
        adaptiveHeight: true,
        nextArrow: <NextArrow classes={`${classes.arrows} ${classes.leftArrow} `} />,
        prevArrow: <PrevArrow classes={`${classes.arrows} ${classes.rightArrow} `} />,
    };
    return (
    <div>
        <div className={classes.sliderContainer}>
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