import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {useRef} from "react";
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
    
    const currentPath = useLocation().pathname


    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
      

  function mainStair () {
    const tl = gsap.timeline();

    tl.set(stairParentRef.current,{display:'block'});

    tl.to('.stair',{
      height:'100%',
      stagger:{
        amount:-0.3
      }
    })
    tl.to('.stair',{
      height:'0%',
      stagger:{
        amount:0.2
      }
    })
    tl.set(stairParentRef.current,{display:'none'})

    gsap.from(pageRef.current,{
        opacity:0,
        delay:1,
        scale:1.25
    })

  }
  useGSAP(function(){
    mainStair()
  },[currentPath])
  
  return (
<div>
    <div ref={stairParentRef} className="h-screen flex w-full fixed z-1 top-0">
        <div className='h-full flex w-full  '>
          <div className=' stair h-0 w-1/5 bg-black'></div>
          <div className=' stair h-0 w-1/5 bg-black'></div>
          <div className=' stair h-0 w-1/5 bg-black'></div>
          <div className=' stair h-0 w-1/5 bg-black'></div>
          <div className=' stair h-0 w-1/5 bg-black'></div>
        </div>
    </div>
    <div ref={pageRef} >
        {props.children}
    </div>
</div>
  )
}

export default Stairs
