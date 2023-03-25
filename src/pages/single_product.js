import { useParams } from "react-router";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Single_product(prors) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6380e309786e112fe1bd1aa5.mockapi.io/a/${id}`)
      .then((res) => {
        const data = res.data;
        setProduct(data);
      });
  }, []);
  return (
    <>
      <section class="bg-light">
        <div class="container pb-5">
          <div class="row">
            <div class="col-lg-5 mt-5">
              <div class="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={product.hinh}
                  alt="Card"
                />
              </div>
            </div>

            <div class="col-lg-7 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="h2">{product.ten}</h1>
                  <p class="h3 py-2">{product.gia}</p>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li class="list-inline-item">
                      <p class="text-muted">
                        <strong>{product.hang}</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod temp incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse. Donec condimentum elementum
                    convallis. Nunc sed orci a diam ultrices aliquet interdum
                    quis nulla.
                  </p>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <h6>Avaliable Color :</h6>
                    </li>
                    <li class="list-inline-item">
                      <p class="text-muted">
                        <strong>White / Black</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Specification:</h6>
                  <ul class="list-unstyled pb-3">
                    <li>Lorem ipsum dolor sit</li>
                    <li>Amet, consectetur</li>
                    <li>Adipiscing elit,set</li>
                    <li>Duis aute irure</li>
                    <li>Ut enim ad minim</li>
                    <li>Dolore magna aliqua</li>
                    <li>Excepteur sint</li>
                  </ul>

                  <form action="" method="GET">
                    <input
                      type="hidden"
                      name="product-title"
                      value="Activewear"
                    />
                    <div class="row">
                      <div class="col-auto">
                        <ul class="list-inline pb-3">
                          <li class="list-inline-item">
                            Size :
                            <input
                              type="hidden"
                              name="product-size"
                              id="product-size"
                              value="S"
                            />
                          </li>
                          <li class="list-inline-item">
                            <span class="btn btn-success btn-size">S</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="btn btn-success btn-size">M</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="btn btn-success btn-size">L</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="btn btn-success btn-size">XL</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row pb-3">
                      <div class="col d-grid">
                        <button
                          type="submit"
                          class="btn btn-success btn-lg"
                          name="submit"
                          value="buy"
                        >
                          Buy
                        </button>
                      </div>
                      <div class="col d-grid">
                        <button
                          type="submit"
                          class="btn btn-success btn-lg"
                          name="submit"
                          value="addtocard"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {console.log(product)}
    </>
  );
}
