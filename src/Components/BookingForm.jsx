import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoAirplaneSharp } from "react-icons/io5";
import Header from './Header';
import Footer from './Footer';


function BookingForm(){

  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add booking logic here — send to API or show confirmation screen
    console.log('Booking Info:', { ...formData, flight });

    // Redirect or show a success message
    alert('Booking confirmed!');
    navigate('/');
  };

//   if (!flight) {
//     return <div className="p-6 text-center text-red-600">No flight selected.</div>;
//   }

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
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
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
            <input
            type="text"
            name="passport"
            required
            placeholder="Passport Number or ID"
            value={formData.passport}
            onChange={handleChange}
            className="border rounded p-3"
            />

            <div className="col-span-1 md:col-span-2 mt-4">
            <button
                type="submit"
                className="w-full bg-[#464646] hover:bg-black text-white py-3 rounded transition"
            >
                Confirm Booking
            </button>
            </div>
        </form>

        </div>

        <Footer />
    </div>

  );
};

export default BookingForm;
