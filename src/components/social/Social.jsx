import "./social.scss"

const Social = () => {
  return (
    <section className="socialSection">
      <div className="social">
        <div className="smallHeading">
          Join 1,500+ companies already video conferencing the ClearLink way
        </div>
        <div className="socialImages">
          <div className="imageSocial">
            <img src="/assets/Shopify.com-svg.svg" alt="shopify" />
          </div>
          <div className="imageSocial">
            <img src="/assets/Coinbase-svg.svg" alt="coinbase" />
          </div>
          <div className="imageSocial">
            <img src="/assets/Dropbox-svg.svg" alt="dropbox" />
          </div>
          <div className="imageSocial">
            <img src="/assets/Intercom-svg.svg" alt="intercom" />
          </div>
          <div className="imageSocial">
            <img src="/assets/Marvel-svg.svg" alt="marvel" />
          </div>
          <div className="imageSocial">
            <img src="/assets/Automattic-svg.svg" alt="automatic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social