import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Hook để chuyển hướng người dùng

const LoginWithGoogle = ({ onLoginSuccess }) => {
  const navigate = useNavigate(); // Hook để chuyển hướng người dùng

  useEffect(() => {
    // Khởi tạo Google Identity Services SDK
    window.google.accounts.id.initialize({
      client_id:
        "1029470407015-aaqinqbadbk57cu50khjfl44ubmg08tv.apps.googleusercontent.com", // Client ID của bạn
      callback: handleGoogleLogin, // Gọi hàm khi đăng nhập thành công
    });

    // Render nút đăng nhập Google
    renderGoogleButton();
  }, []);

  // Hàm xử lý khi người dùng đăng nhập qua Google
  const handleGoogleLogin = async (response) => {
    try {
      // Lấy idToken từ phản hồi của Google
      const idToken = response.credential;
      console.log("Google ID Token:", idToken); // Log token để kiểm tra

      if (!idToken) {
        throw new Error("Không nhận được idToken từ Google");
      }

      // Gửi idToken đến backend để xác thực
      const apiResponse = await fetch("http://localhost:5024/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await apiResponse.json();
      console.log("Response từ backend:", data); // Log dữ liệu nhận được từ backend

      // Kiểm tra phản hồi từ backend
      if (!apiResponse.ok) {
        console.error("Lỗi từ backend:", data);
        throw new Error(data.message || "Đăng nhập Google thất bại!");
      }

      // Xử lý thành công
      if (data && data.Token) {
        localStorage.setItem("token", data.Token); // Lưu token vào localStorage
        console.log("Login success, token:", data.Token);

        // Gọi callback thành công
        onLoginSuccess(data.Token);

        // Chuyển hướng tới trang home sau khi đăng nhập thành công
        navigate("/home"); // Điều hướng tới trang home
      } else {
        throw new Error("Token không hợp lệ từ server.");
      }
    } catch (error) {
      console.error("Lỗi khi xử lý đăng nhập Google:", error.message);
      alert("Đăng nhập Google thất bại: " + error.message); // Thông báo lỗi cho người dùng
    }
  };

  // Render nút đăng nhập Google
  const renderGoogleButton = () => {
    window.google.accounts.id.renderButton(
      document.getElementById("google-login-btn"),
      {
        theme: "outline",
        size: "large",
      }
    );
  };

  return (
    <div>
      <h2>Đăng nhập với Google</h2>
      <div id="google-login-btn"></div> {/* Vùng chứa nút Google Login */}
    </div>
  );
};

export default LoginWithGoogle;
