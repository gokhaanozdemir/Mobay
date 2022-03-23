import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      code: null,
      location: null,
      explanation: null,
      supplier: null,
      quantity: null,
      delivery: null,
      date: null,
    };
  }
  handleSubmit = () => {
    this.props.handleSubmit({
      ...this.props.form,
      ...this.state,
    });
  };
  render() {
    return (
      <div className="form">
        <div className="row-1">
          <select
            value={this.state.code}
            onChange={(e) =>
              this.setState({
                code: e.target.value,
              })
            }
          >
            <option value="Ürün Kodu">Ürün Kodu</option>
            <option value="509321">509321</option>
            <option value="874931">874931</option>
            <option value="452091">452091</option>
            <option value="749203">749203</option>
          </select>
          <select
            value={this.state.product}
            onChange={(e) =>
              this.setState({
                product: e.target.value,
              })
            }
          >
            <option value="Ürün Adı">Ürün Adı</option>
            <option value="Buzdolabı">Buzdolabı</option>
            <option value="Televizyon">Televizyon</option>
            <option value="Çamaşır Makinesi">Çamaşır Makinesi</option>
            <option value="Süpürge">Süpürge</option>
          </select>
          <select
            value={this.state.supplier}
            onChange={(e) =>
              this.setState({
                supplier: e.target.value,
              })
            }
          >
            <option value="Tedarikçi Ürün Kodu">Tedarikçi Ürün Kodu</option>
            <option value="9632">9632</option>
            <option value="8576">8576</option>
            <option value="9027">9027</option>
          </select>
        </div>
        <div className="row-1">
          <select
            value={this.state.location}
            onChange={(e) =>
              this.setState({
                location: e.target.value,
              })
            }
          >
            <option value="Müşteri Sevk Adresi">Müşteri Sevk Adresi</option>
            <option value="İzmir">İzmir</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
          </select>
          <input
            placeholder="Açıklama"
            value={this.state.product}
            onChange={(e) =>
              this.setState({
                explanation: e.target.value,
              })
            }
          />
          <input
            placeholder="Miktar"
            type="text"
            value={this.state.quantity}
            onChange={(e) =>
              this.setState({
                quantity: e.target.value,
              })
            }
          />
        </div>
        <div className="row-1">
          <input
            type="date"
            value={this.state.date}
            onChange={(e) =>
              this.setState({
                date: e.target.value
              })
            }
          />
          <select
            value={this.state.delivery}
            onChange={(e) =>
              this.setState({
                delivery: e.target.value,
              })
            }
          >
            <option value="Sevk Şekli">Sevk Şekli</option>
            <option value="İşyerinde Teslim">İşyerinde Teslim</option>
            <option value="Terminalde Teslim">Terminalde Teslim</option>
            <option value="Taşıyıcıya Masrafsız">Taşıyıcıya Masrafsız</option>
          </select>
          <button onClick={this.handleSubmit}>+</button>
        </div>
      </div>
    );
  }
}
export default Form;
