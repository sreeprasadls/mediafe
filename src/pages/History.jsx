import React from "react";
import { useState , useEffect } from "react";
import { getHistoryApi ,deleteHistoryApi} from "../services/allApi";

function History() {
  const [history, setHistory] = useState([]);
  const [delHistory,setDelHistory]=useState("")


   useEffect(() => {
      getdata();
    }, [delHistory]);

const getdata = async () => {
    const result = await getHistoryApi();
    if (result.status == 200) {
      setHistory(result.data);
    }
    else{
      console.log(result);
    }
  }


  const deleteHistoryApi =async(id)=>{
        const result=await deleteHistoryApi(id)
        console.log(result)
        if(result.status==200){
          console.log(result)
          setDelHistory(result)
        }
        else
        {
          console.log(result)
        }

      }

  

  return (
    <>
      <div className="container-fluid">
        <h2>Watch History</h2>
        {
           history.length > 0 ?
        <table className="table table-borderes my-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>IMAGE</th>
              <th>URL</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {history?.map(item=>(
            <tr>
              <td>{item.videoId}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.image} alt="" style={{height:'200px'}}/>
              </td>
              <td>{item.datetime}</td>

<td>
  <button className="btn" onClick={()=>{deleteHistoryApi(item.id)}}><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            ))}
          </tbody>
        </table>
        :
        <h1 className="text-center text-danger">no history added</h1>
          }
      </div>
    </>
   )
}

export default History;
