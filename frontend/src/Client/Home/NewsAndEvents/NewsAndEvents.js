import React from "react";
import "./NewsAndEvents.css"; // CSS tùy chỉnh

const NewsAndEvents = () => {
  const newsItems = [
    {
      image: "/images/img19.jpg",

      title: "Startup mang cơm mẹ nấu đến giới văn phòng ",
      date: "01/12/2024 10:00 am",
      content:
        "Khay cơm đủ dinh dưỡng, do các bà nội trợ nấu tại nhà được giao...",
    },
    {
      image: "/images/img20.jpg",

      title: "Doanh nghiệp thề sản xuất sản phẩm sạch",
      date: "02/12/2024 9:00 am",
      content:
        "58 doanh nghiệp, cá nhân dầu tiên tham gia. Hôị thực phẩm minh bạch đã...",
    },
    {
      image: "/images/img21.jpg",

      title: "Phân biệt thực phẩm sạch và hữu cơ",
      date: "03/12/2024 12:00 am",
      content:
        "Thực phẩm sạch vẫn sử dụng các chất hóa học nhưng không gây hại cho...",
    },
    {
      image: "/images/img22.jpg",

      title: "Mẹo bảo quản thực phẩm tươi lâu dịp tết",
      date: "04/12/2024 15:00",
      content:
        "Người tiêu dùng chọn thực phẩm tươi, chia thành từng nhóm để trong tủ lạnh...",
    },
    {
      image: "/images/img23.jpg",

      title: "Thịt heo sạch từng mô hình chăn nuôi feed-farm-food",
      date: "05/12/2024 8:00 am",
      content:
        "Heo của BaF Việt Nam ăn cám chay do công ty sản suất, được nuôi...",
    },
    {
      image: "/images/img24.jpg",

      title: "10 Nguồn bán sỉ thực phẩm sạch giá tốt uy tín",
      date: "06/12/2024 9:00 am",
      content:
        "Thực phẩm là một trong những mặt hàng không thể thiếu đối với mỗi nhà.",
    },
  ];

  return (
    <div className="news-and-events">
      <h2 className="section-title">TIN TỨC & SỰ KIỆN</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <img src={item.image} alt={item.alt} className="news-image" />
            <div className="news-overlay">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-date">{item.date}</p>

              <p className="news-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
