import about2 from '../../assets/about-2.jpg'
import about1 from '../../assets/about-1.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={about2} className="lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={about1} className=" lg:w-1/2 right-3 top-1/2 lg:absolute rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-semibold border-b-2 border-red-700">About <span className='text-red-700 font-extrabold'>G</span>ulshan<span className='text-red-700 font-extrabold'>P</span>ride</h1>
                    <p className="py-4">The Gulshan Pride apartment complex is a developer built project. The scope of work for this project involved efficient planning, structural system and use of materials in order to make the project financially viable and generating profit for the developer..</p>
                    <p className="py-4">Where Each room is designed to provide a comfortable and stylish living environment. Enjoy spacious layouts, abundant natural light, and high-quality furnishings that create a warm and inviting atmosphere.</p>
                    <p className="py-4">Experience the essence of community in our carefully designed public spaces and also Retreat to your personal sanctuary where tranquility and comfort merge seamlessly with Our private spaces</p>
                    <button className="btn btn-outline text-red-700">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;