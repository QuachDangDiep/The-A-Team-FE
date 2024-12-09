import React from "react";
import "./BrandSection.css"; // CSS riêng cho component

const BrandSection = () => {
  return (
    <section className="brand-section" id="brand-section">
      {/* Hình nền */}
      <div className="brand-background">
        <img
          loading="lazy"
          decoding="async"
          src="https://thucphamsach9.giaodienwebmau.com/wp-content/uploads/2024/04/bg_thuonghieu.png"
          alt="Thương Hiệu Background"
          className="bg-image"
        />
      </div>

      {/* Nội dung chính */}
      <div className="section-content">
        <div className="content-text">
          <h2 className="title-1">Thương Hiệu MYLOGO</h2>
          <img
            className="title-1-img"
            src="https://thucphamsach9.giaodienwebmau.com/wp-content/uploads/2024/04/line-color.png"
          />
          <p>
            Thương hiệu MYLOGO gồm 3 thương hiệu chính là **VINAHEO – NOOSAVI –
            HANAMILK**. Chúng tôi phát triển hệ thống cung cấp thực phẩm sạch
            với quy trình chuẩn, đảm bảo an toàn cao cho sức khỏe người tiêu
            dùng.
          </p>
          <p>
            Từ nguồn heo khỏe đạt chuẩn 3 KHÔNG (không dịch bệnh, không chất tạo
            nạc, không dư lượng kháng sinh), được xử lý và đóng gói khép kín với
            Công Nghệ Oxy Fresh từ Châu Âu giúp thịt mềm ngon hơn, bảo toàn giá
            trị dinh dưỡng.
          </p>
          <p>
            Hệ thống chăn nuôi khép kín – Đảm bảo an toàn cho người tiêu dùng
            trong thời điểm dịch tả lợn Châu Phi đang hoành hành. Tươi ngon suốt
            9 ngày với Công Nghệ Oxy-Fresh từ Châu Âu.
          </p>
        </div>

        {/* Phần hình ảnh logo */}
        <div className="content-logos">
          <img
            loading="lazy"
            decoding="async"
            src="https://thucphamsach9.giaodienwebmau.com/wp-content/uploads/2024/04/3logo-home.png"
            alt="3 Lửa Logo"
            className="logos-image"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
