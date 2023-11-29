import  { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const uniqueDates = useMemo(() => {
    const datesSet = new Set(payments.map((payment) => payment.date));
    return Array.from(datesSet);
  }, [payments]);

 
  const filteredPayments = useMemo(() => {
    if (!selectedDate) {
      return payments;
    }
    return payments.filter((payment) => payment.date === selectedDate);
  }, [selectedDate, payments]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value === 'all' ? null : e.target.value);
  };

  return (
    <div>
      <h2 className="text-3xl p-6">Payment History of: {user.displayName}</h2>

      <div className="p-4">
        <div className='border border-red-700 p-2 max-w-sm'>
        <label htmlFor="dateFilter">Search Date: </label>
        <select id="dateFilter" onChange={handleDateChange} value={selectedDate || 'all'}>
          <option value="all">All Dates</option>
          {uniqueDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Transaction Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
