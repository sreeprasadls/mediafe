import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoApi } from '../services/allApi';

function Addvideo({addres}) {
const [show, setShow] = useState(false);
const[video,setVideo]=useState({
    title:"",videourl:"",image:""
})

 const handleAdd = async () => {
    const { title, videourl, image } = video
    if (!title || !videourl || !image) {
      toast.warning("enter valid inputs");
    } 
    else {
      
      //console.log(video);
      const charset=videourl.split("v=")
      setVideo({...video,})
      console.log(video)
      const result=await addVideoApi({title,image,videourl:`https://www.youtube.com/embed/${charset[1]}?si=1EaM9EfeiYixTLc1`})
      console.log(result)
      if(result.status==201){
        toast.success("video uploaded successfully")
        setVideo({title:"",videourl:"",image:""})
        handleClose()
        addres(result)
      }
      else{
        toast.error("uploading failed")
        console.log(result)
      }

    }
}


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <button className='btn btn-success' onClick={handleShow}>
                <i class="fa-solid fa-plus"></i>
            </button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='my-2'>
                        <div className='mb-3'> <input type="text" placeholder='enter vidoe title'  onChange={(e) => {
                        setVideo({ ...video, title: e.target.value });
                      }} className='form-control'/> </div>
                        <div className='mb-3'>   <input type="text" placeholder='enter vidoe url'  onChange={(e) => {
                        setVideo({ ...video, videourl: e.target.value });
                      }} className='form-control'/> </div>
                        <div className='mb-3'> <input type="text" placeholder='enter image url'   onChange={(e) => {
                        setVideo({ ...video, image: e.target.value });
                      }}className='form-control'/> </div>
                    </div>
                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>upload</Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default Addvideo