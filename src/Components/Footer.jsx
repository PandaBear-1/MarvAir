

function Footer() {
  return (
    <div>
     <footer className=" bg-[#464646] text-white px-10 ">
         <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      
      {/* <!-- Logo & About --> */}
      <div className="space-y-4 max-w-sm">
        <h2 className="text-white text-2xl font-semibold">MarvAir</h2>
        <p className="text-sm">
          Building seamless experiences for travelers, students, and everyday commuters. Book your trip online, skip the queue.
        </p>
      </div>

      {/* <!-- Navigation Links --> */}
      <div className="grid grid-cols-2 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-black">About</a></li>
            <li><a href="#" className="text-black">Blog</a></li>
            <li><a href="#" className="text-black">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* <!-- Social Icons --> */}
      <div className="space-y-4">
        <h3 className="text-white font-semibold">Follow us</h3>
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="text-white hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557a9.91 9.91 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.196A4.916 4.916 0 0 0 16.616 3c-2.733 0-4.945 2.215-4.945 4.947 0 .39.045.767.13 1.13C7.728 8.906 4.1 6.85 1.671 3.905a4.93 4.93 0 0 0-.666 2.484c0 1.713.87 3.227 2.188 4.115a4.904 4.904 0 0 1-2.24-.619v.06c0 2.393 1.701 4.388 3.95 4.837a4.935 4.935 0 0 1-2.232.085c.63 1.968 2.445 3.4 4.6 3.44A9.874 9.874 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.054 0 14-7.496 14-13.986 0-.21-.005-.42-.014-.63A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.405.596 24 1.325 24h11.498v-9.294H9.691v-3.622h3.132V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.405 24 22.674V1.326C24 .593 23.404 0 22.675 0z" />
            </svg>
          </a>
          {/* <!-- Add more icons as needed --> */}
        </div>
      </div>
    </div>

    {/* <!-- Bottom --> */}
    <div className="mt-10 border-t border-gray-700 pt-6  text-sm text-center text-white">
      &copy; 2025 Oluwamisi Samuel. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer