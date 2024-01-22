import "./footer.scss";

const Footer = () => {
  return (
    <div className="generalFooter">
      <div className="footer1">
        <div className="innerFooter">
          <div className="logoParagraph">
            <div className="logo">
              <img src="/assets/Group.png" alt="logo" />
              <div className="text">
                ClearLink
                <span>.</span>
              </div>
            </div>
            <p className="footerText">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>

          <div className="clickableLinks">
            <div className="linksLine">
              <h5 className="footerHeader">Product</h5>
              <ul className="linkSingle">
                <a href="">
                  <li>Overview</li>
                </a>

                <a href="">
                  <li>Features</li>
                </a>

                <a href="">
                  <li>Solutions</li>
                </a>

                <a href="">
                  <li>Tutorials</li>
                </a>

                <a href="">
                  <li>Pricing</li>
                </a>
              </ul>
            </div>

            <div className="linksLine">
              <h5 className="footerHeader">Company</h5>
              <ul className="linkSingle">
                <a href="">
                  <li>About us</li>
                </a>

                <a href="">
                  <li>Careers</li>
                </a>

                <a href="">
                  <li>Press</li>
                </a>

                <a href="">
                  <li>News</li>
                </a>

                <a href="">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className="linksLine">
              <h5 className="footerHeader">Resources</h5>
              <ul className="linkSingle">
                <a href="">
                  <li>Blog</li>
                </a>

                <a href="">
                  <li>Events</li>
                </a>

                <a href="">
                  <li>Help centre</li>
                </a>

                <a href="">
                  <li>Tutorials</li>
                </a>

                <a href="">
                  <li>Support</li>
                </a>
              </ul>
            </div>

            <div className="linksLine">
              <h5 className="footerHeader">Legal</h5>
              <ul className="linkSingle">
                <a href="">
                  <li>Terms</li>
                </a>

                <a href="">
                  <li>Privacy</li>
                </a>

                <a href="">
                  <li>Cookies</li>
                </a>

                <a href="">
                  <li>Licenses</li>
                </a>

                <a href="">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className="linksLine">
              <h5 className="footerHeaderLast">Get the app</h5>
              <img src="/assets/Mobile-app-store-badge-1.svg" alt="App store" />

              <div className="google">
                <img
                  src="/assets/Mobile-app-store-badge-2.svg"
                  alt="Google play"
                />

                <div className="googleText">
                  <img src="/assets/Get-it-on.svg" alt="Google play" />

                  <img src="/assets/Google-Play.svg" alt="Google play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="copyright">
          <div className="year">© 2023 ClearLink. All rights reserved.</div>
          <div className="socialPlatforms">
            <img src="/assets/LinkedIn.svg" alt="linkedin" />
            <img src="/assets/X.svg" alt="twitter" />
            <img src="/assets/Facebook.svg" alt="facebook" />
            <img src="/assets/Instagram.svg" alt="instagram" />
            <img src="/assets/GitHub.svg" alt="github" />
            <img src="/assets/Lozenge.svg" alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
