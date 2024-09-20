import React from 'react'
import { lineSpinner } from 'ldrs'


export default function Loader() {
 lineSpinner.register()
  return (

    // Default values shown
    <l-line-spinner
      size="100"
      stroke="4"
      speed="1" 
      color="white" 
    ></l-line-spinner>
  )
}
