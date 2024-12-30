import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);

  useEffect(() => {
    keenSliderInstance.current = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    return () => keenSliderInstance.current.destroy(); 
  }, []);

  const prevSlide = () => {
    keenSliderInstance.current.prev();
  };

  const nextSlide = () => {
    keenSliderInstance.current.next();
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto  px-4 py-6 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-16">

          <div className=" text-center ltr:sm:text-left rtl:sm:text- border-2 shadow-md m-4 w-[550px] h-[270px] bg-light_gray">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rave Reviews from Our <br /> <span className="mr-28 mt-4">Satisfied Guests</span> 
            </h2>
           

            <div className="hidden lg:mt-8 lg:flex lg:gap-4 mx-36 mb-8">
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {/* Testimonial Slide 1 */}
              <div className="keen-slider__slide ml-28">
                <blockquote className="flex flex-col justify-between bg-white p-6 shadow-xl sm:p-8 lg:p-12 w-[400px] h-full rounded-lg bg-gray-50">
                  <div className="flex">
                  <img
                      src='tesmonial2.png'
                      
                      className="w-12 h-12 rounded-full mr-4"
                    />
                   

                     <div className=" ">
                      <h3 className="font-semibold text-base sm:text-lg ">
                        Arman
                      </h3>
                      <p className="text-xs sm:text-sm text-light_gray  font-thin ">
                        Web
                      </p>
                    </div>
                   
                    
                  </div>
                  <div className="text-sm">
                    Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.
                    </div>
                    <div className="flex gap-0.5 mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="size-5" fill="orange" viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                 
                </blockquote>
              </div>

              {/* Testimonial Slide 2 */}
              <div className="keen-slider__slide mr-28">
                <blockquote className="flex flex-col justify-between bg-white p-6 shadow-xl sm:p-8 lg:p-12 w-[400px] h-full rounded-lg bg-gray-50">
                  <div className="flex">
                  <img
                      src='tesmonial2.png'
                      
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    {/* <div className="flex gap-0.5 text-green-500">
                     
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="size-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div> */}

                     <div className=" ">
                      <h3 className="font-semibold text-base sm:text-lg ">
                        Arman
                      </h3>
                      <p className="text-xs sm:text-sm text-light_gray  font-thin ">
                        Web
                      </p>
                    </div>
                   
                    
                  </div>
                  <div className="">
                    Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.
                    </div>
                    <div className="flex gap-0.5 mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="size-5" fill="orange" viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                 
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
