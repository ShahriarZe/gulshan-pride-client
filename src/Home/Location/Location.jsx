import location from '../../assets/direction.png'

const Location = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className='w-3/4 '>
                    <img src={location} className=" rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-3xl lg:text-5xl font-semibold border-b-2 border-red-700"><span className='text-red-700 font-extrabold'>G</span>ulshan<span className='text-red-700 font-extrabold'>P</span>ride Location </h1>
                    <p className="py-4">Located in the heart of City, Gulshan Pride stands as an emblem of convenience and connectivity.</p>
                    <p className="py-2"> House #67-D,Block-E , Banani </p>
                    <p className="py-2">Gulshan Pride, 13b Rd No 75, Dhaka 1212</p>
                    <p className="py-2">Contact - +8801725440058</p>
                    <button className="btn btn-outline text-red-700">Get Direction</button>
                </div>
            </div>
        </div>
    );
};

export default Location;