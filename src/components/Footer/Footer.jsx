import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">

          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2021 All Rights Reserved
                <a href="#">Go Up</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                   Контакты в соц.сетях
                  <a
                    class="facebook"
                    href="https://www.facebook.com/videos?campaign_id=1669307470&extra_1=s%7Cc%7C518873133502%7Ce%7Cfacebook%7C&placement=&creative=518873133502&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1669307470%26adgroupid%3D63446529566%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1009827%26loc_interest_ms%3D1012054%26feeditemid%3D65630132266%26param1%3D%26param2%3D&gclid=Cj0KCQiAnuGNBhCPARIsACbnLzpANbWxYKVfS29cXDdgC3EYmDr_Of-o-ohu2FIqmEO9kd-kb3gPIJEaAgXdEALw_wcB"
                  >
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-256.png"
                      alt=""
                    />
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="https://twitter.com/?lang=ru">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-256.png"
                      alt=""
                    />
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="https://www.instagram.com">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-256.png"
                      alt=""
                    />
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="https://web.telegram.org/z/">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/Telegram-256.png"
                      alt=""
                    />
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
