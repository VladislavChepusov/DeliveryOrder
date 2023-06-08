import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Components/Header";
import SLider from "../Components/Slider";
import "../styles/myapp.css";
import three from "../Contents/mrak.jpg";
import one from "../Contents/chel.jpg";
import two from "../Contents/rf.jpg";

export default class StartPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <SLider />
                <Container style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                    <Row>
                        <Col>
                            <Card style={{ width: "18rem", paddingBottom: "1rem" }}>
                                <img src={two} class="card-img-top" />

                                <Card.Title className="CardText">
                                    Надежность и безопасность
                                </Card.Title>
                                <Card.Text className="CardText">
                                    Почтовый Груз обеспечивает высокий уровень защиты и
                                    безопасности в процессе перевозки грузов, благодаря
                                    использованию надежных упаковочных материалов и тщательной
                                    проверке каждой отправки.
                                </Card.Text>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: "18rem", paddingBottom: "1rem" }}>
                                <img src={one} class="card-img-top" />

                                <Card.Title className="CardText">
                                    Широкий спектр услуг
                                </Card.Title>
                                <Card.Text className="CardText">
                                    Почтовый Груз предоставляет множество различных услуг для
                                    доставки грузов, включая срочную доставку, доставку на дом,
                                    доставку почтой и многие другие. Это позволяет выбрать
                                    наиболее подходящий вариант для каждого клиента.
                                </Card.Text>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: "18rem", paddingBottom: "1rem" }}>
                                <img src={three} class="card-img-top" />
                                <Card.Title className="CardText">
                                    Удобство использования
                                </Card.Title>
                                <Card.Text className="CardText">
                                    Оформление заказа на доставку груза через Почтовый Груз
                                    осуществляется в несколько кликов и не требует специальных
                                    знаний и навыков. Кроме того, служба доставки предоставляет
                                    возможность отслеживания статуса доставки на каждом этапе
                                    процесса.
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Наши тарифы на отправку грузов - дешевле не бывает!</h2>
                    <p>
                        Мы понимаем, что каждый клиент ценит свои деньги и всегда ищет
                        наиболее выгодные предложения. Поэтому мы рады предложить Вам
                        наиболее конкурентоспособные цены на отправку грузов по всей России.
                        Наша компания гарантирует быструю, надежную и качественную доставку
                        вашего груза в любую точку страны. Мы работаем с лучшими
                        логистическими компаниями и поэтому можем предоставить нашим
                        клиентам непревзойденные условия на отправку грузов.
                    </p>

                    <Button variant="primary" href="/create">
                        Проверьте сами!
                    </Button>
                </div>
            </>
        );
    }
}

//  <button class="btn btn-outline-secondary" type="button">Example button</button>
