import { Col } from "react-bootstrap";
import "../components/Components.css";
import { TheBest } from "../data";
export default function WroundB() {
  console.log(TheBest);
  return (
    <Col className="col-6 d-none d-sm-none d-sm-flex d-md-flex gap-2 flex-wrap h-75 justify-content-center align-items-center ">
      {TheBest.map((elem) => (
        <div className={elem.NameClass} key={elem.idThebest}>
          <img src={elem.imgTB} alt="" />
        </div>
      ))}
    </Col>
  );
}
