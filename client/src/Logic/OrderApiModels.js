"use strict";
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.1.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = exports.OrderModel = exports.Order = exports.Client = void 0;
/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
var Client = /** @class */ (function () {
    function Client(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @return Success
     */
    Client.prototype.getOrders = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrders";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetOrders(_response);
        });
    };
    Client.prototype.processGetOrders = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Order.fromJS(item));
                    }
                }
                else {
                    result200 = null;
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @param iD (optional)
     * @return Success
     */
    Client.prototype.getOrderById = function (iD) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrderById?";
        if (iD === null)
            throw new Error("The parameter 'iD' cannot be null.");
        else if (iD !== undefined)
            url_ += "ID=" + encodeURIComponent("" + iD) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {}
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetOrderById(_response);
        });
    };
    Client.prototype.processGetOrderById = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            console.log("eeeeeeeeeeeeeee")
            var d = response.json();
            d.then(rende =>{
                console.log("eeeeeeeeeeeeeee",rende)
              
            })
        
            return  d;
            /*
            return response.text().then(function (_responseText) {
                console.log("пиздец",_responseText)
                return ;
            });
            */
            
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    Client.prototype.addOrder = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/AddOrder";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processAddOrder(_response);
        });
    };
    Client.prototype.processAddOrder = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    return Client;
}());
exports.Client = Client;
var Order = /** @class */ (function () {
    function Order(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Order.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.senderCity = _data["senderCity"];
            this.senderAddress = _data["senderAddress"];
            this.receiverCity = _data["receiverCity"];
            this.receiverAddress = _data["receiverAddress"];
            this.cargoWeight = _data["cargoWeight"];
            this.cargoPickupDate = _data["cargoPickupDate"] ? new Date(_data["cargoPickupDate"].toString()) : undefined;
        }
    };
    Order.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Order();
        result.init(data);
        return result;
    };
    Order.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["senderCity"] = this.senderCity;
        data["senderAddress"] = this.senderAddress;
        data["receiverCity"] = this.receiverCity;
        data["receiverAddress"] = this.receiverAddress;
        data["cargoWeight"] = this.cargoWeight;
        data["cargoPickupDate"] = this.cargoPickupDate ? this.cargoPickupDate.toISOString() : undefined;
        return data;
    };
    return Order;
}());
exports.Order = Order;
var OrderModel = /** @class */ (function () {
    function OrderModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    OrderModel.prototype.init = function (_data) {
        if (_data) {
            this.senderCity = _data["senderCity"];
            this.senderAddress = _data["senderAddress"];
            this.receiverCity = _data["receiverCity"];
            this.receiverAddress = _data["receiverAddress"];
            this.cargoWeight = _data["cargoWeight"];
            this.cargoPickupDate = _data["cargoPickupDate"] ? new Date(_data["cargoPickupDate"].toString()) : undefined;
        }
    };
    OrderModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new OrderModel();
        result.init(data);
        return result;
    };
    OrderModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["senderCity"] = this.senderCity;
        data["senderAddress"] = this.senderAddress;
        data["receiverCity"] = this.receiverCity;
        data["receiverAddress"] = this.receiverAddress;
        data["cargoWeight"] = this.cargoWeight;
        data["cargoPickupDate"] = this.cargoPickupDate ? this.cargoPickupDate.toISOString() : undefined;
        return data;
    };
    return OrderModel;
}());
exports.OrderModel = OrderModel;
var ApiException = /** @class */ (function (_super) {
    __extends(ApiException, _super);
    function ApiException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isApiException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    ApiException.isApiException = function (obj) {
        return obj.isApiException === true;
    };
    return ApiException;
}(Error));
exports.ApiException = ApiException;
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
