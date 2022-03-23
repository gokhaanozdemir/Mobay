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
      <div className="form-list">
        <h1>{product}</h1>
        <h1>{code}</h1>
        <form>
          <label>Ürün Adı</label>
          <input type="text" />
          <label>Ürün Kodu</label>
          <input type="text"  />
          <label>Tedarikçi Ürün Kodu</label>
          <input type="text" />
          <label>Müşteri Sevk Adresi</label>
          <input type="text" />
          <label>Açıklama</label>
          <input type="text" />
          <label>Miktar</label>
          <input type="text" />
          <label>Temin Tarihi</label>
          <input type="text" />
          <label>Sevk Şekli</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}
