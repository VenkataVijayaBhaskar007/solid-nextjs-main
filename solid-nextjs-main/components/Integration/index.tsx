"use client";
import { motion } from "framer-motion"; 
import "./style.css"
const Gallery = () => {
  
  return (
  <section>
  

{/*gallery section starts*/}
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
<div className="flex flex-wrap  mb-10 ">

                    <div className="w-full lg:w-12/12 px-10">
                     {/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-4">
                Atoms Gallery
              </h4> */}
    
                    </div>
                </div>
                </motion.div>
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
<div className="gridywrap grid grid-cols-2 md:grid-cols-4 gap-4 px-10 ">
<div className="grid gap-4">
<div className="relative">
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610854/5.png" alt="" />
  <div className="gradient-overlay "></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>

<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/3.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>

</div>

    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/4.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610854/3.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
        
    </div>
    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610850/7.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
        
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/6.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
    </div>
    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610422/2.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
    <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/6101024/3.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Atoms</h3>
    <p>Description of Atoms.</p>
  </div>
</div>
    </div>
</div>
</motion.div>
{/* gallery section end */}
</section>
);
};

export default Gallery;