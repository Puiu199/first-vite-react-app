import "../header/sHeader.css";
import Logo from "../logo/logo";
import A from "../linkTag/A";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../greenB/Button";
import WhiteB from "../whiteB/WhiteB";

export default function Header() {
  return (
    <header>
      <Container className=" ">
        <Row className="d-flex justify-content-between mt-2 pt-2">
          <Col className="col">
            <Logo></Logo>
          </Col>
          <Col className="col col-md-9">
            <div className="list-menu justify-content-evenly align-items-center ">
              <A link="#">Главная</A>
              <A link="#">Про гида</A>
              <A link="#">Программа тура</A>
              <A link="#">Стоимость</A>
              <A link="#">Блог</A>
              <A link="#">Контакты</A>
              <Button>Консультация</Button>
            </div>
            <div className="shortMenu">
              <div className="longMenu">
                <span>X</span>
                <a href="">Про гида</a>
                <a href="">Программа тура</a>
                <a href="">Стоимость</a>
                <a href="">Блог</a>
                <a href="">Контакты</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-end align-items-end">
          <Col className="col  col-12">
            <p className="slogan">
              Насладись прогулкой в горах с командой единомышленников
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center ">
          <Col className="col-sm col-md-10 d-flex justify-content-evenly align-items-center wrappSelectOptions">
            <select className="selectStyle" type="" name="" id="">
              <option value="">Локация для тура</option>
            </select>
            <input
              className="selectStyle"
              type="date"
              name=""
              placeholder="Дата похода"
              id=""
            />
            <select className="selectStyle" type="" name="" id="">
              <option value="">Участники</option>
            </select>
            <WhiteB>Найти программу</WhiteB>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
