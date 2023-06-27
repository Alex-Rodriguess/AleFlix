import "./caroussel.css";
import Slider from "react-slick";


function Caroussel({children}) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 1
      }

    return (
       <div>
            <Slider {...settings}>
                {children}
            </Slider>
       </div> 
    );
}

export default Caroussel;