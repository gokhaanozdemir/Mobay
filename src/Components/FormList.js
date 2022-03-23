import React, { Component } from "react";

export default class FormList extends Component {
  render() {
    const {
      product,
      code,
      location,
      explanation,
      supplier,
      quantity,
      delivery,
      date,
    } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Ürün Kodu</th>
              <th>Tedarikçi Ürün Kodu</th>
              <th>Müşteri Sevk Adresi</th>
              <th>Açıklama</th>
              <th>Miktar</th>
              <th>Temin</th>
              <th>Sevk Şekli</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product}</td>
              <td>{code}</td>
              <td>{supplier}</td>
              <td>{location}</td>
              <td>{explanation}</td>
              <td>{quantity}</td>
              <td>{date}</td>
              <td>{delivery}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
