import Searchbar from "./Searchbar";

const Header = () => {
  return (
    // <header class="text-gray-600 body-font">
    //   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <nav class="flex lg:w-2/5 flex-wrap justify-center text-base md:ml-auto">
    //       <a class="mr-5 hover:text-gray-200">First Link</a>
    //       <a class="mr-5 hover:text-gray-900">Second Link</a>
    //       <a class="mr-5 hover:text-gray-900">Third Link</a>
    //     </nav>
    //     <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //       </svg>
    //       <span class="ml-3 text-xl">Barclays</span>
    //     </a>
    //       <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    //         <Searchbar />
    //       </div>
    //   </div>
    // </header>


  <header class="bg-white">
    <div class="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
      <div class="flex items-center justify-between">
        {/* <!-- Logo --> */}
        <a class="text-2xl font-bold text-[#00aeef]" href="#">Your Logo</a>

        {/* <!-- Hamburger menu (hidden on larger screens) --> */}
        <div class="md:hidden">
          <button id="menu-toggle" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Navigation links (hidden on smaller screens) --> */}
      <nav class="hidden md:flex space-x-4">
        <a href="#" class="text-[#00aeef] font-semibold hover:text-gray-300">Home</a>
        <a href="#" class="text-[#00aeef] font-semibold hover:text-gray-300">About</a>
        <a href="#" class="text-[#00aeef] font-semibold hover:text-gray-300">Services</a>
        <a href="#" class="text-[#00aeef] font-semibold hover:text-gray-300">Contact</a>
      </nav>

      {/* <!-- Search box --> */}
      <div class="hidden md:block">
        <input type="text" placeholder="Search..." class="px-4 py-2 rounded-lg bg-[#ffff] text-[#00aeef] focus:outline-none focus:ring border-blue-300">
      </input>
      </div>
    </div>
    {/* <!-- Responsive menu (hidden on larger screens) --> */}
    <div class="md:hidden hidden" id="responsive-menu">
      <nav class="px-2 py-4 space-y-2 bg-gray-800">
        <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">Home</a>
        <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">About</a>
        <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">Services</a>
        <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact</a>
      </nav>
    </div>
  </header>


  );
};

export default Header;
