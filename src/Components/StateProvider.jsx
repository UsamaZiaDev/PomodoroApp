import React, { createContext, useEffect, useState } from 'react'

export const StateContext = createContext()

const StateProvider = ({children}) => { 

    const [timeObj, setTimeObj] = useState({
        workTime:30,
        shortBreakTime:5,
        longBreakTime:60
    })

    const [workTime, setWorkTime] = useState(timeObj.workTime * 60)
    const [shortBreakTime, setShortBreakTime] = useState(timeObj.shortBreakTime * 60)
    const [longBreakTime, setlongBreakTime] = useState(timeObj.longBreakTime * 60)

    const [intialTime, setInitialTime] = useState(0)

    const [activeTag, setActiveTag] = useState(0)
    const [progress,  setProgress] = useState(90)
    const [active, setActive]=useState(false)
    const [time, setTime] = useState(110)

    const [color, setColor] = useState()

    useEffect(()=>{
        switch(activeTag){
            case 0:
                setTime(workTime)
                setInitialTime(workTime)
                setActive(false)
                setColor("#3B8C6E")
                setWorkTime(timeObj.workTime * 60)
                break;
            case 1:
                setTime(shortBreakTime)
                setInitialTime(shortBreakTime)
                setActive(false)
                setColor("#FF2E63")
                setShortBreakTime(timeObj.shortBreakTime * 60)
                break;
            case 2:
                setTime(longBreakTime)
                setInitialTime(longBreakTime)
                setActive(false) 
                setColor("#E48A29")
                setlongBreakTime(timeObj.longBreakTime * 60)
                break 
            default:   
            break;
    
        }
    },[workTime, shortBreakTime, longBreakTime, intialTime, activeTag, timeObj,setTimeObj])

    
    return <StateContext.Provider 
                    value={{
                            progress,  setProgress,
                            activeTag, setActiveTag,
                            time, setTime,
                            active, setActive, intialTime,setInitialTime,
                            workTime, setWorkTime,
                            shortBreakTime, setShortBreakTime,
                            longBreakTime, setlongBreakTime,
                            color, timeObj, setTimeObj
                    }}>
               
               {children}
            </StateContext.Provider>
}

export default StateProvider