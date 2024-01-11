import Tcontent from "./components/Tcontent";
import Title from "./components/Title";
import YellowT from "./components/YellowT";
import "./index.css";
import Header from "./header/Header";
import { date } from "./data";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapp from "./wrappImg/Wrapp";
import Button from "./greenB/Button";

export default function App() {
  return (
    <div>
      <Header></Header>
      <main className="min-vh-100">
        <Container>
          <Row className="d-flex mt-5 justify-content-center ">
            <Col className="col-5 d-flex  ">
              <Wrapp></Wrapp>
              <Wrapp></Wrapp>
            </Col>
            <Col className=" d-flex flex-column col-5">
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
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}
