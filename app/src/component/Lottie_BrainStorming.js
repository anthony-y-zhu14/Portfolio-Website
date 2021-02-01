
import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../asset/VirtualMeeting.json'

export default function Lottie_VirtualMeeting() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return( 
      <Lottie options={defaultOptions}  height={250}   width={250} />
    )
}