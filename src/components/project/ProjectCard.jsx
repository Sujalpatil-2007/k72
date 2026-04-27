import React from "react";

const ProjectCard = (props) => {
  return (
<div className='w-full  h-300px mb-3 flex lg:gap-3 gap-1 '>
    <div className="lg:w-1/2 group relative transition-all hover:rounded-4xl overflow-hidden h-fll">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt=""
        />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex justify-center items-center left-0 h-full w-full bg-black/10 ">
          <h2 className=" uppercase text-5xl px-3 pt-2 font-[font1] border-2 text-white border-white rounded-full ">
            Vior le Projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group relative transition-all hover:rounded-4xl overflow-hidden h-fll">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt=""
        />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex justify-center items-center left-0 h-full w-full bg-black/10 ">
          <h2 className=" uppercase text-5xl px-3 pt-2 font-[font1] border-2 text-white border-white rounded-full ">
            Vior le Projet
          </h2>
        </div>
      </div>
</div>
  );
};

export default ProjectCard;
