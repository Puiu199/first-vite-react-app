import Tcontent from "./components/Tcontent";
import Title from "./components/Title";
import YellowT from "./components/YellowT";
import "./index.css";
import Header from "./header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapp from "./wrappImg/Wrapp";
import WrappV from "./wrappVideo/WrappV";
import Button from "./greenB/Button";
import ElementList from "./components/ElementList";
import Footer from "./footer/Footer";

export default function App() {
  return (
    <div>
      <Header></Header>
      <main className="min-vh-100">
        <Container>
          <Row className="d-flex mt-5 g-2 flex-wrap justify-content-between ">
            <Col className="col-12 col-sm-6 d-flex ">
              <Wrapp>
                <img src="public/bg/bg1.png" alt="" />
              </Wrapp>
              <WrappV>
                <img src="public/bg/bg2.png" alt="" />
              </WrappV>
            </Col>
            <Col className="col-12 d-flex flex-column  col-sm-6">
              <div className="wrappText pl-3">
                <YellowT>о нашем походе</YellowT>
                <Title>Исследуйте все горные массивы мира вместе с нами</Title>
                <Tcontent>
                  Его корни уходят в один фрагмент классической латыни 45 года
                  н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                  профессор латыни из колледжа Hampden-Sydney, штат Вирджиния,
                  взял одно из самых странных слов в Lorem Ipsum, "consectetur"и
                  занялся его поисками в классической латинской литературе.
                </Tcontent>
                <Button>Программа тура</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-light">
          <Container>
            <Row className="d-flex g-2 bg-light">
              <Col className="col-sm-6 col-12 d-flex flex-column justify-content-evenly pt-5 pb-5 align-items-start">
                <YellowT>наше предложение</YellowT>
                <Title>Лучшие программы для тебя</Title>
                <Tcontent>
                  Его корни уходят в один фрагмент классической латыни 45 года
                  н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                  профессор латыни из колледжа.
                </Tcontent>
                <div className="d-flex flex-column justify-content-evenly align-items-start">
                  <div className="d-flex">
                    <img src="/public/img/people.svg" alt="" />
                    <div className=" d-flex flex-column justify-content-between mt-2 mb-2  align-items-start">
                      <Tcontent>
                        <b> Опытный гид</b>
                      </Tcontent>
                      <div className="">
                        Для современного мира базовый вектор развития
                        предполагает независимые способы реализации
                        соответствующих условий активизации.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img src="/public/img/shild.svg" alt="" />
                    <div className=" d-flex flex-column justify-content-between mt-2 mb-2 align-items-start">
                      <Tcontent>
                        <b>Безопасный поход</b>
                      </Tcontent>
                      <Tcontent>
                        Для современного мира базовый вектор развития
                        предполагает независимые способы реализации
                        соответствующих условий активизации.
                      </Tcontent>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between aligni mt-2 mb-5">
                    <img src="/public/img/yTag.svg" alt="" />
                    <div className="d-flex flex-column justify-content-between ml-2  align-items-start">
                      <Tcontent>
                        <b>Лояльные цены</b>
                      </Tcontent>
                      <Tcontent>
                        Для современного мира базовый вектор развития
                        предполагает независимые способы реализации
                        соответствующих условий активизации.
                      </Tcontent>
                    </div>
                  </div>
                  <Button>Стоимость программ</Button>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col className="d-flex flex-column  mt-5 mb-3 align-items-center ">
              <YellowT>по версии отдыхающих</YellowT>
              <Title>Популярные направления</Title>
            </Col>
          </Row>
          <ElementList></ElementList>
          <Row className="mt-3 ">
            <Col className="col d-flex justify-content-center align-items-center">
              <Button>Рейтинг направлений</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="d-flex justify-content-around flex-column align-items-center mt-5">
            <Col className="col d-flex justify-content-around flex-column align-items-center ">
              <YellowT>делимся впечатлениями</YellowT>
              <Title>Блог о путешествиях</Title>
            </Col>
          </Row>
          <Row></Row>
          <Row className="d-flx justify-content-center">
            <Col className="col-2">
              <Button>Другие материалы</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer>
        <Container>
          <Row className=" d-flex justify-content-evenly  align-items-center">
            <Col className="col">
              <span>Компания «РумТибет»</span>
              <Tcontent>
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </Tcontent>
            </Col>
            <Col className="col-3">
              <span>Наши услуги</span>
              <ul>
                <li>
                  <a href="http://">Прогулки в горы летом</a>
                </li>
                <li>
                  <a href="http://">Зимние походы в горы</a>
                </li>
                <li>
                  <a href="http://">Посещение храмов в горах</a>
                </li>
                <li>
                  <a href="http://">Экстремальные виды туризма</a>
                </li>
                <li>
                  <a href="http://">Походы в джунглях Амазонии</a>
                </li>
                <li>
                  <a href="http://">Поездка в Африку</a>
                </li>
              </ul>
            </Col>
            <Col className=" col-3"></Col>
          </Row>
        </Container>
      </Footer>
    </div>
  );
}
