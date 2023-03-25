import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Single_product from "./single_product";

function Shop() {
  const [persons, setPerson] = useState([
    { id: 0, hinh: "", hang: "", gia: "", ten: "" },
  ]);

  useEffect(() => {
    axios.get(`https://6380e309786e112fe1bd1aa5.mockapi.io/a`).then((res) => {
      const persons1 = res.data;
      setPerson(persons1);
    });
  }, []);

  const handlyphanloaiCamry = async () => {
    await axios
      .get(`https://6380e309786e112fe1bd1aa5.mockapi.io/a`)
      .then((res) => {
        const persons1 = res.data;
        let kq = persons1.filter((persons1) => {
          return persons1.id > 8;
        });
        setPerson(kq);
      });
  };
  const handlyphanloaiVios = async () => {
    await axios
      .get(`https://6380e309786e112fe1bd1aa5.mockapi.io/a`)
      .then((res) => {
        const persons1 = res.data;
        let kq = persons1.filter((persons1) => {
          return persons1.id > 0;
        });
        setPerson(kq);
      });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  onClick={handlyphanloaiCamry}
                >
                  Camry
                </Link>

                <li>
                  <Link
                    className="collapsed d-flex justify-content-between h3  text-decoration-none"
                    onClick={handlyphanloaiVios}
                  >
                    Vios
                  </Link>
                </li>
                <li>
                  <Link className="collapsed d-flex justify-content-between h3  text-decoration-none">
                    Innova
                  </Link>
                </li>
                <li>
                  <Link className="collapsed d-flex justify-content-between h3  text-decoration-none">
                    Corolla Cross
                  </Link>
                </li>
                <li>
                  <Link className="collapsed d-flex justify-content-between h3  text-decoration-none">
                    Corolla Altis
                  </Link>
                </li>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              {/* <div className="col-md-4">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src={persons[0].hinh}
                      alt=""
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      {persons[0].id}
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                      </li>
                    </ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src={car}
                      alt=""
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                    </ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src={persons[0].hinh}
                      alt=""
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      {persons[0].hang}
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>{persons[0].ten}</li>
                    </ul>
                    <p className=" mb-0">{persons[0].mau}</p>
                    <p className="text-center mb-0">{"$" + persons[0].gia}</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src="assets/img/shop_04.jpg"
                    alt=""
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="h3 text-decoration-none">
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div> */}

              {/* su dung api de tao the */}
              {persons.map((val, key) => {
                return (
                  <div key={key} className="col-md-4">
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          src={val.hinh}
                          alt=""
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="btn btn-success text-white mt-2"
                                to={"/shop-single/" + val.id}
                              >
                                <i className="far fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="btn btn-success text-white mt-2">
                                <i className="fas fa-cart-plus"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <a
                          href="shop-single.html"
                          className="h3 text-decoration-none"
                        >
                          {val.id}
                        </a>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                          <li>M/L/X/XL</li>
                          <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                          </li>
                        </ul>
                        <p className="text-center mb-0">$250.00</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <a
                    className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    href="/"
                    tabIndex="-1"
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#1"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    href="/"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
