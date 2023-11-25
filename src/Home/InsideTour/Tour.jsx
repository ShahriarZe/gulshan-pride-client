import inside from '../../assets/inside.jpg'
import inside2 from '../../assets/inside2.jpg'

const Tour = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='max-w-7xl mx-auto mb-6'>
                <h1 className='text-3xl lg:text-5xl font-extrabold'>Inside <span className='text-red-700 font-extrabold'>G</span>ulshan<span className='text-red-700 font-extrabold'>P</span>ride</h1>
            </div>
            <div className="diff aspect-[16/9] max-w-7xl mx-auto">
                <div className="diff-item-1">
                    <img className='rounded-xl' src={inside} />
                </div>
                <div className="diff-item-2">
                    <img className='rounded-xl'  src={inside2} />
                </div>
                <div className="diff-resizer"></div>
            </div>
        </div>
    );
};

export default Tour;