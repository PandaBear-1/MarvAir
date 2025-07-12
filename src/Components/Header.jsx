import { Link } from 'react-router-dom'

function Header({text, link }) {
  return (
    <nav className='bg-white w-full flex justify-between items-center p-5 px-8 md:px-10 shadow-lg
      '>
        <h2 className='text-black font-bold text-[28px] md:text-[37px]'>MarvAir</h2>
        <ul className='hidden md:flex gap-1 md:gap-10 text-gray-700 '>
            <li>About Us</li>
            <li>Services</li>
            <li>Flights</li>
            <li>Contact Us</li>
        </ul>

        <Link to={link} >
        <button className=' relative font-semibold overflow-hidden group border-2 border-black rounded-2xl font-poppins 
        px-[10px] py-[5px] md:px-[20px] md:py-[10px] text-[14px] '>
          <span className='absolute inset-0 w-full bg-black -translate-x-full group-hover:translate-x-0 rounded-md
          transition-transform duration-400   '></span>
          <span className='relative z-10 text-black group-hover:text-white transition-colors duration-400'>
            {text}</span></button>
        </Link>
        
    </nav>
  )
}

export default Header