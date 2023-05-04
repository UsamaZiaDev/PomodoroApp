import React, { useContext, useEffect } from 'react'
import Nav from './Components/Nav'
import { StateContext } from './Components/StateProvider'
import TimeModal from "./Components/TimeModal"

const App = () => {

  const { progress, setProgress,
         time, setTime, 
         active, setActive,
         intialTime,color
        } =      useContext(StateContext)

        console.log("useContext(StateContext)__", useContext(StateContext))

  const activeColor = active ? "#B54807" : color


 
  useEffect(()=>{

    if(active && time > 0){
      const interval = setInterval(()=>{
          return setTime(time - 1)
      }, 1000)
      return ()=> clearInterval(interval) 
    }
  }, [time, active])


  const getTime=(time)=>{
    
    const min = Math.floor( time / 60 )
    const sec = time % 60
    const fullTime = `${ min < 10 ? "0"+min : min }:${sec < 10 ? "0"+sec : sec}`
    return fullTime
  }
  
  const resetTime =()=>{
    setTime(intialTime)
    setActive(false)
  }

  useEffect(()=>{
    setProgress(time / ( intialTime / 100))
  },[setProgress, time, progress])
  return (
    <div className='py-5'>

      <h2 className="display-3 text-center fw-bold mb-5">
        Pomodoro 
      </h2>

      <Nav/>

      <div className="time-circle">
        <div className="outer">
          <div className="iner"
            style={{background: `conic-gradient(${color} ${progress ? progress : 100}%, transparent ${progress ? progress : 100}%)`}}
          >
            <div className="con-circle">
              <h3 className="display-2 fw-bold">
                { getTime(time) }
              </h3>
              <p 
                className="fw-bold fs-3 text-uppercase mb-0"
                style={{color:activeColor}}
                onClick={()=>setActive(!active)}
              >
                { active ? "Pause": "Active"}
              </p>
              <p 
                className="fw-bold fs-3 text-uppercase"
                onClick={resetTime}
              >
                {time == 0 && "Reset"}
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Setting-Time-Modal */}
      <TimeModal/>

    </div>

  )
}

export default App