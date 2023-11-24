import { Carousel } from 'react-responsive-carousel';
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'

const Banner = () => {
    return (
        <div>
            <Marquee className='my-4' speed={150}>
            Welcome to Gulshan Pride – Where Every Moment Feels Like Home! We are delighted to have you as part of our community.
            </Marquee>
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='max-w-screen-xl mx-auto text-center'>
                <div>
                    <img src={b1} />
                </div>
                <div>
                    <img src={b2} />
                </div>
                <div>
                    <img src={b3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;