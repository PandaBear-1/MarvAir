import logo_1 from '../assets/AdobeStock_1271977356_Preview.jpeg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row bg-white'>
        <div className='mt-[20px] md:mt-[90px] px-5 md:px-12 w-full md:w-1/2 pb-0 md:pb-14'>
            {/* <h2 className='text-black text-[35px] lg:text-[58px] font-bold mb-2 md:mb-4
             '>Enjoy Luxury Flights! <br /> Value for Money.</h2> */}
               <h2 className='text-black text-[45px] lg:text-[58px] font-bold mb-2 md:mb-4
             '>Nothing Beats a Jet-2 Holiday! <br /> <span className='text-[20px]'>and right now you can Save £50.</span></h2>
                <Link to={'/booking'} >
             <button data-aos="zoom-in" data-aos-duration="1000" 
              className='relative font-semibold overflow-hidden group  text-black text-[14px] md:text-[23px] text-left border-2
                rounded-full w-[140px] h-[30px] md:w-[250px] md:h-[50px] px-3 md:px-6 py-2 md:py-3 flex items-center gap-1
                '><span className='absolute inset-0 w-full bg-black -translate-x-full group-hover:translate-x-0 rounded-md
                transition-transform duration-400   '></span>
                  <span className='relative z-10 text-black group-hover:text-white transition-colors duration-400'>
                    Book a Flight</span>
                <div className=' relative rounded-full w-3 h-3 md:w-10 md:h-10 flex items-center justify-center '>
                  <FaArrowRight className='text-white' /></div>
             </button>
                </Link>
            
        </div>
        <img  data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300"
         src={logo_1} alt="logo_1" className='w-full md:w-1/2 h-[300px] md:h-auto' />
    </div>
  )
}

export default Hero