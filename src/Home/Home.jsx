import About from "./About/About";
import Coupon from "./About/CouponSection/Coupon";
import Banner from "./Banner/Banner";
import Location from "./Location/Location";

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <About></About>
        <Location></Location>
        <Coupon></Coupon>
       </div>
    );
};

export default Home;