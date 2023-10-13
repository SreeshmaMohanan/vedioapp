import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideos } from '../services/allAPI'
import { useEffect, useState } from 'react'
function View({uploadVideoServerResponse}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)
  const getAllUploadedVideos = async ()=>{
    const {data} =await getAllVideos()
    setAllVideos(data)

  }
  useEffect(()=>{
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);

  return (
    <Row>
     {
      allVideos?.length>0?allVideos?.map(video=>(<Col sm={12} lg={3} md={4} xl={3} >
       
        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        
     </Col>)):<p className='fw-bolder mt-3 fs-5 text-danger'>nothing to display!!!</p>}
    </Row>
  )
}

export default View
