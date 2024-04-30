import React from 'react'
import {Link} from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import  { Card } from 'react-bootstrap'
import settingsImg from '../assets/settings.gif'
import categoryImg from '../assets/category.png'
import historyImg from '../assets/history.jpg'

function Landing() {
  return (
    <>
    <div className='landingsection container'>
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}>The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.
          Basically, this tool is used to create dummy content on the website when it’s new.The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.
          Basically, this tool is used to create dummy content on the website when it’s new!!!! </p>
          <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className='col-lg-6'>
          <img className='ms-5' src={landingImg} alt="landingImage" />
        </div>

      </div>
      {/*features*/}
      <div className='Featuures my-5'>
        <h3 className='text-center'>Features</h3>
      <div className='row mt-5'>
        <div className='col-lg-4'>
        <Card className='p-2' style={{ width: '20rem' , height:'400px'}}>
          <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={settingsImg} />
          <Card.Body>
           <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
           Users can upload, View and remove the videos
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card className='p-2' style={{ width: '20rem' , height:'400px'}}>
          <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={categoryImg} />
          <Card.Body>
           <Card.Title>Managing Category</Card.Title>
          <Card.Text>
           Users can upload, View and remove the videos
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card className='p-2' style={{ width: '20rem' , height:'400px'}}>
          <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={historyImg} />
          <Card.Body>
           <Card.Title>Managing History</Card.Title>
          <Card.Text>
           Users can upload, View and remove the videos
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
      </div>
      </div>
      {/*footer*/}
      <div className='my-5 row border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque illum deserunt animi incidunt laboriosam velit .
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>Category Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque illum deserunt animi incidunt laboriosam velit .
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque illum deserunt animi incidunt laboriosam velit .
          </p>

        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="391" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing