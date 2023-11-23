import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
const Home = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className='max-w-screen-xl mx-auto text-center'>
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
    );
};

export default Home;