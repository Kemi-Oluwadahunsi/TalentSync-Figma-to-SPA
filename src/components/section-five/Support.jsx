import "./support.scss"

const Support = () => {
  return (
    <div className="outerSection">
      <div className="innerSection">
        <div className="sectionLeft">
          <div className="support">Support</div>
          <div className="faq">FAQs</div>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please <span className="underline">chat to our friendly team.</span>
          </p>
        </div>

        <div className="sectionRight">
          <div className="firstSectionHead">
            <div className="questions">
              <h3>
                How many participants can join a ClearLink video conference?
              </h3>
              <p className="faqParagraph">
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <img src="/assets/minus-circle.svg" alt="minus-circle" />
          </div>

          <div className="secondSectionQuestions">
            <div className="faqQuestions border-line">
              <h3>Can I use ClearLink on multiple devices?</h3>
              <img src="/assets/plus-circle.svg" alt="plus" />
            </div>

            <div className="faqQuestions border-line">
              <h3>
                Is ClearLink compatible with other video conferencing platforms?
              </h3>
              <img src="/assets/plus-circle.svg" alt="plus" />
            </div>

            <div className="faqQuestions border-line">
              <h3>
                How does ClearLink ensure the security of my video conferences?
              </h3>
              <img src="/assets/plus-circle.svg" alt="plus" />
            </div>

            <div className="faqQuestions border-line">
              <h3>Do I need to download any software to use ClearLink?</h3>
              <img src="/assets/plus-circle.svg" alt="plus" />
            </div>

            <div className="faqQuestions">
              <h3>What kind of customer support does ClearLink provide?</h3>
              <img src="/assets/plus-circle.svg" alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support