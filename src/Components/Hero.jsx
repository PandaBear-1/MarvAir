import logo_1 from '../assets/AdobeStock_1271977356_Preview.jpeg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex bg-white'>
        <div className='mt-[70px] md:mt-[90px] px-5 md:px-12 w-1/2 pb-14'>
            <h2 className='text-black text-[25px] lg:text-[58px] font-bold mb-2 md:mb-4
             '>Enjoy Luxury Flights! <br /> Value for Money.</h2>
               {/* <h2 className='text-black text-[25px] lg:text-[58px] font-bold mb-2 md:mb-4
             '>Nothing Beats a Jet-2 Holiday! <br /> Save $50.</h2> */}
                <Link to={'/booking'} >
             <button className='bg-black text-white text-[14px] md:text-[23px] text-left border-none
                rounded-full w-[140px] h-[30px] md:w-[250px] md:h-[50px] px-3 md:px-6 py-2 md:py-3 flex items-center gap-1
                '>Book a Flight 
                <div className='bg-black rounded-full w-3 h-3 md:w-10 md:h-10 flex items-center justify-center '>
                  <FaArrowRight className='text-white' /></div>
             </button>
                </Link>
            
        </div>
        <img src={logo_1} alt="logo_1" className='w-1/2 h-[300px] md:h-auto' />
    </div>
  )
}

export default Hero