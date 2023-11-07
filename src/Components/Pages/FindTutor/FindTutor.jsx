import { useEffect, useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';

import StarRating from "../../SharedComponents/Helper/StarRating/StarRating";

import A from "../../SharedComponents/Data/FindTutordata/FindTutordata.json"
import FindTutors from "../Props/FindTutor/FindTutors";
import TutorProfileDetails from "../TutorProfileDetailsPage/TutorProfileDetails";
import Footer from "../../SharedComponents/Footer/Footer";

const FindTutor = () => {
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
    { id: 1, buttoncontant: "Math" },
    { id: 2, buttoncontant: "English" },
    { id: 3, buttoncontant: "History" },
  ];


  const [selectedStars1, setSelectedStars1] = useState([]);
  const [selectedStars2, setSelectedStars2] = useState([]);
  const handleClearFilter = (setSelectedStars) => {
    setSelectedStars([]);
  };


  const [selectedTutorId, setSelectedTutorId] = useState(null);
  const handleViewProfile = (id) => {
    setSelectedTutorId(id);
  };

  return (
    <div>
      <div className={`z-10  ${navfix ? ' top-0 h-[10%] w-full fixed bg-white transition-all duration-300 ease-in-out ' : ''}`} >
        <Navbars className='relative ' />

      </div>

      <section className="ContactUs_Top_Banner bg-[#2C6777]">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem] text-center lg:text-start">
                <h1 className="text-white text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Animated Night Hill Illustrations
                </h1>

                <p className="leading-relaxed xl:text-[22px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                Find and connect with a skilled tutor and embark on a journey of academic excellence and fostering a sense of accomplishment and self-assurance.
                </p>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center">
              <img alt="Top-Banner-Side-Image"  src={aboutsideimg} />
            </div>
          </div>
        </div>
      </section>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">

              <h3 className="text-2xl lg:text-4xl font-bold text-center text-[#2c6777] py-5 ">154,3 Search Result in “English” Tutor</h3>
              <div className="grid grid-cols-12 gap-5 lg:gap-12 p-2 mt-10">
                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative">
                      <input
                        type="search"
                        id="search"
                        {...register('search')}
                        value={searchValue}
                        onChange={(e) => setValue('search', e.target.value)}
                        className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search your best teacher"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-2 "
                      >
                        Search
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {ButtonData.map((btn) => (
                        <button
                          key={btn.id}
                          type="button"
                          className="text-black bg-white hover:bg-[#089bab] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                          onClick={() => handleClick(btn.buttoncontant)}
                        >
                          {btn.buttoncontant}
                          <RxCross2 className="ml-3 h-3.5 w-3.5" />
                        </button>
                      ))}
                    </div>
                  </form>




                  {selectedTutorId ? (
                    <TutorProfileDetails
                      tutorId={selectedTutorId}
                    ></TutorProfileDetails>
                  ) : (
                    A &&
                    A.map((findTutorProps) => (
                      //console.log(findTutorProps.length)
                      <FindTutors
                        key={findTutorProps.id}
                        findTutorProps={findTutorProps}
                        onViewProfile={handleViewProfile}
                      />
                    ))
                  )}

                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">

                  <div>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">

                      <h5 className="mb-3 p-2 text-base font-semibold text-black text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                        Educational Level
                      </h5>

                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option >Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div>


                        <h3 className="mb-4 font-semibold text-gray-900 ">Identification</h3>


                        {/* 
                      {ButtonData.slice(0, showCount).map((subject) => (
                        <div key={subject.id} className="flex items-center mb-4">
                          <input
                            id={`default-radio-${subject.id}`}
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`default-radio-${subject.id}`}
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
                      )} */}

                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div key={subject.id} className="flex items-center mb-4">
                            <input
                              id={`default-checkbox-${subject.id}`}
                              type="checkbox"
                              checked={selectedSubjects.includes(subject.id)}
                              onChange={() => handleCheckboxChange(subject.id)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            />
                            <label
                              htmlFor={`default-checkbox-${subject.id}`}
                              className="ml-2 text-sm font-medium text-gray-900 "
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

                      <div>
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 ">Min-max range</label>
                        <input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " />
                      </div>


                      <div>
                        <StarRating
                          selectedStars={selectedStars1}
                          setSelectedStars={setSelectedStars1}
                          clearFilter={() => handleClearFilter(setSelectedStars1)}
                        />
                        <StarRating
                          selectedStars={selectedStars2}
                          setSelectedStars={setSelectedStars2}
                          clearFilter={() => handleClearFilter(setSelectedStars2)}
                        />

                      </div>

                      <button
                        onClick={() => {
                          handleClearFilter(setSelectedStars1);
                          handleClearFilter(setSelectedStars2);
                        }}
                        className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2"
                      >
                        Clear Filter
                      </button>


                    </div>



                  </div>
                </div>

              </div>
            </div>


            <section className="">
                <div className="container px-5 py-24 mx-auto">
                    <div className="bg-[#2C6777] py-10 rounded-3xl ">
                        <div className="lg:w-full flex items-center flex-col sm:flex-row text-center lg:text-start md:text-start mx-auto lg:px-10 px-4 ">
                            <div className="lg:w-3/4 md:3/5">
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white ">Create Tutor2u account now</h1>
                                <p className="flex-grow sm:pr-16 text-xl font-medium title-font text-white">Join us and start your journey towards excellence.</p>
                            </div>
                            <div className="lg:w-1/4 md:2/5">
                                <button className="flex-shrink-0 text-[#21515e] font-semibold bg-white border-0 py-2 lg:px-8 md:px-5 px-8  hover:bg-[#5cdcff]  rounded-3xl text-lg mt-10 sm:mt-0">Request a Tutor</button>

                            </div>

                        </div>

                    </div>
                    

                </div>

            </section>
          </div>
        </div>
      </section>

      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default FindTutor;