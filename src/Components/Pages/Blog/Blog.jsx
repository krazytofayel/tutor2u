

import { useEffect, useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";

import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';



import BlogpageMainCarddata from "../../SharedComponents/Data/BlogPageMainCard/BlogPageMainCarddata.json"

import Blogepagecarddata from"../../SharedComponents/Data/BlogPageCarddata/Blogpagecarddata.json"
import { motion } from "framer-motion";
import Blogpagecard from "../Props/BlogPageCard/Blogpagecard";
import BlogPageMainCard from "../Props/BlogPageMainCard/BlogPageMainCard";

const Blog = () => {
  const [navfix, setNavfix] = useState(false);
  const [showCount, setShowCount] = useState(2);
  const { register, handleSubmit, setValue, watch } = useForm();
  const searchValue = watch('search', '');

  const setFixed = () => {
    setNavfix(window.scrollY >= 70);
  };

  window.addEventListener('scroll', setFixed);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    console.log("Search Value:", searchValue);
  };

  const handleClick = (buttonValue) => {
    setValue('search', buttonValue);
    console.log("Button clicked with value:", buttonValue);
  };
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    const selectedSubjectsNames = selectedSubjects.map(id => {
      const subject = ButtonData.find(item => item.id === id);
      return subject ? subject.buttoncontant : null;
    }).filter(Boolean);

    console.log("Selected Subjects:", selectedSubjectsNames);
  }, [selectedSubjects]);

  const handleCheckboxChange = (id) => {
    setSelectedSubjects(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
    // setSelectedSubjects(ButtonData.map(subject => subject.id));
  }

  const ButtonData = [
    { id: 1, buttoncontant: "Culture" },
    { id: 2, buttoncontant: "Creativity" },
    { id: 2, buttoncontant: "Food" },
    { id: 2, buttoncontant: "Travel" },
    { id: 2, buttoncontant: "Music" },
    { id: 2, buttoncontant: "Cricket" },
    { id: 2, buttoncontant: "Football" },
    { id: 2, buttoncontant: "Tution" },

  ];


  const [selectedStars1, setSelectedStars1] = useState([]);
  const [selectedStars2, setSelectedStars2] = useState([]);
  const handleClearFilter = (setSelectedStars) => {
    setSelectedStars([]);
  };





  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BlogpageMainCarddata.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage)
  return (
    <div>
      <div className={`z-10 container-xl mx-auto xl:px-56 ${navfix ? ' top-0 h-[6%] w-full fixed bg-white ' : ''}`} >
        <Navbars className='relative ' />

      </div>



      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">

              <motion.h3 initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">Welcome to Our Blog</motion.h3>
              <motion.p initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="max-w-lg text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </motion.p>
              <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="grid grid-cols-12 gap-4  p-2 mt-10">


                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">





                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5  p-2 lg:p-0">


                    {
                      currentItems.map((blogmaincardprop) => (

                        <BlogPageMainCard key={blogmaincardprop.id} blogmaincardprop={blogmaincardprop} />

                      ))
                    }

                  </div>
                  <div className="flex justify-center mt-4">
                    {BlogpageMainCarddata.length > itemsPerPage && (
                      <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-sm">
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage > 1) {
                                  paginate(currentPage - 1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Previous
                            </button>
                          </li>
                          {Array.from({ length: Math.ceil(BlogpageMainCarddata.length / itemsPerPage) }, (_, i) => (
                            <li
                              key={i}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${i + 1 === currentPage ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              <button onClick={() => paginate(i + 1)} className="pagination-link">
                                {i + 1}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage < (BlogpageMainCarddata.length / itemsPerPage)){
                                  console.log(currentPage)
                                  paginate(currentPage +1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${currentPage === Math.ceil(BlogpageMainCarddata.length / itemsPerPage)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>




                  {/* <div className="text-center lg:mt-10">
if (currentPage < Math.ceil(BlogpageMainCarddata.length / itemsPerPage)) {
}
{Resourcescarddata.length > loadmore && (
  <button
    onClick={handleLoadMore}
    className="bg-[#2c6777] hover:bg-blue-700  mb-10 rounded text-white font-bold py-2 px-9 rounded mt-4"
  >
    Show More
  </button>
)}

</div> */}

                </div>


                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">

                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative">
                        <input
                          type="search"
                          id="search"
                          {...register('search')}
                          value={searchValue}
                          onChange={(e) => setValue('search', e.target.value)}
                          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"

                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2.5 bottom-1 bg-[#2c6777] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 "
                        >
                          Search
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3 mb-3">
                        {ButtonData.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            className="text-black bg-white hover:bg-[#089bab] px-2 py-1 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm  text-center inline-flex items-center"
                            onClick={() => handleClick(btn.buttoncontant)}
                          >
                            {btn.buttoncontant}
                            <RxCross2 className="ml-3 h-3.5 w-3.5" />
                          </button>
                        ))}
                      </div>
                    </form>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow ">

                      {/* <h5 className="mb-3 p-2 text-base font-semibold text-black text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                        Filter Resources
                      </h5> */}




                      <div className="p-3">


                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Categories</h3>





                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div key={subject.id} className="flex items-center mb-4 border-black border-b-2">
                            <input
                              id={`default-checkbox-${subject.id}`}
                              type="checkbox"
                              checked={selectedSubjects.includes(subject.id)}
                              onChange={() => handleCheckboxChange(subject.id)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`default-checkbox-${subject.id}`}
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {subject.buttoncontant}
                            </label>
                          </div>
                        ))}
                        {showCount === 2 && (
                          <button onClick={handleLoadMore} className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2">
                            Load More
                          </button>
                        )}



                      </div>









                    </div>
                    <div >


                      {
                        Blogepagecarddata && Blogepagecarddata.map((blogcardprop)=>(

                          <Blogpagecard key={blogcardprop.id} blogcardprop={blogcardprop}/>
                        ))
                      }













                    </div>


                  </div>
                </div>


              </motion.div>
            </div>


            <div>
              <div className="flex justify-between items-center bg-[#2c6777] rounded-md p-5 mt-5 mb-5">
                <div className="text-white">
                  <h2 className="text-2xl font-semibold">Request the best tutor for your child</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div>
                  <button className="bg-white text-black text-sm font-normal px-3 py-2 rounded-full">
                    Request a Tutor
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
