import { Row, Col } from "react-bootstrap";
import "../components/components.css";
import { Photos } from "../data";
export default function WrappSi() {
  return (
    <Row className="col d-flex mb-5 gap-3  justify-content-center flex-lg-wrap flex-sm-nowrap  ">
      {Photos.map((photo) => (
        <Col lg={photo.size} className="col-sm-5 mt-2  WrappSi" key={photo.idF}>
          <img src={photo.nameFoto} alt="" />
        </Col>
      ))}
    </Row>
  );
}
