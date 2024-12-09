import React, { useState } from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img1.jpg",
  },
  {
    id: 2,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img2.jpg",
  },
  {
    id: 3,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img3.jpg",
  },
  {
    id: 4,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img4.jpg",
  },
  {
    id: 5,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img5.jpg",
  },
  {
    id: 6,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img6.jpg",
  },
  {
    id: 7,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img7.jpg",
  },
  {
    id: 8,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img8.jpg",
  },
  {
    id: 9,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img9.jpg",
  },
  {
    id: 10,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img10.jpg",
  },
  {
    id: 11,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img11.jpg",
  },
  {
    id: 12,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img12.jpg",
  },
  {
    id: 13,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img13.jpg",
  },
  {
    id: 14,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img14.jpg",
  },
  {
    id: 15,
    name: "Chả cốm mộc Vinaheo",
    price: 200000,
    image: "/images/img15.jpg",
  },
];

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(10); // Hiển thị 10 sản phẩm đầu tiên

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Mỗi lần nhấn thêm 10 sản phẩm
  };

  return (
    <div className="product-container">
      <h2 className="title">SẢN PHẨM MYLOGO</h2>
      <img
        className="img-title"
        src="https://thucphamsach9.giaodienwebmau.com/wp-content/uploads/2024/04/line-color.png"
        alt="Line Decoration"
      />
      <div className="tabs">
        <button className="tab-button active">Sản phẩm tươi sống</button>
        <button className="tab-button">Sơ chế - chế biến</button>
        <button className="tab-button">Nông sản</button>
        <button className="tab-button">Sữa</button>
      </div>
      <div className="product-grid">
        {products.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toLocaleString()} đ</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
