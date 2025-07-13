import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoAirplaneSharp } from "react-icons/io5";
import Header from './Header';
import Footer from './Footer';
import { sendBookingEmail } from '../../sendEmail';


function BookingForm(){

  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await sendBookingEmail(formData, flight);
      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      console.error('Email failed:', err);
      setError('Failed to send email. Please check your email address and try again.')
    } finally {
      setLoading(false);
    }
  };
  

  if (!flight) {
    return <div className="p-6 text-center text-red-600">No flight selected.</div>;
  }

  return (
    <div className='bg-white h-screen'>
        <Header text = 'Back Home' link = {'/'}/>

        <div className="bg-white max-w-4xl mx-auto p-6 mt-4">
        <h2 className="text-3xl text-black font-bold text-center my-4">Confirm Your Booking</h2>

        {/* Flight Info */}
        <div className=" p-4 rounded shadow mb-6 text-black">
            <div className='flex gap-2 items-center font-bold'>
                <p>{flight.departure}</p>
                <div className="flex items-center">
                            <p className="text-2xl">- - - - - - </p>
                            <IoAirplaneSharp className="text-3xl" />
                </div>
                <p>{flight.destination}</p>
            </div>
            <p><strong>Date:</strong> {flight.date}</p>
            <p><strong>Time:</strong> {flight.time}</p>
            <p><strong>Price:</strong> ₦{flight.price}</p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <input
            type="text"
            name="firstName"
            required
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded p-3"
            />
             <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border rounded p-3"
            />
            <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-3 text-black"
            />
            <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded p-3"
            />
            <div className="col-span-1 md:col-span-2 mt-4">
            <button
                type="submit"
                className="w-full bg-[#464646] hover:bg-black text-white py-3 rounded transition"
            >
                {loading ? 'Sending...' : 'Confirm Booking'}
            </button>
            {success && <p className="mt-4 text-green-500">Booking Confirmed 🎉</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            
            </div>
        </form>

        </div>

        <Footer />
    </div>

  );
};

export default BookingForm;
