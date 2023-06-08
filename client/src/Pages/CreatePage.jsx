import React from "react";
import Header from "../Components/Header";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Client, OrderModel } from "../Logic/OrderApiModels";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import config from '../config.json'


export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {

      SenderCity: "",
      SenderAddress: "",
      ReceiverCity: "",
      ReceiverAddress: "",
      CargoWeight: "",
      CargoPickupDate: "",
      redirect: false,

      errorSenderCity: null,
      errorSenderAddress: null,
      errorReceiverCity: null,
      errorReceiverAddress: null,
      errorCargoWeight: null,

      currentDateTime: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    var connect = new Client(config.URL);
    var valid = true;

    if (this.state.SenderCity.length > 100 || this.state.SenderCity.length < 1) {
      valid = false;
      this.setState({
        errorSenderCity: 'От 1 до 100 символов',
      });
    }
    else{
      this.setState({
        errorSenderCity: null,
      })
    }
    if (this.state.ReceiverCity.length > 100 || this.state.ReceiverCity.length < 1) {
      valid = false;
      this.setState({
        errorReceiverCity: 'От 1 до 100 символов',
      });
    }
    else{
      this.setState({
        errorReceiverCity: null,
      })
    }

    if (this.state.SenderAddress.length > 200 || this.state.SenderAddress.length < 1) {
      valid = false;
      this.setState({
        errorSenderAddress: 'От 1 до 200 символов',
      });
    }
    else{
      this.setState({
        errorSenderAddress: null,
      })
    }
    if (this.state.ReceiverAddress.length > 200 || this.state.ReceiverAddress.length < 1) {
      valid = false;
      this.setState({
        errorReceiverAddress: 'От 1 до 200 символов',
      });
    }
    else{
      this.setState({
        errorReceiverAddress: null,
      })
    }
    if (this.state.CargoWeight > 99999 || this.state.CargoWeight < 0) {
      valid = false;
      this.setState({
        errorCargoWeight: 'Вес не может превышать 99999 кг',
      });
    }
    else{
      this.setState({
        errorCargoWeight: null,
      })
    }

    if (valid) {
     
      var data = new OrderModel({
        senderCity: this.state.SenderCity,
        senderAddress: this.state.SenderAddress,
        receiverCity: this.state.ReceiverCity,
        receiverAddress: this.state.ReceiverAddress,
        cargoWeight: this.state.CargoWeight,
        cargoPickupDate: new Date(this.state.CargoPickupDate)
      })
     

      var response = connect.addOrder(data);

      response
        .then((res) => {
   
          this.setState({
            redirect: true,
          });
        })
        .catch((error) => {
          console.log("error !!!", error);
        });
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
         {this.state.redirect ? <Navigate push to="/orders" /> : null}
        <Header />
        <MDBContainer
          fluid
          className="p-4 background-radial-gradient overflow-hidden"
        >
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <h1
                className="my-5 display-3 fw-bold ls-tight px-3"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                в каждый дома - <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  ПОЧТОВЫЙ ГРУЗ
                </span>
              </h1>
            </MDBCol>

            <MDBCol md="6" className="position-relative">
              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <form onSubmit={this.handleSubmit}>
                    <MDBRow>
                      <MDBCol col="6">
                        <div className="text-danger">
                          {this.state.errorSenderCity}
                        </div>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Город отправителя"
                          type="text"
                          id="SenderCity"
                          value={this.state.SenderCity}
                          onChange={this.handleInputChange}
                          name="SenderCity"
                          required
                        />
                      </MDBCol>
                      <MDBCol col="6">
                        <div className="text-danger">
                          {this.state.errorSenderAddress}
                        </div>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Адрес отправителя"
                          type="text"
                          id="SenderAddress"
                          value={this.state.SenderAddress}
                          onChange={this.handleInputChange}
                          name="SenderAddress"
                          required
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol col="6">
                        <div className="text-danger">
                          {this.state.errorReceiverCity}
                        </div>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Город получателя"
                          type="text"
                          id="ReceiverCity"
                          value={this.state.ReceiverCity}
                          onChange={this.handleInputChange}
                          name="ReceiverCity"
                          required
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <div className="text-danger">
                          {this.state.errorReceiverAddress}
                        </div>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Адрес получателя"
                          id="ReceiverAddress"
                          type="text"
                          value={this.state.ReceiverAddress}
                          onChange={this.handleInputChange}
                          name="ReceiverAddress"
                          required
                        />
                      </MDBCol>
                    </MDBRow>
                    <div className="text-danger">
                      {this.state.errorCargoWeight}
                    </div>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Вес груза"
                      id="CargoWeight"
                      type="number"
                      step="0.01"
                      min="0"
                      max="99999"
                      value={this.state.CargoWeight}
                      onChange={this.handleInputChange}
                      name="CargoWeight"
                      required
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Дата забора груза"
                      id="CargoPickupDate"
                      type="datetime-local"
                      min={this.state.currentDateTime}
                      required
                      value={this.state.CargoPickupDate}
                      onChange={this.handleInputChange}
                      name="CargoPickupDate"
                    />

                    <div className="col text-center">
                      <Button className="btn btn-default" type="submit">Оформить</Button>
                    </div>
                  </form>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
