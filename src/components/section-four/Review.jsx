import "./review.scss";

const Review = () => {
  return (
    <div className="reviewBody">
      <div className="reviewContainer">
        <div className="first">
          <img
            src="/assets/Shopify.com-svg.svg"
            alt="shopify-image"
            width={120}
          />

          <div className="stars2">
            <div className="colored-stars">
              <img
                src="/assets/Star.svg"
                alt="Colored Star"
                className="colored-star"
              />

              <img
                src="/assets/Star.svg"
                alt="Colored Star"
                className="colored-star"
              />

              <img
                src="/assets/Star.svg"
                alt="Colored Star"
                className="colored-star"
              />

              <img
                src="/assets/Star.svg"
                alt="Colored Star"
                className="colored-star"
              />

              <img
                src="/assets/Star.svg"
                alt="Colored Star"
                className="colored-star"
              />
            </div>
          </div>

          <div className="paraText">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </div>

          <div className="sarahThompson">
            <div className="managerDetails">
              <img src="/assets/Sarah.png" alt="sarah" />
              <div className="position">
                <div className="name">Sarah Thompson</div>
                <div className="role">Project Manager, Shopify</div>
              </div>
            </div>

            <div className="arrows">
              <div className="leftArrow">
                <img src="/assets/arrow-left.svg" alt="arrow-left" />
              </div>
              <div className="rightArrow">
                <img src="/assets/arrow-right.svg" alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>

        <div className="secondImage">
          <div className="row1">
            <img src="/assets/Image.png" alt="blackshirt" className="blackshirt"/>
            <img src="/assets/Image-2.png" alt="earphone" />
          </div>

          <div className="row2">
            <img src="/assets/Image-3.png" alt="library" className="library"/>
            <img src="/assets/Image-4.png" alt="twoLadies" />
            <img src="/assets/Image-5.png" alt="programmer" className="program" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
