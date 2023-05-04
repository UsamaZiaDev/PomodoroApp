import { useContext } from "react"
import { StateContext } from "./StateProvider"

const Nav = () => {

    const {activeTag, setActiveTag, color} = useContext(StateContext)

    const handleTagActive =(index)=>{
        setActiveTag(index)
    }

  return (
    <>
        <ul className=" title-list">
            { ["Work", "Short break", "Long Break"].map((title,index)=>
                <li 
                    key={index}
                    className="fw-bold text-capitalize"
                    style={{background: activeTag == index && color }}
                    onClick={()=>handleTagActive(index)}
                >
                    {title}
                </li>
            )
            }
        </ul>
    </>
  )
}

export default Nav