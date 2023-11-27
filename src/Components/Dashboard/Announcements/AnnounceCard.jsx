/* eslint-disable react/prop-types */


const AnnounceCard = ({ item }) => {
    const { title,details } = item
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4">
                <div className="collapse-title text-xl font-medium">
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="collapse-content">
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default AnnounceCard;