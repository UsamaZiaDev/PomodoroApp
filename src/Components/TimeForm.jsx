import React, { useContext } from 'react'
import { useState } from 'react'
import { StateContext } from './StateProvider'

const TimeForm = ({setActiveModal}) => {

  const [workTime, setWorkTime]=useState()
  const [shortBreakTime, setShortBreakTime]=useState()
  const [longBreakTime, setLongBreakTime]=useState()

  const {setTimeObj} = useContext(StateContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setTimeObj({
        workTime:workTime ? +workTime: 60,
        shortBreakTime:shortBreakTime? +shortBreakTime: 5,
        longBreakTime:longBreakTime ? +longBreakTime: 30
    })
    setActiveModal(true)
  }

  return (
    <>
        <form className='mb-3 px-4' onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <input type="number" 
              className="form-control mb-3" 
              placeholder="Work Time"
              name="workTime"
              onChange={ e =>setWorkTime(e.target.value)}
            />
            <input type="number" 
              className="form-control mb-3" 
              placeholder="Short Break Time"
              name="shortBreak"
              onChange={ e => setShortBreakTime(e.target.value)}  
            />
            <input type="number" 
              className="form-control mb-3" 
              placeholder="Long Break Time"
              name="longBreak"
              onChange={ e => setLongBreakTime(e.target.value)}
            />
          </div>
          <button type="submit" class="w-100 btn btn-dark">
            Save
          </button>
        </form>
    </>
  )
}

export default TimeForm