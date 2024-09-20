import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <h1 className={`${props.color} ${props.center} ${props.size}`}>
{props.info}
  </h1>
    </div>
  )
}
