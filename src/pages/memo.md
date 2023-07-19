


    $('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});






    // $(document).on('click', '.modalRoom', function(e){
    //   e.preventDefault();  
    // $(modal-backdrop).fade(hide);
    // });











          {/* 푸터 시작 */}
          <footer className="untree_co--site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 pr-md-5">
                  <h3>About Us</h3>
                  <p>
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                  <p>
                    <a href="#" className="readmore">
                      Read more
                    </a>
                  </p>
                </div>
                <div className="col-md-8 ml-auto">
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Navigation</h3>
                      <ul className="list-unstyled">
                        <li>
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/room"}>Room</Link>
                        </li>
                        <li>
                          <Link to={"/amenities"}>Amenities</Link>
                        </li>
                        <li>
                          <Link to={"/gallery"}>Gallery</Link>
                        </li>
                        <li>
                          <Link to={"/about"}>About Us</Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-9 ml-auto">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <h3>Address</h3>
                          <address>
                            273 South Riverview Rd. <br /> New York, NY 10011
                          </address>
                        </div>
                        <div className="col-md-6">
                          <h3>Telephone</h3>
                          <p>
                            <a href="#">+1 234 5678 910</a> <br />
                            <a href="#">+2 234 5678 910</a>
                          </p>
                        </div>
                      </div>

                      <h3 className="mb-0">Join our newsletter</h3>
                      <p>Be the first to know our latest updates and news!</p>
                      <form action="#" method="" className="form-subscribe">
                        <div className="form-group d-flex">
                          <input
                            type="email"
                            className="form-control mr-2"
                            placeholder="Enter your email"
                          />
                          <input
                            type="submit"
                            value="Subscribe"
                            className="btn btn-black px-4 text-white"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 pt-5 align-items-center">
                <div className="col-md-6 text-md-left">
                  {/* <!-- Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. --> */}
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    <a href="index.html">Untree.co</a>. All Rights Reserved.
                    Design by{" "}
                    <a
                      href="https://untree.co/"
                      target="_blank"
                      className="text-primary"
                    >
                      Untree.co
                    </a>
                  </p>
                  {/* <!-- Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. --> */}
                </div>
                <div className="col-md-6 text-md-right">
                  <ul className="icons-top icons-dark">
                    <li>
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-tripadvisor"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          {/* <!-- Search --> */}
          <div className="search-wrap">
            <a href="#" className="close-search js-search-toggle">
              <span>Close</span>
            </a>
            <div className="container">
              <div className="row justify-content-center align-items-center text-center">
                <div className="col-md-12">
                  <form action="#">
                    <input
                      type="search"
                      name="s"
                      id="s"
                      placeholder="Type a keyword and hit enter..."
                      autocomplete="false"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* 푸터 끝 */}