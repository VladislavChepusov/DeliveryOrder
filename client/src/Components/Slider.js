import React from "react";
import { Carousel } from "react-bootstrap";
import ship from '../Contents/ship.jpg'
import plane from '../Contents/plane.jpg'
import truck from '../Contents/truck.jpg'
import "../styles/myapp.css";
export default function Slider() {
    return (
        <Carousel className="carousel slide">
            <Carousel.Item className="slid">

                <img src={ship} className="d-block w-100" alt="Доставка" />
                <Carousel.Caption>
                    <h3>Экономичные и безопасные перевозки груза по воде на кораблях</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slid">
                <img src={truck} className="d-block w-100" alt="Доставка" />
                <Carousel.Caption>
                    <h3>Быстрая и надежная перевозка грузов по земле на фурах в России</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slid">
                <img src={plane} className="d-block w-100" alt="Доставка" />
                <Carousel.Caption>
                    <h3>Эффективные и оперативные перевозки груза по небу на самолетах</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
