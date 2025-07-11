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
        <button className='bg-white text-black border-2 rounded-2xl font-poppins 
        px-[10px] py-[5px] md:px-[20px] md:py-[10px] text-[14px] '>{text}</button>
        </Link>
        
    </nav>
  )
}

export default Header