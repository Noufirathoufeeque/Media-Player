import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard'

function Category({deleteVideoCategoryResponse,setRemoveCategoryVideoResponse}) {
  const[allCategories,setAllCategories] = useState([])

  const[categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);
  console.log(allCategories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 useEffect(()=>{
  getAllCategory()
 },[deleteVideoCategoryResponse])

  const getAllCategory = async ()=>{
  try{
  const result = await getCategoryAPI()
  setAllCategories(result.data)
  }catch(err){
   console.log(err);
  }
  }
  const handleAddCategory = async ()=>{
    if(categoryName){
      //api call
      try{
        await addCategoryAPI({categoryName,allVideos:[]})
        setCategoryName("")
        handleClose()
        getAllCategory()
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("please fill the form completely!!!")
    }
  }
  const handleRemoveCategory = async(CategoryId)=>{
    try{
      await removeCategoryAPI(CategoryId)
      getAllCategory()
    }catch(err){
      console.log(err);
    }
  }
  const dragOverCategory = (e) =>{
    e.preventDefault()
    console.log("Dragging over category");
  }
  const videoDropped = async (e,CategoryId)=>{
    const videoID = e.dataTransfer.getData("videoID") 
    console.log(`Video id:${videoID} dropped in category id: ${CategoryId}` );
    try{
      const {data} = await getAVideoAPI(videoID)
      console.log(data);
      let selectedCtegory = allCategories?.find(item=>item.id==CategoryId)
      selectedCtegory.allVideos.push(data)
      console.log(selectedCtegory);
      await updateCategoryAPI(CategoryId,selectedCtegory)
      const result = await removeVideoAPI(videoID)
      setRemoveCategoryVideoResponse(result)
      getAllCategory()
    }catch(err){
      console.log(err);
    }
  }
  const videoDragStarted = (e,videoDetails,CategoryId)=>{
    console.log(videoDetails,CategoryId);
    console.log("Video drag started from category");
    let dataShare = {CategoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  return (
    <>
    <div className="d-flex justify-content-around">
      <h3>All Categories</h3>
      <button onClick={handleShow} style={{width:'50px',height:'50px'}} className='btn btn-info rounded-circle fw-bolder fs-5'>+</button>
    </div>
    <div className='container-fluid mt-3'>
      {
        allCategories.length>0?
        allCategories?.map(item=>(
          <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} key={item?.id} className='border rounded p-3 mb-2'>
            <div className='d-flex justify-content-between'>
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

            </div>
            <div className='row mt-2'>
              {
                item.allVideos?.length>0 &&
                item.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className='col-lg-6'>
                    <VideoCard displaydata={video} insideCategory={true}/>

                  </div>
                ))
              }

            </div>

          </div>
        ))
        :
        <div className='text-danger fw-bolder'>
          No categories are added yet !!!
        </div>
      }

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Category