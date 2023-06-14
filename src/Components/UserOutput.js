import React from 'react'

function UserOutput(props) {
  return (
    <div className='output'>
        <p>My name is {props.user} I am a SAIL participant</p>
    </div>
  )
}

export default UserOutput