import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars"
import Footer from "../../SharedComponents/Footer/Footer";
import homebg from '../../../assets/images/homepage/homebg1.png'
import homebg3 from '../../../assets/images/homepage/bgimg3.png'
import homeimh4card from '../../../assets/images/homepage/Groupimg1.png'
import carddata from '../../SharedComponents/Data/Homedata/homedata.json'
import Cards from "../Props/Cards";


const Home = () => {

  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener('scroll', setFixed);
  return (
    <>
      <div className={`z-10 ${navfix ? 'top-0 h-[4%] w-full fixed bg-[white]' : ''}`} >
        <Navbars className='relative' />

      </div>


      <header className="w-full   bg-[#2c6777] bg-cover ">





        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row gap-4 justify-between   flex-wrap lg:flex-nowrap items-center  pt-[4%] pb-[4%]">


            <div className="lg:w-2/3">


              <div className="max-w-xl p-5 text-center text-white ">
                <div className=" text-5xl mb-5 font-semibold">
                  <h1>We help you find and manage tutors.</h1>
                </div>
                <div className="  mx-auto text-lg  mb-5">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                </div>
                <div>

                  <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-1 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-[#2c6777] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

            <div>
              <div className="p-2   lg:p-0  ">
                <img src={homebg} className="p-2 lg:p-0 lg:h-[600px] w-full   " alt="" />
              </div>
            </div>

          </div>
        </div>
      </header>
      <section className="div2-Section  container mx-auto" >
        <div className=" mt-14 mb-14">
          <div className="flex flex-col lg:flex-row gap-4 justify-between  flex-wrap lg:flex-nowrap items-center  ">
            <div>
              <div className="p-2   lg:p-0  ">
                <img src={homebg3} className="p-2 lg:p-0 lg:h-[500px] w-full   " alt="" />
              </div>
            </div>

            <div className="">


              <div className="max-w-2xl p-5  text-black ">
                <div className=" text-2xl  lg:text-5xl mb-5 font-bold lg:font-semibold ">
                  <h1>Why choice tutor2u?</h1>
                </div>
                <div>   <p className=" lg:text-3xl font-medium text-neutral-600">We have an astounding success in teaching with our skilled and passionate educators who does the work with love and exellence. Your path to excellence starts with the right tutor by your side. </p></div>



              </div>
            </div>

          </div>

        </div>

      </section>



      <section className="div2-Section bg-slate-200  " >
        <div className="container mx-auto mt-14 mb-14 pt-[4%] pb-[4%]">
          <div className="flex flex-col lg:flex-row gap-4 justify-between  flex-wrap lg:flex-nowrap items-center  ">


            <div className="">


              <div className="max-w-2xl p-5  text-black ">
                <div className=" text-2xl  lg:text-5xl mb-5 font-bold lg:font-semibold ">
                  <h1>Why choice tutor2u?</h1>
                </div>
                <div>   <p className=" lg:text-3xl font-medium text-[#2c6777]">We have an astounding success in teaching with our skilled and passionate educators who does the work with love and exellence. Your path to excellence starts with the right tutor by your side. </p></div>



              </div>
            </div>

            <div>
              <div className="p-2   lg:p-0  ">
                <img src={homebg3} className="p-2 lg:p-0 lg:h-[500px] w-full   " alt="" />
              </div>
            </div>

          </div>

        </div>

      </section>



      {/* not in reactive way  */}

      <section className="div3-Section w-full container mx-auto " >
        <div className=" mt-16 mb-16">

          <div>


            <div className=" p-5  ">

              <h1 className=" text-5xl max-w-3xl mx-auto text-center font-medium mb-10">Time to elevate your learning, Find a tutor in any subject below.</h1>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-10">
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>

                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>




              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-2">
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>

                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>
                <div className="border border-blue-700 p-2 rounded-lg">
                  <div className="flex gap-5 items-center p-3">
                    <div>
                      <img src={homeimh4card} alt="" />
                    </div>
                    <div>
                      <p>Mathematics</p>
                    </div>
                  </div>

                </div>




              </div>



            </div>
          </div>


        </div>

      </section>
      {/* not in reactive way  */}


      <section className="div3-Section w-full container mx-auto " >
        <div className=" mt-16 mb-16">




          <div className=" p-5  ">

            <h1 className=" text-5xl max-w-3xl mx-auto text-center font-medium mb-10">Every Tutor is Professional and Highly Qualified</h1>





          </div>

          <div className="flex gap-2">

            <div>

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={homebg3} alt="" />
                </a>
                <div className="p-5">
                  <div className="flex items-center space-x-4 mb-10">

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Mitchel Starck
                      </p>
                      <p className="text-sm text-black truncate">
                        California, IL
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      icon
                    </div>
                  </div>


                  <div className="flex items-center space-x-4">

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Mobile:
                      </p>

                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      111 222 333
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Email:
                      </p>

                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      teacher@mail.com
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Starting from:
                      </p>

                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $1,158/hr
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Qualification:
                      </p>

                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      B.Tech/B.E.
                    </div>
                  </div>

                </div>
                <div>

                  <div className="flex justify-center items-center mt-2.5  border-t-2  p-2">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>


                    <span className=" text-black text-md font-semibold  ml-3">5.0</span>
                  </div>
                </div>
              </div>


            </div>
          </div>



        </div>

      </section>

      <div>
        home
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        home
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        home
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <section className="">
        <Footer />
      </section>

    </>
  )
}

export default Home