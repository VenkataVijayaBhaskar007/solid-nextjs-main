"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import "./style.css";
import Gallery from "./Gallery"
const About : React.FC = () => {
  useEffect(() => {
    const logosContainer = document.getElementById('logos-container');
    const logosSlide = document.getElementById('logos-slide');

    if (logosContainer && logosSlide) {
      // Clone logos to create a seamless loop
      const originalLogos = logosSlide.innerHTML;
      logosSlide.innerHTML += originalLogos;
     

      // Start the animation
      const handleMouseEnter = () => {
        if (logosSlide.style) {
          logosSlide.style.animationPlayState = 'pause';
        }
      };

      // Pause the animation on hover
      const handleMouseLeave = () => {
        if (logosSlide.style) {
          logosSlide.style.animationPlayState = 'running';
        }
      };

      logosContainer.addEventListener('mouseenter', handleMouseEnter);
      logosContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        // Cleanup event listeners on component unmount
        logosContainer.removeEventListener('mouseenter', handleMouseEnter);
        logosContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []); 

  
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      {/* <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  hie...
                </span>{" "}
               About us
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                This is about
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Atoms  Hospitalityss
                </span>
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div className="gap-3">
              <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-hero">
              our
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    vision
                </span>
              </h2>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Hospitalitys...
                  </h3>
                  <p>Atoms  Hospitalitys....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Hospitalitys
                  </h3>
                  <p>Atoms  Hospitalitys....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Hospitalitys...
                  </h3>
                  <p>Atoms  Hospitalitys....</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      
      <section id="about" className=" container py-2  px-3 lg:py-2 bg-white font-poppins dark:bg-btndark">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -40,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="animate_left"
      >
    <div className="max-w-6xl aboutsec px-4 lg:py-2 ">
        <div className="flex flex-wrap ">
            <div className="w-full  mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="lg:max-w-md">
                    
                {/* <h4  className="font-medium uppercase text-blue-600 dark:text-white px-4">
                About US
              </h4> */}
             <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Group</span>
</h2><div className="px-3">
             
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    
    </p>
                   
    </div>              
                </div>
                
            </div>
            
            <div className=" px-8 mb-10 lg:w-1/2 lg:mb-10 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-3">
      <img
        loading="lazy"
      
        src="./images/about/about-dark-01.png"
        alt=""
        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 38vw, (max-width: 1279px) 31vw, (max-width: 1439px) 30vw, (max-width: 1919px) 29vw, 23vw"
      />
    </div>
           
            </div>
        </div>
    </div>
    </motion.div>
</section>


<section className=""> 
    <div className="mx-auto max-w-c-1235 py-2 overflow-hidden px-6 md:px-8 2xl:px-0 vision-top" >
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div>
            <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="animate_left"
      >
              <div className="px-3">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Vision
                
              </h2>
              </div>
              </motion.div>
              <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -40,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="animate_left"
      >
              <div className="mt-7.5 flex items-center gap-5">
              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black hover:text-white dark:text-white">
                    Holistic Learning Approach
                  </h3>
                  <p>Atoms Education is committed to adopting a holistic learning approach that goes beyond traditional academic boundaries. </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    atoms software solutions
                  </h3>
                  <p>Atoms Education is committed to adopting a holistic learning approach that goes beyond traditional academic boundaries. </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    atoms group...
                  </h3>
                  <p>Atoms Education is committed to adopting a holistic learning approach that goes beyond traditional academic boundaries. </p>
                </div>
               </div>
               </motion.div>
              </div>
              </div>
              </div>
              </section>












































      {/* <!-- ===== About Two End ===== --> */}
      <section id="companies" className=" container py-10  px-3  bg-white font-poppins dark:bg-black">
    <div className="max-auto aboutsec px-4 ">
        <div className="flex flex-wrap ">
        <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="animate_left"
      >














    
{/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-4">
                Our Branches
              </h4> */}
             <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Branches</span>
</h2><div className="px-3">
             
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
    </div>
  </motion.div>
  </div>
  </div>
</section>
<section className="container mx-auto my-10">
  
    {/* First Card */}
    <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      ><div className="flex flex-wrap justify-center">
    <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://via.placeholder.com/350x200"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75"></div>
      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Education</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to ...
        </p>
        <a
          href="#"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </div>
    
   {/* 2 Card */}
   <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://via.placeholder.com/350x200"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75"></div>
      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Digital Solutions</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms Group is committed to providing affordable and impressive Group services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="#"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </div>
     {/* 3 Card */}
     <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://via.placeholder.com/350x200"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75"></div>
      </div>
      <div className="p-6 relative z-10">
        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms 2.0</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms Group is committed to providing affordable and impressive Group services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="#"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>


      </div>
    </div>


  </div>
  </motion.div>
</section>

<section id="companies" className=" container py-10  px-3  bg-white font-poppins dark:bg-black">
    <div className="max-auto aboutsec px-4 ">
        <div className="flex flex-wrap ">
        <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="animate_left"
      >














    
{/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-4">
                Our Branches
              </h4> */}
             <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Gallery</span>
</h2><div className="px-3">
             
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
    </div>
  </motion.div>
  </div>
  </div>
</section>

<Gallery/>





























{/*teams section starts*/}



<section id="companies" className=" container text-center py-10 px-auto  bg-white font-poppins dark:bg-black">
    <div className="max-auto aboutsec px-4 ">
        <div className="flex flex-wrap ">
        <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="animate_left"
      >














    
{/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-4">
                Our Branches
              </h4> */}
             <h2 className="text-with-circle background-circle mb-1 text2xl  font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' , marginRight:"6rem"}}>
  <span className="text-content" >Our team</span>
</h2><div className="px-3">
             
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
    </div>
  </motion.div>
  </div>
  </div>
</section>



{/* teams section end */}




<section className="flex flex-wrap justify-center items-center "> 
   
        {/* Card 1 */}
      <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/17.png"
              alt=""
            />
             <div className="hide">
            <h3>Ayyappa Siginam</h3>
            <p>Chairman & Director</p></div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Ayyappa Siginam</h3>
            <p>Chairman & Director</p> 
            {/* Social links for Card 1 */}
          <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 2 */}
   <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/18.png"
              alt=""
            />
                      <div className="hide">
            <h3>Naga Sai Sravanth Singamsetty</h3>
            <p>CEO & Director</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Naga Sai Sravanth Singamsetty</h3>
            <p>CEO & Director</p> 
            {/* Social links for Card 1 */}
        <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 3 */}
       <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/19.png"
              alt=""
            />
            <div className="hide">
            <h3>Shaik Khajipur Azaruddin</h3>
            <p>COO & Director</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Shaik Khajipur Azaruddin</h3>
            <p>COO & Director</p> 
            {/* Social links for Card 1 */}
           <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 4 */}
        <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/5.png"
              alt=""
            />
             <div className="hide">
            <h3>Prudhvi Pachipulusu</h3>
            <p>Director</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Prudhvi Pachipulusu</h3>
            <p>Director</p> 
            {/* Social links for Card 1 */}
         <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 
        {/*bottom section */}
        {/*card 5 */}
       <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/6.png"
              alt=""
            />
             <div className="hide" style={{whiteSpace:"nowrap"}}>
            <h3>Tirumala Sai Ganesh Babu Battula</h3>
            <p>Director & Lead of Acumen Club</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Tirumala Sai Ganesh Babu Battula</h3>
            <p>Director & Lead of Acumen Club</p> 
            {/* Social links for Card 1 */}
            <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>
         {/*card 6 */}
          <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/22.png"
              alt=""
            />
             <div className="hide" style={{whiteSpace:"nowrap"}}>
            <h3>Sravan Kumar Reddy Nune
            </h3>
            <p>Director & Lead of Engineer's Scoops</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Sravan Kumar Reddy Nune
            </h3>
            <p>Director & Lead of Engineer's Scoops</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>
         {/*card 7 */}
          <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/8.png"
              alt=""
            />
              <div className="hide">
            <h3>Durga Prasad Goli</h3>
            <p>Director & Lead of Visual Media</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Durga Prasad Goli</h3>
            <p>Director & Lead of Visual Media</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0 ">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 
         {/*card 8 */}
         <div className="profile-card mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/9.png"
              alt=""
             
            />
            <div className="hide" style={{whiteSpace:"nowrap"}}>
             <h3>Naga Sai Durgesh Singamsetty</h3>
            <p>Director & Digital Marketing Associate</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-18">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Naga Sai Durgesh Singamsetty</h3>
            <p>Director & Digital Marketing Associate</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>

    </section>  
    
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
           



       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>







 








    </>
  );
};

export default About;
