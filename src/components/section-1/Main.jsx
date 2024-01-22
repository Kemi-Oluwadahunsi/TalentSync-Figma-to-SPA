import "./main.scss"
import Header from "../header/Header"


const Main = () => {
  return (
    <div className="main">
      <Header />

      <div className="miniMain">
        <div className="leftText">
          <div className="uniqueText">
            <h1>
              Uniting the world, <br /> one video call at a time
            </h1>
            <p>
              Experience the future of communication with ClearLink{" "}
              <span>-</span> where crystal-clear video conferencing meet
              unparalleled simplicity.
            </p>
          </div>
          <div className="trial">
            <button className="btn">Start your free trial</button>
            <img className="robot" src="/assets/Frame-10.svg" alt="robot" />
            <span className="ai">Discover AI assistant</span>
          </div>

          <div className="reviews">
            <div className="roundImages">
              <div className="image">
                <img src="/assets/Avatar.png" alt="man1" />
              </div>

              <div className="image">
                <img src="/assets/Avatar-1.png" alt="man2" />
              </div>

              <div className="image">
                <img src="/assets/Avatar-2.png" alt="woman3" />
              </div>

              <div className="image">
                <img src="/assets/Avatar-3.png" alt="man4" />
              </div>

              <div className="image">
                <img src="/assets/Avatar-4.png" alt="man5" />
              </div>
            </div>

            <div className="left">
              <div className="star-container">
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
                <span>5.0</span>
              </div>

              <div className="review">from 3,000+ reviews</div>
            </div>
          </div>
        </div>

        <div className="imagesContainer">
          <div className="images">
            <div className="singleImage orange-dark">
              <img src="/assets/image21.png" alt="" />
            </div>

            <div className="singleImage primary">
              <img src="/assets/image100.png" alt="" />
            </div>

            <div className="singleImage moss">
              <img src="/assets/image8.png" alt="" />
            </div>

            <div className="singleImage gray-blue">
              <img src="/assets/image72.png" alt="hijabLady" />
            </div>

            <div className="singleImage warning">
              <img src="/assets/image108.png" alt="blackManBeard" width={160} />
            </div>

            <div className="singleImage rose">
              <img src="/assets/image103.png" alt="" />
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="/assets/microphone-01.svg" alt="microphone" />
            </div>
            <div className="icon">
              <img src="/assets/video-recorder.svg" alt="recorder" />
            </div>
            <div className="icon">
              <img src="/assets/monitor-01.svg" alt="monitor" />
            </div>
            <div className="icon">
              <img src="/assets/face-smile.svg" alt="smiley" />
            </div>
            <div className="icon">
              <img src="/assets/message-text-circle-02.svg" alt="chat" />
            </div>
            <div className="icon">
              <img src="/assets/settings-01.svg" alt="settings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main