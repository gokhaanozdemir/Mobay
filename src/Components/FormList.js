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
        <form>
          <div className="row-select">
          <label>Ürün Adı</label>
          <input type="text" value={product} />
          <label>Ürün Kodu</label>
          <input type="text" value={code} />
          <label>Tedarikçi Ürün Kodu</label>
          <input type="text" value={location} />
          </div>
          <div className="row-select">
          <label>Müşteri Sevk Adresi</label>
          <input type="text" value={explanation} />
          <label>Açıklama</label>
          <input type="text" value={supplier} />
          <label>Miktar</label>
          <input type="text" value={quantity} />
          </div>
          <div className="row-select">
          <label>Temin Tarihi</label>
          <input type="text" value={delivery} />
          <label>Sevk Şekli</label>
          <input type="text" value={date} />
          </div>
        </form>
      </div>
    );
  }
}
