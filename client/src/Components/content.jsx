import React from "react";
import { Nav } from "react-bootstrap";
export default class Content extends React.Component {
  render(props) {
    return (
      <>
        <Nav.Link href={"/order/" + this.props.id}>
          <div className="ui card mt-3 ">
            <div className="list-group">
              <a className="list-group-item list-group-item list-group-item-success">
                <span className="glyphicon glyphicon-star"></span> Номер заказа:{" "}
                <span className="text-dark"> {this.props.id}</span>
              </a>
              <a className="list-group-item">
                <span className="glyphicon glyphicon-user"></span> Город
                отправителя:{" "}
                <span className="text-dark"> {this.props.senderCity}</span>
              </a>
              <a className="list-group-item">
                <span className="glyphicon glyphicon-th-list"></span> Адрес
                отправителя:{" "}
                <span className="text-dark"> {this.props.senderAddress}</span>
              </a>
              <a className="list-group-item">
                <span className="glyphicon glyphicon-camera"></span> Город
                получателя:{" "}
                <span className="text-dark"> {this.props.receiverCity}</span>
              </a>

              <a className="list-group-item">
                <span className="glyphicon glyphicon-camera"></span> Адрес
                получателя:{" "}
                <span className="text-dark">{this.props.receiverAddress}</span>
              </a>

              <a className="list-group-item">
                <span className="glyphicon glyphicon-camera"></span> Вес груза:{" "}
                <span className="text-dark">{this.props.cargoWeight} кг</span>
              </a>

              <a className="list-group-item">
                <span className="glyphicon glyphicon-camera"></span> Дата забора
                груза:{" "}
                <span className="text-dark">
                  {this.props.time.getDate() +
                    "/" +
                    (Number(this.props.time.getMonth()) + 1) +
                    "/" +
                    this.props.time.getFullYear() +
                    " " +
                    this.props.time.getHours() +
                    ":" +
                    this.props.time.getMinutes()}
                </span>
              </a>
            </div>
          </div>
        </Nav.Link>
      </>
    );
  }
}
