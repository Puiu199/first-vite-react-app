import Tcontent from "./components/Tcontent";
import Title from "./components/Title";
import YellowT from "./components/YellowT";
import "./index.css";
import Header from "./header/Header";
import { date } from "./data";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapp from "./wrappImg/Wrapp";
import WrappV from "./wrappVideo/WrappV";
import Button from "./greenB/Button";

export default function App() {
  return (
    <div>
      <Header></Header>
      <main className="min-vh-100">
        <Container>
          <Row className="d-flex mt-5 g-2 flex-wrap justify-content-center ">
            <Col className="col-12 col-sm-6 d-flex ">
              <Wrapp>s</Wrapp>
              <WrappV>a</WrappV>
            </Col>
            <Col className=" col-12 d-flex flex-column col-sm-5">
              <div className="wrappText">
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
          <Row className="d-flex g-2">
            <Col className="col-sm-6 col-12 d-flex flex-column justify-content-evenly align-items-start">
              <YellowT>наше предложение</YellowT>
              <Title>Лучшие программы для тебя</Title>
              <Tcontent>
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа.
              </Tcontent>
              <div className="d-flex flex-column justify-content-evenly align-items-start">
                <div>
                  <img src="" alt="" />
                  <div className=" d-flex flex-column justify-content-between  align-items-start">
                    <Title>Опытный гид</Title>
                    <Tcontent>
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Tcontent>
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                  <div className=" d-flex flex-column justify-content-between  align-items-start">
                    <Title>Безопасный поход</Title>
                    <Tcontent>
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Tcontent>
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                  <div className=" d-flex flex-column justify-content-between  align-items-start">
                    <Title>Лояльные цены</Title>
                    <Tcontent>
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Tcontent>
                  </div>
                </div>
                <Button>Стоимость программ</Button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}
