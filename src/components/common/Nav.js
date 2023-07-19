// Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (

    <div>

{/* booking now! modal */}

<div class="modal fade bd-example-modal-xl" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Header</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



{/* booking now modal end */}



    <div class="untree_co--site-wrap">
      <nav class="untree_co--site-nav js-sticky-nav">
        <div class="container d-flex align-items-center">
          <div class="logo-wrap">
      <Link to={"/"} class="untree_co--site-logo">
              Cloud Hotel
              </Link>
          </div>
          <div class="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul class="site-nav-ul js-clone-nav">
              <li class="active">
                <Link to={"/"}>Home</Link>
              </li>
              <li class="has-children">
                <Link to={"/room"}>Room</Link>
                <ul class="dropdown">
                  <li class="has-children">
                    <a href="#">King Bedroom</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">King Bedroom</a>
                      </li>
                      <li>
                        <a href="#">Queen &amp; Double Bedroom</a>
                      </li>
                      <li>
                        <a href="#">Le Voila Suite</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Queen &amp; Double Bedroom</a>
                  </li>
                  <li>
                    <a href="#">Le Voila Suite</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/amenities"}>Amenities</Link>
              </li>
              <li>
                <Link to={"/package"}>Package</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>

  {/* <!-- Trigger the modal with a button --> */}
  <Link class="navBooking" data-toggle="modal" data-target="#myModal">Booking Now !</Link>
  
              </li>
            </ul>
          </div>


          {/* <!-- Extra large modal --> */}
{/* <div class="modal fade bd-example-modal-xl" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Booking Now</h2>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        booking
      </div>
    </div>
  </div>
</div> */}






          <div class="icons-wrap text-md-right">
            <ul class="icons-top d-none d-lg-block">
              <li class="mr-4">
                <a href="#" class="js-search-toggle">
                  <span class="icon-search2"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-instagram"></span>
                </a>
              </li>
            </ul>

            {/* <!-- Mobile Toggle --> */}
            <a
              href="#"
              class="d-block d-lg-none burger js-menu-toggle"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
      <nav class="untree_co--site-mobile-menu">
        <div class="close-wrap d-flex">
          <a href="#" class="d-flex ml-auto js-menu-toggle">
            <span class="close-label">Close</span>
            <div class="close-times">
              <span class="bar1"></span>
              <span class="bar2"></span>
            </div>
          </a>
        </div>
        <div class="site-mobile-inner"></div>
      </nav>
    </div>
    </div>
  );
}

export default Nav;
