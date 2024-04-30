import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect=()=>{
  return(
    <>
   <SliderComponent min={10} max={60} defaultValue={3} step={5} onChange={(e,value)=>console.log(value)} />
   {/* <SliderComponent min={20} max={50} defaultValue={25} />
   <SliderComponent min={30} max={80} defaultValue={30} /> */}
   </>
  )
}
export default SliderSelect;