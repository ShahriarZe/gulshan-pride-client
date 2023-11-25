/* eslint-disable react/prop-types */


const ApartCard = ({ item }) => {
    const { ApartmentImage, BlockName, FloorNo, ApartmentNo, Rent } = item
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border-2">
            <figure><img className=" md:h-[180px] lg:h-[300px]" src={ApartmentImage} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between mb-2">
                    <div><p className="text-xl">Block : {BlockName}</p></div>
                    <div><p className="text-xl">Floor : {FloorNo}</p></div>
                </div>
                <div className="flex justify-between">
                    <div><p className="text-xl">Apart No : {ApartmentNo}</p></div>
                    <div><p className="text-xl">Rent : {Rent} $</p></div>
                </div>
                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-outline border-0 border-b text-red-700 bg-red-50 ">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default ApartCard;