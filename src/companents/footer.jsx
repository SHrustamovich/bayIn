import market from "../assets/images/play-market.svg"
import store from "../assets/images/app-store.svg"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-title">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="footer-text">
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
        </div>
        <div className="footer-title-two">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="footer-text-two">
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
        </div>
        <div className="footer-title-three">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="footer-text-three">
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
        </div>
        <div className="footer-title-four">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="footer-text-four">
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
        </div>
        <div className="footer-title-five">
            <h3>Lorem Ipsum</h3>
        </div>
        <div className="footer-text-five">
            <p className="footer-text-one">Lorem Ipsum</p>
            <p className="footer-text-one">Lorem Ipsum</p>
        </div>
        <div className="footer-title-six">
            <h3>Available on</h3>
        </div>
        <div className="footer-img-six">
            <img src={market} alt="play market" />
        </div>
        <div className="footer-img-two-six">
                <img src={store} alt="app store" />
            </div>
            <div className="footer-last-title">
                <span>2022 - BuyIn - The most famous e-commerce website in Uzbekistan since in 2022</span>
            </div>
    </div>
  )
}

export default Footer
