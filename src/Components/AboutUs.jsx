import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

function AboutUs() {

  return (
    
    <div className='flex items-center justify-center mt-10 md:mt-20 '>
      <div className='bg-[#464646] py-10 md:py-20 w-[90%] text-white flex flex-col items-center
      rounded-md px-4'>
        <h2 className='text-2xl md:text-4xl'>Our Main Services</h2>
        <p className=' text-[11px] text-1.5xl italic'>We offer a variety of destinations for you and your family!</p>

        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-5 md:mt-10'>

          <div data-aos="flip-left" data-aos-duration="1000"
           className='bg-white text-black border-1 px-5 py-3 md:px-6 md:py-6 border-gray-200 rounded-2xl shadow-lg
           hover:scale-105 transition-transform duration-300 ease-in-out '>
            <FaArrowRight className='text-[#dcbfa6]'/>
            <h3 className='font-bold mt-2'>Online Seat Booking</h3>
            <p  className='w-[250px] text-[12px] md:text-[14px] mt-3'>You can confirm price, book a seat online at your comfort with just your smartphone </p>
          </div>

          <div data-aos="flip-left" data-aos-duration="1000"
           className='bg-white text-black border-2 px-5 py-3 md:px-6 md:py-6 border-gray-200 rounded-2xl shadow-lg
          hover:scale-105 transition-transform duration-300 ease-in-out'>
            <FaArrowRight className='text-[#dcbfa6]'/>
            <h3 className='font-bold mt-1 md:mt-2'>Jet-2 Family Vacation</h3>
            <p  className='w-[250px] text-[12px] md:text-[14px] mt-1 md:mt-3'>You can book a family vaction wtih our Jet-2 special offer and save £50 per person, thats £200 for a family of 4! </p>
          </div>

          <div data-aos="flip-left" data-aos-duration="800"
           className='bg-white text-black border-2 px-5 py-3 md:px-6 md:py-6 border-gray-200 rounded-2xl shadow-lg
          hover:scale-105 transition-transform duration-300 ease-in-out'>
            <FaArrowRight className='text-[#dcbfa6]' />
            <h3 className='font-bold mt-2'>International Courier Service</h3>
            <p  className='w-[250px] text-[12px] md:text-[14px]  mt-1 md:mt-3'>Access our fast, easy and safe courier services to anywhere in the World </p>
          </div>
        </div>

      <Link to={'/booking'}>
      <button className='relative font-semibold overflow-hidden group bg-white text-black text-[16px] md:text-[22px] text-left border-none
              rounded-full mt-5 md:mt-10 w-[150px] h-[30px] md:w-[180px] md:h-[50px] p-2 md:p-5 flex items-center gap-4
               '>  <span className='absolute inset-0 w-full bg-black -translate-x-full group-hover:translate-x-0 rounded-md
               transition-transform duration-400   '></span>
               <span className='relative z-10 text-black group-hover:text-white transition-colors duration-400'>
                      Choose Us</span>
        </button>
      </Link>
      </div>
    </div>
  )
}

export default AboutUs