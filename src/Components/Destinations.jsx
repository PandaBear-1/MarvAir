import AboutUs from './AboutUs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Destinations() {
  useEffect(()=>{
    AOS.init()
  }, [])
  

  return (
    <div className="bg-gradient-to-b from-[#f4f4f4] to-white text-[#4e443b] pt-10 md:pt-20 pb-5 md:pb-10">
        <div className="flex justify-between items-center gap-8 md:gap-0  px-4 md:px-14 ">
            <h2 data-aos="fade-up" data-aos-duration="1000"
             className="text-2xl md:text-4xl font-bold  text-black">Destinations & <br /> Services</h2>
            <p className="text-[11px] md:text-[15px] italic ">We offer flights to all the major cities around Nigeria, from border <br />towns to toursit destinations to remote villages, no destination is too far!.</p>
        </div>

        <div className="mt-10 overflow-hidden bg-[#464646] text-white">
            <div className="flex justify-center gap-2 md:gap-8 py-3 w-max  font-bold 
            [animation:scroll_10s_linear_infinite] ">

            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Lagos</div>
            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md  ">Abuja</div>
            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Port-Harcourt</div>
            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Ibadan</div>
            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Enugu</div>
            <div className=" border-gray-700 text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Kano</div>


            {/* Duplicated Cells for Scroll animation */}

            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Lagos</div>
            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md  ">Abuja</div>
            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Port-Harcourt</div>
            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Ibadan</div>
            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Enugu</div>
            <div className=" border-gray-700  text-[12px] md:text-[16px] h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Kano</div>
            </div>
        </div>

        <AboutUs />

       
  
    </div>
  )
}

export default Destinations