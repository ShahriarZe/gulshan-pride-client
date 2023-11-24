

const Coupon = () => {
    const coupons = [
        { code: 'SAVE20', discount: 20 },
        { code: 'FALLSALE', discount: 15 },
        { code: 'SPECIAL10', discount: 10 },
        { code: 'SUMMER25', discount: 25 },
    ];
    return (
        <div className="bg-gray-100 p-8 mb-10 mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Available Coupons For Apartments</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-5xl mx-auto ">
                {coupons.map((coupon) => (
                    <div key={coupon.code} className="bg-white p-4 border border-red-700 rounded">
                        <p className="font-bold text-lg mb-2">{coupon.code}</p>
                        <div className="flex justify-between">
                        <p>{coupon.discount}% off</p>
                        <button className="btn btn-sm">Apply</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coupon;