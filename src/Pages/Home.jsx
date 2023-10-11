import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>
    <div className="container mt-5 d-flex align-items-center justify-content-between">
      <div className='add'>
      <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'black'}} className="fs-5">
        Watch History
      </Link>

    </div>
    <Row className='container-fluid  jusify-content-between'>
      <Col lg={8} className="all-videos  p-3 m-3">
        <h3>All Videos</h3>
        <div className='videos'>
        <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
       
      </Col>
      <Col lg={3} className='category ms-5'>
      <Category/>
      </Col>
    </Row>

     
    </>
  )
}


export default Home