import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getHistory } from '../services/allAPI'
function Watchhistory(displayData) {
    const [history,setHistory]=useState([])
    const getAllwatchHistory =async()=>{
        const {data} =await getHistory()
       setHistory(data);
    }
    useEffect(()=>{
        getAllwatchHistory()
    },[])
    console.log(history);
    const handleDeleteHistory=async(id)=>{
        //make apicall
        await deleteAHistory(id)
        //get all history
        getAllwatchHistory()
    }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3> Watch History</h3>
        <Link to='/home' className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px'}}>
        <i class="fa-sharp fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home
        </Link>
    </div>
    <table className='table mt-5 mb-5 container border'>
        <thead>
            <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
           history?.length>0? 
           history.map((item,index)=>(
           <tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td> <a href={item?.embedlink} target='_blank'>{item?.embedlink}</a>
                </td>
                <td>{item?.timeStamp}</td>
                <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i  className='fa-solid text-danger fa-trash'></i></button></td>
            </tr>)):<p>nothing to display!!!</p>
}
        </tbody>
    </table>
    </>
  )
}

export default Watchhistory