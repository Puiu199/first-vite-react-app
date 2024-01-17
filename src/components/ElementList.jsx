import Wrapp from "../wrappImg/Wrapp";
import { date } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ElementList() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const elements = date;
  return (
    <Carousel responsive={responsive}>
      {elements.map((element) => (
        <Wrapp key={element.id}>
          <img src={"./public/bg/" + element.bgImg} alt="" />
          <div className="description ">
            <div className="detalies d-flex flex-column justify-content-center w-75">
              <b>{element.title}</b>
              {element.content}
            </div>
            <span className="d-flex justify-content-center align-items-center">
              <h4>
                {element.price} {element.valute}
              </h4>
            </span>
          </div>
        </Wrapp>
      ))}
    </Carousel>
  );
}
