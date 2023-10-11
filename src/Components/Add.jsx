import React from 'react'
import { useState } from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({setUploadVideoServerResponse}) {
  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedlink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractUrl =(e)=>{
    
    const {value}=e.target
    if(value){
    const embedData=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedlink:embedData})
    }else{
     setVideo({id:"",caption:"",url:"",embedlink:""})
    }

  }
  
const handleUpload = async()=>{
  const {id,caption,url,embedlink} = video
  //if video is empty or not
  if(!id || !caption || !url || !embedlink){
     toast.warning("All fields are required")
  }else{
   
    const response = await uploadVideo(video)
    console.log(response);
    
    if(response.status>=200 && response.status<300){
      toast.success(`"${response.data.caption}"uploaded successfully`)
      
      //set server response
      setUploadVideoServerResponse(response.data)

      //hide modal
      handleClose()
    }else{
      toast.error('Error in Uploading Video..Please wait some time !!!')
    }
    
  }

  
}
console.log(video);
  return (
    <p>
      <div className='d-flex align-items-center ms-5'>
        <h5>Upload New Video</h5>
        <button className='btn' onClick={handleShow}><i className='fa-solid fa-circle-plus fs-5'></i></button>
  
      </div>
      <Modal
       show={show} 
       onHide={handleClose}
        backdrop="static"
        keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>please fill the following details</p>
        <Form className='border border-secondary p-3 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
       
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link " onChange={extractUrl} />
        
      </Form.Group>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button  variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={2000}
    />
    </p>
  )
}

export default Add