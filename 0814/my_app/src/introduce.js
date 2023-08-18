import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT JASON</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            <Image src="./jason.jpg" alt="프로필 사진" 
            style={{ border: '1px solid #ff0000', width: 300 }} 
            roundedCircle />
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              # 조찬희 <br />
              대한민국 경기도 화성시<br />
              순천향대학교 사물인터넷 학과 <br />
              Ai.Web개발 취업연계 캠프 수료 중<br />
              <br />
              # 장점 <br />
              24시간 시즈모드 가능 <br />
              모르는건 알고 가기 <br />
              <br />
              # 단점  <br />
              느린 예열 <br />
              잡다한 관심사 <br />
            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">관심사</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
              
            <Carousel.Item>
             
              <img
                    className="d-block w-100"
                    src="./novel.jpg"
                    alt="Second slide"
              />
              <Carousel.Caption> 
                <h3>웹소설</h3>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>많은 돈</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
               className="d-block w-100"
               src="./1.jpg"
               alt="Second slide"
             />

              <Carousel.Caption>
                <h3>하고싶은 일</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>KorMan98</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-1234-1346</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>SNS</h3>
            <p style={{ margin: 0, padding: 10 }}>@jochan77</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; 조찬희. All Right Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;