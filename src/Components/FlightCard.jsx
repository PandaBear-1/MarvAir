
import { useNavigate } from 'react-router-dom';
import { IoAirplaneSharp } from "react-icons/io5";
function FlightCard({flight}) {

    const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking-form', { state: { flight } });
  };

  return (
    <div className=" w-[350px] md:w-[500px] mx-auto mt-10 border-none rounded-lg shadow-lg text-gray-600 " >
        <div className="flex justify-between mx-2 mt-2 md:mx-4 md:mt-4" >
            <h2 className='text-black font-bold text-[25px] md:text-[30px]'>JoyAir</h2>
            <div className="flex gap-4 text-[12px] md:text-[16px]" >
                <p>Business</p>
                <p>1 Seat</p>
            </div>
        </div>

        <div className="flex flex-col mx-2 mt-3 md:mx-4 md:mt-4 gap-4  "  >

            <div className="flex justify-between" > 
                <p className="" >{flight.date}</p>
                <p> ₦{flight.price}</p>
            </div>


           
           <div className="flex justify-between " >
                <p className="text-3xl">{flight.time}</p>

                <div className="flex items-center">
                    <p className="text-2xl">- - - - - - </p>
                    <IoAirplaneSharp className="text-3xl" />
                </div>

                <p className="text-3xl">10:00</p>
           </div>


           <div className="flex justify-between mb-0" >
            <p>{flight.departure}</p>
            <p>{flight.destination}</p>
           </div>

         <button   onClick={handleBook} className='bg-black text-white text-[16px] md:text-[20px] mx-auto mb-4 px-0 rounded-md h-8 w-16 md:h-10 md:w-20 flex items-center justify-center ' >
            Book
           </button>

        </div>
    </div>
  )
}

export default FlightCard