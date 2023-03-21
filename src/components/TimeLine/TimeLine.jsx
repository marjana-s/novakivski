import React, { useEffect, useState } from 'react'
import './TimeLine.css'
function TimeLine() {
  const [active,setActicve] = useState(false)
  
  useEffect(()=>{
    const timeShow = () =>{
    if(window.scrollY >= 1000){
      setActicve(true)
    }
    else {
      setActicve(false)
    }
  }
    window.addEventListener("scroll", timeShow);
    return () => {
    window.removeEventListener("scroll", timeShow);
};
  },[])
  return (
    <div>
        <div className={active ? "time_act" : "time_act_hide" }>

        
          <div className="timeline" >
            <div className="periods">
              <div className="hover-underline-animation"><p className='period period-1'>  1872 - 1899</p></div>
              <div className='hover-underline-animation'> <p className='period period-2'> 1900-1902</p></div>
              <div className='hover-underline-animation'><p className='period period-3'> 1903-1913</p></div>
              <div className='hover-underline-animation'><p className='period period-4'>1923 - 1934</p></div>
              <div className='hover-underline-animation'><p className='period period-5'>1935 - 2016</p></div>
            </div>
          </div>
        </div>
        <div style={{height:2000}}></div>

    </div>
  )
}

export default TimeLine