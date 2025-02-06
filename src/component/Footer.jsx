import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<>
<div className='container-fluid bg-secondary p-3 text light'>
<Row>
    <Col lg={5}>
    <h1>Media player 2025</h1>
    <p style={{textAlign:'justify'}}>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum mollitia similique aut, 
        labore nulla voluptatum doloremque culpa aliquid? Neque facilis minima dolor sequi deleniti! Voluptatem quia labore impedit in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facilis cumque quaerat asperiores, explicabo est amet nihil laboriosam sequi necessitatibus fugit,
         labore ab mollitia odio tempore temporibus corrupti illo dolore!
    </p>
    </Col>
    <Col lg={2}>
    <h1>Links</h1>
    <p><Link className='text light' to={'/'}>Landing</Link></p>
    <p><Link className='text light' to={'/log'}>Login</Link></p>
    <p><Link className='text light' to={'/reg'}>Register</Link></p>
    </Col>
    <Col lg={5}>
    <h1>Feedback</h1>
    <textarea name=""  placeholder='enter feedback'  id="" className='form-control'></textarea>
    <button className='btn btn-succes mt-3'>send</button></Col>

    

</Row>

<h2 className='text-center'> media player 2025 &copy; copyrights owned</h2>

</div>
</>
)
}

export default Footer