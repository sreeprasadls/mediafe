import React from 'react'
import Addcategory from './Addcategory'
import { useEffect, useState } from "react";
import { getCategoryListApi, deleteCategoryApi, addVideoToCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
import Videocard from './Videocard';


function CategoryList() {

    const [list, setList] = useState([]);
    
    useEffect(()=>{
      getData();
    },[])


    const dragOverHandler=(e)=>{
      e.preventDefault()
      console.log("dragging over..")
    }

    const dropEventHandler=async (e,cat)=>{
      console.log("dropped...")
     // console.log(e.dataTransfer.getData('video'))
      const video=JSON.parse(e.dataTransfer.getData('video'))
      cat.videos.push(video)
      const result=await addVideoToCategoryApi(cat.id,cat)
      console.log(result)

      if(result.status==200){
        toast.success("video added to category")
        getData()

      }
      else{
        toast.warning("something went wrong...")
      }
    }
  

  const removeList =async(id)=>{
    const result=await deleteCategoryApi(id)
    console.log(result)
    if(result.status==200){
      getData()
    }
    else{
      toast.warning("deletion failed")
    }
  }

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const result = await getCategoryListApi();
      if (result.status == 200) {
        console.log(result.data);
        setList(result.data);
      }
    }

    const handleAddCategory =() =>{
      getData()
    }
   
  return (
  <>
  <div className='w-100'>
    <h3 className='mb-3'>Category List</h3>
    <Addcategory added={handleAddCategory} />
    <div className='d-flex flex-column mt-4 p-2 border border-2 border-dark'>
      {
        
             list.length > 0 ? 
             <>
           
                 {
                  list.map(item => (
                    <div className='w-100 border m-2 shadow p-3 rounded '        onDragOver={(e)=>dragOverHandler(e)} onDrop = {(e)=>dropEventHandler(e,item)} > 
                    <div className='d-flex justify-content-between'>
                    <h4>{item.name}</h4>
                    <button className='btn' onClick={()=>{removeList(item.id)}} >
                      <i class='fa-solid fa-trash text-danger fa-xl' ></i>
                    </button>
                    </div>
                    {
                      item.videos.length>0 &&
                      item.videos.map(vid=>(
                        <Videocard video={vid} cat={true}/>
                      ))
                    }
              
                    
                    </div>
                  ))}
                

</>
              : 
              <div>
                <h3 className='w-100 bordeer m-2 rounded border-danger text-danger'>no catogory added yet</h3>
                </div>
              }
          
    </div>
  </div>
  </>
  )
}

export default CategoryList