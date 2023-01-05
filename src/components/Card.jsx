import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card(props) {

  return (
    <>
    <div className="col-10 col-md-4 mx-auto" >
      <div className="card">
  <img src={props.img} className="card-img-top" style={{height:"250px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-outline-primary"><NavLink to="#" className="text-decoration-none">Check Now</NavLink></button>
  </div>
  </div>
</div>
    </>
  )
}
