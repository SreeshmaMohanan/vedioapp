import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal, Form, Button, Row,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';
function Category() {
  const [categoryName, setCategoryName] = useState("")
  const [allCategory,setAllCategory]=useState([])
  const handleAddCategory = async () => {
    if (categoryName) {
      // make api call
      const body = {
        categoryName,allVideos:[]
      }
      const response = await addCategory(body)
      if (response.status >= 200 && response.status < 300) {
        //hide modal
        handleClose()
        setCategoryName("")
        //call handle get category
        handleGetCategory()
      } else {
        toast.warning("Uploading error... Perform the operation after some time")
      }


    } else {
      toast.info("Please provide category name...")

    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleGetCategory =async()=>{
    //make api call
    const {data}=await getCategory()
    setAllCategory(data)

  }
  console.log(allCategory);
 
  const handleDeleteCategory = async (id)=>{
    //make apicall
     deleteCategory(id)
    //call handle all category
    handleGetCategory();

  }
  useEffect(()=>{
    handleGetCategory()
  },[])
  const dragOver=(e)=>{
    // console.log("Dragging over category");
    e.preventDefault();
  }
  const videoDropped= async (e,categoryId)=>{
    // console.log("inside category id:"+categoryId)
    const videoCardId=e.dataTransfer.getData("cardId")
    console.log("videocard id:"+videoCardId);
    //get details of video dropped
    const {data} = await getAVideo(videoCardId)
    // console.log(data);
    //get details category
    const selectedCategory =allCategory.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    //make an apicall
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory();
  }
 
  return (
    <>
      <div className='d-grid'><button onClick={handleShow} className='btn btn-primary m-5 '>Add New Category</button></div>
      {
        allCategory.length>0?allCategory?.map(item=>(
          <div className='border mt-3 mb-3 p-3 rounded'>
            <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDropped(e,item?.id)}>
              <h6>{item?.categoryName}</h6>
              <button onClick={()=>handleDeleteCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
            {
              item?.allVideos &&  
              <Row >
                {
                  item?.allVideos?.map(card=>(
                    <Col sm={4} >
                    <VideoCard displayData={card} insideCategory={true} />
                    </Col>
                  ))
                }
              </Row>
            }
          </div>
        )):<p className='fw-bolder mt-3 fs-5 text-danger'>No catgories are added!!!!</p>
      }
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form className='border border-secondary p-3 rounded'>
            <Form.Label> Enter Category Name: </Form.Label>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />

            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={1000}
    />

    </>
  );
}

export default Category