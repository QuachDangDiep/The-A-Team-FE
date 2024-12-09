import React from "react";
import "./HomeContent.css"; // Tạo file CSS riêng nếu cần thiết

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="content-wrapper">
        <div className="image-section">
          <img
            src="https://thucphamsach9.giaodienwebmau.com/wp-content/uploads/2024/04/hinh-anh-gioithieu.png"
            alt="Thực phẩm sạch"
            className="vegetable-image"
          />
        </div>
        <div className="text-section">
          <h2>Thực phẩm sạch cho mọi nhà!</h2>
          <p>
            Thịt lợn thảo quê Vinaheo của bên em luôn luôn mang đến một hương vị
            đậm đà, thơm ngon cho mỗi bữa ăn gia đình. Một loại thực phẩm chế
            biến được nhiều món nhất, tiện dụng nhất và giá cả phải chăng nhất.
            Hơn thế nữa Thịt lợn thảo quê Vinaheo luôn luôn đảm bảo mang đến cho
            khách hàng chất lượng thịt tươi ngon nhất. Nghiêm ngặt từ khâu chăn
            nuôi đến khâu pha cắt đóng gói và vận chuyển đến tay khách hàng.
          </p>
          <p>
            Một loại thực phẩm chế biến được nhiều món nhất, tiện dụng nhất và
            giá cả phải chăng nhất. Hơn thế nữa Thịt lợn thảo quê Vinaheo luôn
            luôn đảm bảo mang đến cho khách hàng chất lượng thịt tươi ngon nhất.
            Nghiêm ngặt từ khâu chăn nuôi đến khâu pha cắt đóng gói và vận
            chuyển đến tay khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
