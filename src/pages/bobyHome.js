import React from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/custom.css";
import "../assets/css/templatemo.css";
import "../assets/css/bootstrap.min.css";
import "../assets/img/apple-icon.png";
import "../assets/img/favicon.ico";
import post from "../assets/img/Homeimg1.jpg";
import car from "../assets/img/car9.jpg";

class bobyHome extends React.Component {
  render() {
    return (
      <>
        <section className="container  py-5">
          <div id="f123" className="row  pt-3  ">
            <a href="/store">
              <img src={post} alt="hinhHome" width="100%"></img>
            </a>
          </div>
          <div className="row text-center pt-3 mt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Các Mẫu Mới Nhập Khẩu</h1>
              <p>
                đầu tháng 3 vừa rồi các đại lý mới nhập thêm các mẫu Sedan, SUV,
                Hatchback
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="/store">
                <img
                  src={car}
                  alt="hinh anh"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h5 className="text-center mt-3 mb-3">Sedan</h5>
              <p className="text-center">
                <a className="btn btn-success" href="/store">
                  Go Store
                </a>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="/store">
                <img
                  src={car}
                  alt="hinh anh"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">SUV</h2>
              <p className="text-center">
                <a className="btn btn-success" href="/store">
                  Go Store
                </a>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="/store">
                <img
                  src={car}
                  alt="hinh anh"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Hatchback</h2>
              <p className="text-center">
                <a className="btn btn-success" href="/store">
                  Go Store
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light">
          <div className="container py-5">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">BÀI VIẾT</h1>
                <p>
                  Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={car} className="card-img-top" alt="..." />
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right">$240.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      Corolla Cross
                    </a>
                    <p className="card-text">
                      phiên bản nâng cấp 2023, bổ sung màu ngoại thất mới cho
                      mẫu xe Raize và tiếp tục tặng gói Gia hạn bảo hành cho một
                      số mẫu xe
                    </p>
                    <p className="text-muted">Reviews (24)</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={car} className="card-img-top" alt="..." />
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right">$480.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      Toyota Corolla Altis
                    </a>
                    <p className="card-text">
                      Toyota Corolla Altis hoàn toàn mới với diện mạo thể thao,
                      năng động cùng hàng loạt trang bị về an toàn và tiện nghi
                      mang lại hành trình an vui cho khách hàng.
                    </p>
                    <p className="text-muted">Reviews (48)</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={car} className="card-img-top" alt="..." />
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right">$360.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      TOYOTA WIGO
                    </a>
                    <p className="card-text">
                      chính thức giới thiệu Toyota Wigo 2020 với những cải tiến
                      vượt trội về mặt thiết kế và tiện nghi với giá bán vô cùng
                      hấp dẫn, hiện thực hóa giấc mơ sở hữu xe hơi của người dân
                      Việt Nam.
                    </p>
                    <p className="text-muted">Reviews (74)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default bobyHome;
