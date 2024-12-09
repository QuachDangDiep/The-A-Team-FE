import React from "react";
import Slider from "react-slick";
import "./CustomerReviews.css"; // CSS tùy chỉnh

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Hòa-Linh",
      location: "Nguyễn Trãi - Thanh Xuân - Hà Nội",
      content:
        "Gối chườm thảo dược Hatoco là sản phẩm kết hợp các loại thảo dược tự nhiên, giúp nhanh chóng xoa dịu cơn đau mỏi vai gáy, lưng, hông, lưu thông khí huyết. Từ ngày dùng sản phẩm mẹ tôi khỏe hơn nhiều.",
      image: "/images/img29.jpg",
    },
    {
      name: "Nguyễn Văn Hòa",
      location: "Đống Đa - Hà Nội",
      content:
        "Sản phẩm giúp tôi thư giãn và giảm căng thẳng sau ngày làm việc dài. Tôi rất hài lòng về chất lượng và hiệu quả.",
      image: "/images/img30.jpg",
    },
    {
      name: "Quách Đăng Điệp",
      location: "Cầu Giấy - Hà Nội",
      content:
        "Từ khi dùng sản phẩm của Hatoco, gia đình tôi đã cải thiện sức khỏe rõ rệt. Rất đáng để thử!",
      image: "/images/img25.jpg",
    },
    {
      name: "Mai Thị Hồng Ngọc",
      location: "Hồ Chí Minh",
      content:
        "Chất lượng tuyệt vời, dịch vụ tốt. Tôi sẽ tiếp tục ủng hộ sản phẩm của Hatoco.",
      image: "/images/img26.jpg",
    },
    {
      name: "Trung",
      location: "Hồ Chí Minh",
      content:
        "Chất lượng tuyệt vời, dịch vụ tốt. Tôi sẽ tiếp tục ủng hộ sản phẩm của Hatoco.",
      image: "/images/img27.jpg",
    },
    {
      name: "Vũ Ngọc Linh",
      location: "Hồ Chí Minh",
      content:
        "Chất lượng tuyệt vời, dịch vụ tốt. Tôi sẽ tiếp tục ủng hộ sản phẩm của Hatoco.",
      image: "/images/img28.jpg",
    },
    {
      name: "Phạm Văn Khánh",
      location: "Hồ Chí Minh",
      content:
        "Chất lượng tuyệt vời, dịch vụ tốt. Tôi sẽ tiếp tục ủng hộ sản phẩm của Hatoco.",
      image: "/images/img17.jpg",
    },
  ];

  return (
    <div
      className="customer-reviews"
      style={{ backgroundImage: "url('/images/img16.jpg')" }}
    >
      <h2 className="reviews-heading">Khách Hàng Nói Về MyLogo</h2>
      <img src="https://thucphamsach9.giaodienwebmau.com/wp-content/themes/flatsome-child/img/line-white.png" />
      <p className="reviews-subheading">
        MyLogo mang tới cho thị trường những sản phẩm chất lượng, độc đáo, sáng
        tạo theo tiêu chuẩn cao, ở tất cả các sản phẩm mình tạo ra, chúng tôi đã
        chứng tỏ vai trò tiê dẫn dắt sự thay đổi phong cách tiêu dùng.
      </p>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <img
                src={review.image}
                alt={review.name}
                className="review-avatar"
              />
              <h3 className="review-name">{review.name}</h3>
              <p className="review-location">{review.location}</p>

              {/* Ảnh ngăn cách */}
              <img
                src="/images/img18.jpg" // Thay bằng đường dẫn ảnh ngăn cách
                alt="Separator"
                className="review-separator"
              />

              <blockquote className="review-text">
                “{review.content}”
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
