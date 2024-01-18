import { Row, Col, Carousel } from "react-bootstrap";
import "../components/components.css";
import { Photos } from "../data";
export default function WrappSi() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <Row className="col-12 d-flex mb-5 gap-3  justify-content-center flex-lg-wrap flex-sm-nowrap">
      <Carousel className="d-xs-flex d-md-none ">
        {Photos.map((photo) => (
          <Carousel.Item key={photo.idF}>
            <Col lg={photo.size} className="col-sm-5 mt-2  WrappSi">
              <img src={photo.nameFoto} alt="" />
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-none d-md-flex flex-wrap justify-content-center g-2">
        {Photos.map((photo) => (
          <Col
            lg={photo.size}
            className="col-sm-5 mt-2  WrappSi"
            key={photo.idF}
          >
            <img src={photo.nameFoto} alt="" />
          </Col>
        ))}
      </div>
    </Row>
  );
}
