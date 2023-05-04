import { useContext, useState } from "react"
import setting from "./../assest/img/setting.png"
import TimeForm from './TimeForm'
import { StateContext } from "./StateProvider"

const Modal = () => {

  const {color} = useContext(StateContext)

  return (
    <>
      <button type="button" 
        class="mt-4 py-2 ms-4 btn btn-primay" 
        data-bs-toggle="modal" 
        data-bs-target="#myModal"
        style={{background:color}}
      >
        <img src={setting} className="setting-icon"/>
      </button>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header text-dark px-4 py-2">
              <h4 class="modal-title fw-bold">Setting</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body text-dark">  
              <TimeForm />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>            
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal