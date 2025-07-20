import { useState, useRef } from 'react'
import mockFlightsData from '../../mockFlightsData'
import FlightCard from './FlightCard'
import Header from './Header'
import Footer from './Footer'

function Form() {
    const [form, setForm] = useState({
        departure: '',
        destination: '',
        date: '',
        passengers: 1,
        flightClass: 'economy',
      })
      const [flights, setFlights] = useState([])
      const flightRef = useRef(null)


      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
       const FilteredFlights = mockFlightsData.filter((flight)=> (
        form.departure.trim().toLowerCase() === flight.departure.toLowerCase() &&
        flight.destination.trim().toLowerCase() == form.destination.trim().toLowerCase()
      ))
      .map(flight => ({...flight, date:form.date}) )

      setFlights(FilteredFlights)
       
        scrollToForm()
      };

      function scrollToForm() {
        if (flightRef.current) {
        setTimeout(()=>{
          flightRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 500)
        }
      }


    return (
      <>
      <Header text = 'Back Home' link = {'/'} />

      <div className='bg-white flex flex-col items-center py-26' >
            <h2 className="text-black text-2xl md:text-4xl font-bold">Search for Available Flights</h2>
           <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-white shadow p-6 rounded-lg text-black mt-2">
          <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
  <label className="block mb-1 text-sm font-medium text-gray-700">Departure</label>
  <select
    name="departure"
    value={form.departure}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Select departure</option>
    <option value="Lagos">Lagos</option>
    <option value="Abuja">Abuja</option>
    <option value="Port-Harcourt">Port-Harcourt</option>
    <option value="Ibadan">Ibadan</option>
    <option value="Enugu">Enugu</option>
    <option value="Kano">Kano</option>
  </select>
</div>

<div className="flex-1">
  <label className="block mb-1 text-sm font-medium text-gray-700">Destination</label>
  <select
    name="destination"
    value={form.destination}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Select destination</option>
    <option value="Lagos">Lagos</option>
    <option value="Abuja">Abuja</option>
    <option value="Port-Harcourt">Port-Harcourt</option>
    <option value="Ibadan">Ibadan</option>
    <option value="Enugu">Enugu</option>
    <option value="Kano">Kano</option>
  </select>
</div>

          </div>
    
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700">Travel Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
    
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700">Passengers</label>
              <input
                type="number"
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                min="1"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
    
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Class</label>
            <select
              name="flightClass"
              value={form.flightClass}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
    
          <button
            type="submit"
            className="w-full bg-[#464646] hover:bg-black text-white py-2 px-4 rounded transition"
          >
            Search Flights
          </button>
        </form>


        <div ref={flightRef} className='h-80 w-full' >
          {flights.map((flight)=>(
            <FlightCard
            key = {flight.id}
            flight = {flight}
            />
          ))}
        </div>

        </div>


      <Footer />
    </>
       

        
      );
}

export default Form