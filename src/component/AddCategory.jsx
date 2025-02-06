import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addCategoryApi } from "../services/allApi";
import { toast } from "react-toastify";

function Addcategory({added}) {
  const [show, setShow] = useState(false);
  const [category,setCategory]= useState({name:"",videos:[]})

  const addCategory = async () => {
      const { name } = category
      if (!name) {
        toast.warning("enter valid inputs");
      } 
      else {
         const result=await addCategoryApi(category)
        console.log(result)
        if(result.status==201){
          toast.success("category uploaded successfully")
          handleClose();
          added();
          setCategory({name:"",videos:[]})
        }
        else{
          toast.error("uploading failed")
        
        }
  
      }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Add category +
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              placeholder="enter-playlist" onChange={(e)=>{setCategory({...category,name:e.target.value})}}
              className="form-control"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addcategory;
