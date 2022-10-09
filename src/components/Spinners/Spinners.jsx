import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'

export const Spinners = () => {
  return (
    <>
    {
        <div className='d-flex justify-content-center' >
          <ThreeCircles
            height="100"
            width="100"
            color="rgba(255, 255, 255, 0.1)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
            marginTop= "375"
          />
       
        </div>
    }
    </>
  )
}
