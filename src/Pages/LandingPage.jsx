import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
const navigateByUrl=useNavigate()
const navigate = () => {
  navigateByUrl('/home')
}
  return (
    <>
    <Row className='mt-5 mb-5 w-100 align-items-center justify-content-between'>
      <Col lg={4} className='ms-5'>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur quaerat similique tenetur accusantium nam perspiciatis laudantium recusandae deserunt veritatis non impedit porro, officiis consequuntur minima inventore voluptatem ab iure.
        Rerum, aspernatur aut quae magnam esse excepturi quidem, iste consequatur qui, magni accusamus! Esse, possimus ullam dicta neque suscipit beatae, quo expedita modi, harum labore enim? Tenetur exercitationem aliquid esse.</p>
        <p><b>A simple media player made with react js.</b></p>
        <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'> Get Started </button>
      </Col>
      <Col lg={6}>
        <img className='img-fluid m-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
    </Row>
    <div className="container mt-5 mb-5 p-5 d-flex flex-column w-100 align-items-center justify-content-center border">
      <h3>Features</h3>
      <div className="cards mt-5 d-flex w-100 align-items-center justify-content-between">
      <Card className='p-3' style={{ width: '22rem' ,height:'500px'}}>
      <Card.Img variant="top" src="https://64.media.tumblr.com/036fdde96e06aaa09bbc014027a1a639/tumblr_o70myhBdLh1s2hovgo1_400.gif" />
      <Card.Body>
        <Card.Title>Managing Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' ,height:'500px' }}>
      <Card.Img variant="top" src="https://media.tenor.com/xVny0Q4om1MAAAAC/circles-colors.gif" />
      <Card.Body>
        <Card.Title>Categories Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' ,height:'500px' }}>
      <Card.Img variant="top" src="https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         </Card.Body>
    </Card>
      </div>
    </div>
    <div className="container mt-5 mb-5 justify-content-center d-flex w-100 border p-5 rounded">
      <div className='content m-5 p-5 w-50'>
        <h3 className='m-1'>Simple, Fast and Powerful</h3>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio assumenda tempora mollitia tempore veritatis fugiat blanditiis nostrum corrupti incidunt nulla, nesciunt nihil, rerum ut voluptatum. Cum eos quam accusamus!</h6><br />
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, accusantium ab, suscipit quae eaque officiis praesentium voluptas dolorem harum cupiditate atque! Voluptas, quia. Facere tenetur veniam, voluptatum libero ut voluptatem.</h6>
      </div>
      <div className='vedio m-5 p-3'>
      <iframe width="500" height="350" src="https://www.youtube.com/embed/-YaUDfmRRwk" title="Feel Good Malayalam Love Songs | Selected New Malayalam Songs | Malayalam Romantic Songs #song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>


    </>
  )
}

export default LandingPage