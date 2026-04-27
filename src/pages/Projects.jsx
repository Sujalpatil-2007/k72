import React from "react";
import ProjectCard from "../components/project/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Projects = () => {

  const projects = [{
    image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  },
  {
    image1:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
  },
  {
    image1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
    image2:'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377'
  },
  {
    image1:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
    image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
  }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'200px',
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 70%',
        end:'top -=500',
        scrub:true
      }
    })
  })

  return (
    <div className=" p-3 text-black ">
      <div className="pt-[45vh]  ">
        <h2 className="font-[font2]  text-[11.5vw] uppercase ">Projects</h2>
      </div>

      <div className=" lg:-mt-17 -mt-3 lol  ">
        {projects.map(function(elem, idx) {
          return <div key={idx} className=' hero w-full h-[35vw] mb-3 flex lg:flex-row flex-col lg:gap-3 gap-0 '> 
          < ProjectCard  image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
