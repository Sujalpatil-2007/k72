import React from 'react'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Video from '../components/home/Video'

const Home = () => {
  return (
    <div className=''>
        <div className="h-screen w-screen object-cover fixed">
            <Video/>
        </div>
        <div className="h-screen w-screen justify-between overflow-hidden relative flex flex-col">
            <HomeHeroText/>
            <div className=" flex justify-end pr-5 ">
              <p className='lg:w-1/5 w-[75vw] lg:mt-8 -mt-5  font-sm leading-tight '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
              </p>
            </div>
            <HomeBottomText/> 
        </div>
    </div>
  )
}

export default Home
