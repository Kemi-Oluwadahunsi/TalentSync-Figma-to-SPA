import "./advantage.scss"

const Advantage = () => {
  return (
    <div className="general">
      <div className="firstSection">
        <img className="arrow" src="/assets/Hand-drawn-arrow.svg" alt="arrow" />
        <h4>The ClearLink Advantage</h4>
        <h2 className="title">Why choose ClearLink?</h2>
        <p className="paragraph">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="secondSection">
        <div className="leftText">
          <div className="singleText">
            <div className="icon adjust">
              <img src="/assets/video-recorder-01.svg" alt="record" />
            </div>

            <div className="sub">
              <h3>Crystal-clear HD video</h3>
              <p>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
          </div>

          <div className="singleText">
            <div className="icon">
              <img src="/assets/recording-01.svg" alt="noise" />
            </div>

            <div className="sub">
              <h3>Noise-canceling audio</h3>
              <p>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
          </div>

          <div className="singleText">
            <div className="icon">
              <img src="/assets/calendar.svg" alt="calender" />
            </div>

            <div className="sub">
              <h3>Scheduling made easy</h3>
              <p>
                Streamline your agenda with ClearLink&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </p>
            </div>
          </div>

          <div className="singleText">
            <div className="icon">
              <img src="/assets/lock-unlocked-04.svg" alt="" />
            </div>

            <div className="sub">
              <h3 className="subHeadingCard">Bank-grade security</h3>
              <p>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </div>
        </div>

        <div className="rightImage">
          <img src="/assets/Rectangle-1.png" alt="grouppics" />
        </div>
      </div>
    </div>
  );
}

export default Advantage