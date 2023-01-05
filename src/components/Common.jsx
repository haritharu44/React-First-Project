import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/Common.scss'
import web from '../assets/Home.png'

export default function Common(props) {
  return (
    <>
    <div className="container h6 lh-lg d-flex justify-content-center align-items-center align-content-center" style={{height:'87vh'}} >
      <div className="row">
        <div className="container order-2 order-lg-1 col-md-6 d-flex flex-column justify-content-center mt-4">
        <h2 className='fs-3 col-md-6 col-10'>
          {props.name} <strong className=' text-info fs-3'>Harsh Technical</strong>
        </h2>
        <p className=' text-secondary fs-6 mt-2'>We are team of talented developer making websites</p>
        <NavLink className="text-decoration-none btn btn-outline-info fs-6" to={props.visit}>{props.button}</NavLink>
        </div>
        <div className="container col-lg-6 order-lg-2 order-1">
          <img src={web} className='img-fluid animated' alt="" />
        </div>
      </div>

    </div>
    </>
  )
}