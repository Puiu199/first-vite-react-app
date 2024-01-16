import Tcontent from "../components/Tcontent";
import "../wrappTravel/wrappTravel.css";
import Wrapp from "../wrappImg/Wrapp";
import { travels } from "../data";
import { Col } from "react-bootstrap";
export default function WrappTravel() {
  return (
    <Col className="col-12  gap-3 d-flex flex-wrap justify-content-center ">
      {travels.map((travel) => (
        <Col className="col-5 ">
          <div className="d-flex wrappT bg-white">
            <Wrapp key={travel.id}>
              <img src={"./public/travelImg/" + travel.imgT} alt="" />
            </Wrapp>
            <div className="d-flex justify-content-between flex-column w-75 m-1 ">
              <a href="http://" className="TravelTitele">
                {travel.TravelTitele}
              </a>
              <details className="TravelContent">
                <summary>Detalies</summary>
                <span>{travel.TravelContent}</span>
              </details>
              <section className="d-flex justify-content-between h-25">
                <span className=" text-warning">{travel.PublishedAt}</span>
                <a href="http://">читать статью</a>
              </section>
            </div>
          </div>
        </Col>
      ))}
    </Col>
  );
}
