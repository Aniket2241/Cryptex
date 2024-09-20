import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
export default function Button(props) {
  return (
    <div>
      <button className={`${props.background} ${props.color}`}>{props.title} </button>
    </div>
  )
}
