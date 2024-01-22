
import "./communication.scss"

const Communication = () => {
  return (
    <div className="generalPlanSection">
      <div className="leftPlan">
        <h2 className="subHeading1">
          Ready to clear the path to perfect communication?
        </h2>
        <div className="planSection">
          <div className="plan">
            <img src="/assets/check-circle.svg" alt="check-icon" />
            <p>30 days free trial</p>
          </div>

          <div className="plan">
            <img src="/assets/check-circle.svg" alt="check-icon" />
            <p>Cancel at any time</p>
          </div>

          <div className="plan">
            <img src="/assets/check-circle.svg" alt="check-icon" />
            <p>Access to all features</p>
          </div>

          <div className="plan">
            <img src="/assets/check-circle.svg" alt="check-icon" />
            <p>Peronalized onboarding</p>
          </div>
        </div>

        <div className="navButtons">
          <button className="talkButton">Talk to sales</button>
          <button className="signUpButton">Start your free trial</button>
        </div>
      </div>

      <div className="imageRight">
        <div className="callImage">
          <img src="/assets/Screen-mockup.png" alt="sideCallImage" className="sideCallImage" width={823} height={540}/>
        </div>
      </div>
    </div>
  );
}

export default Communication