import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div className="container-fluid">
          <Row style={{ height: '65vh' }} className='text-light'>
            <Col className="d-flex justify-content-center flex-column  p-3">
              <h1>Media Player</h1>
              <p style={{ textAlign: 'justify' }}>
                A spot for YouTube video management.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, itaque sapiente at voluptatem reiciendis quasi, impedit porro sequi maiores error facilis perferendis velit quam voluptatum laudantium minima et excepturi! Quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora similique, minus quod obcaecati fuga optio dolores in dolore temporibus laborum nostrum totam? Quod omnis aspernatur ipsam iste, sed odio ut.
              </p>
              <Link className=' btn btn-success text light' to={'/log'}>log</Link>
            </Col>
            <Col className="d-flex justify-content-center p-2">
              <img
                src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_1280.png"
                className="img-fluid"
                alt="YouTube"
              />
            </Col>
          </Row>
          <div className="container p-3 text-light ">
            <h4 className="my-3">Features</h4>
            <div className="d-flex justify-content-between gap-3 flex-wrap ">
              <Card style={{ width: '21rem', backgroundColor:'black' }} >
                <Card.Img
                  variant="top"
                  height={'200px'}
                  src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/comp_2.gif"
                />
                <Card.Body >
                  <Card.Title>Upload YouTube Videos</Card.Title>
                  <Card.Text >
                    Some quick example text to build on the YouTube video feature.
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem' , backgroundColor:'black'}}>
                <Card.Img
                  variant="top"
                  height={'200px'}
                  src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1687734373/230625-youtube-comments-tease_faprho"
                />
                <Card.Body>
                  <Card.Title>YouTube Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the YouTube video feature.
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem', backgroundColor:'black' }}>
                <Card.Img
                  variant="top"
                  height={'200px'}
                  src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/lottie-santi-daksa-project03.gif"
                />
                <Card.Body>
                  <Card.Title>History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the YouTube video feature.
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='container-fluid p-3 bg-black text-light my-3'>
            <Row>
              <Col className='d-flex flex-column justify-content-center'>
                <h3>simple,easy and secure</h3>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellendus placeat quod earum accusamus blanditiis cum voluptate dolores dignissimos et natus ratione recusandae,
                  impedit officia consequuntur. Dolore dicta sequi numquam.

                </p></Col>
              <Col><img src="https://t3.ftcdn.net/jpg/10/33/22/42/360_F_1033224263_IAOqtsQV9DBmNPCBzyC17x5XhxtQxzun.jpg" alt="" /></Col>
            </Row>
          </div>

          <div className='container-fluid p-2 border my-2 text-light'>
            <Row>

              <Col lg={4} className='d-flex flex-column justify-content-center'>
                <h2>check out our new updates!!</h2>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellendus placeat quod earum accusamus blanditiis cum voluptate dolores dignissimos et natus ratione recusandae,
      impedit officia consequuntur. Dolore dicta sequi numquam.}></p></Col>

              <Col lg={8}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/s2skans2dP4?si=FXCXHggKn5Y7wQxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
          </div>

        </div>
      </div>
    </>
  );
}

export default Landing;
