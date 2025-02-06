import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Addvideo from "../component/Addvideo";
import Videocard from "../component/Videocard";
import CategoryList from "../component/CategoryList";
import { Link } from "react-router-dom";
import { getVideoListApi } from "../services/allApi";


function Dashboard() {
  const [video, setVideo] = useState([]);
  const [addResponse,setAddResponse]=useState()
  const [delResponse,setDelResponse]=useState("")

  useEffect(() => {
    getdata();
  }, [addResponse,delResponse]);

  const getdata = async () => {
    const result = await getVideoListApi();
    if (result.status == 200) {
      console.log(result.data);
      setVideo(result.data);
    }
  }
  return (
    <>
      <div style={{ backgroundColor: "" }} className="">
        <div className="container-fluid my-5">
          <div className="d-flex justify-content-between">
            <h2>All Videos</h2>
            <Link to={"/his"}>Watch Histroy</Link>
            <Link className="btn btn-danger" to={'/log'}>logout</Link>
          </div>
          <Row>
            <Col lg={1}>
              <Addvideo addres={setAddResponse} />
            </Col>
            <Col lg={7}>
            {
              video.length > 0 ? 
                <div className="d-flex justify-content-even flex-wrap border border-2 p-2">
                  {
                  video.map(item => (
                    <Videocard video={item} del={setDelResponse} />
                  ))}
                </div>
              : 
                <h3>no videos added yet</h3>
              }
            </Col>
            <Col lg={4}>
              <CategoryList />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
