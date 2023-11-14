import { useEffect, useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import Footer from "../../SharedComponents/Footer/Footer";
import { motion } from "framer-motion";
import img from '../../../assets/images/resource/set-school-item-watercolor-illustration1.png'
const DownloadResource = () => {
  const [navfix, setNavfix] = useState(false);
  const setFixed = () => {
    setNavfix(window.scrollY >= 70);
  };

  window.addEventListener('scroll', setFixed);
  return (
    <>
      <div className={`z-10  ${navfix ? ' top-0 h-[9%] w-full fixed bg-white transition-all duration-300 ease-in-out ' : ''}`} >
        <Navbars className='relative ' />

      </div>
      <section>
        <div className="bg-[#F0F8FF] ">
          <div className="container mx-auto">
            <motion.h3 initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">Download Your Neccesary Resources What You Need</motion.h3>
            <section className="BecomeaTutor_Secound_Banner ">
              <div className="container py-10 lg:py-20 md:py-10  mx-auto ">
                <div className="  flex flex-col md:flex-row gap-5 justify-between  items-center p-2 md:p-0">
                  <div className="   h-auto object-cover object-center mx-auto">
                    <img alt="Top-Banner-Side-Image" className=" " src={img} />
                  </div>
                  <div className="  w-full mb-6 lg:mb-0 m">

                    <div className="text-center md:text-start">
                      <h1 className="text-[#2c6777] text-[20px] xl:text-[20px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                        Genarel Math
                      </h1>

                      <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                      </p>
                    </div>
                  </div>


                </div>



                <div>
                  <h1 className="text-[#2c6777] font-semibold">Summary of the course if given</h1>
                </div>
                <div className="bg-white rounded p-2 py-14">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>


                  <div className="flex gap-2 mt-2 mb-2">

                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 px-10">
                      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                      <label htmlFor="bordered-checkbox-2" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 px-10">
                      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                      <label htmlFor="bordered-checkbox-2" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>

                  </div>
                  <div className="flex gap-2 mb-2">

                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 px-10">
                      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                      <label htmlFor="bordered-checkbox-2" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 px-10">
                      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                      <label htmlFor="bordered-checkbox-2" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>

                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center ps-4 border border-gray-200 rounded px-10">
                      <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                      <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 px-10">
                      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                      <label htmlFor="bordered-checkbox-2" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply </label>
                    </div>


                  </div>


                </div>



                <h3 className="mb-4 font-semibold text-[#2c6777] mt-2">This note Details:</h3>
                <ul className="w-full text-sm font-medium text-gray-900 ">
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                    </div>
                  </li>
                </ul>

              </div>
            </section>

          </div>
          <h1 className="text-[#2c6777] font-bold text-xl mt-4 mb-5 text-center">payment Details</h1>

          <div className="container mx-auto grid grid-cols-12 gap-2">
            <div className="col-span-6 ">
          
            <div className="grid grid-cols-3 gap-2 ">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 caret-green-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required

                         
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Hourly Fee:</label>
                          <input type="number" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Hourly Pay" required


                           
                          />
                        </div>
                       
                        

                       






                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">I Can Teach On:</label>
                        <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                        
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">I Can Teach On:</label>
                        <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                     
                        />
                      </div>
            </div>
            <div className="col-span-6 ">
          
          <div className="grid grid-cols-3 gap-2 ">
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                        <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 caret-green-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required

                       
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Hourly Fee:</label>
                        <input type="number" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Hourly Pay" required


                         
                        />
                      </div>
                     
                      

                     






                    </div>
                    <div className="mb-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">I Can Teach On:</label>
                      <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                      
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">I Can Teach On:</label>
                      <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                   
                      />
                    </div>
          </div>
          
          </div>
        </div>

     
      </section>

      <section className="">
        <Footer />
      </section>
    </>
  )
}

export default DownloadResource
