import React from "react";
import Slider from "react-slick";
import SliderData from "../data/SliderData";
import "../Css/Slick.css";


function LoginSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
    };

    return (
        <>
            <div className="alignCenter" style={{
                backgroundImage: 'url("./image/background.jpg")', backgroundRepeat: "repeat", height: "100%"
            }}>
                <div className="loginSliderSec">
                    <Slider {...settings}>
                        {
                            SliderData.map((sliderData, index) => (
                                <div className="TextSlide" key={index}>
                                    <img src={sliderData.image} alt="slider" />
                                    <div className="aLLTextSlider">
                                        <h2>{sliderData.hadd}</h2>
                                        <p>{sliderData.parr}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default LoginSlider;