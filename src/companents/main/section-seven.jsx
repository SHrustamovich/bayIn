import headphone from "../../assets/images/headphone.svg";
import keyboard from "../../assets/images/keyboard.svg";
import samsung from "../../assets/images/samsung.svg";
import watch from "../../assets/images/watch.svg";
const SectionSeven = () => {
  return (
    <div className="section-seven">
        <div className="section-seven_card">
            <div className="section-seven_card_one">
                <p className="section-seven_card_one-title">HyperX</p>
                <span className="section-seven_card_one-text">gaming gear
                 <p>brand</p></span>
                    <div className="section-seven_card_one-img-one">
                        <img src={headphone} alt="headphone" />
                    </div>
                    <div className="section-seven_card_one-img-two">
                        <img src={keyboard} alt="headphone" />
                    </div>
                    <div className="section-seven_card-two">
                        <p className="section-seven_card-two-title">SAMSUNG</p>
                        <span className="section-seven_card-two-text">gear brand</span>
                    </div>
                    <div className="section-seven_card-two-img-one">
                        <img src={samsung} alt="samsung" />
                    </div>
                    <div className="section-seven_card-two-img-two">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="section-seven_card_three">
                        <p className="section-seven_card_three-title">HyperX</p>
                        <span className="section-seven_card_three-text">gaming gear <p>brand</p></span>
                    </div>
                    <div className="section-seven_card_three-img-one">
                        <img src={headphone} alt="headphone" />
                    </div>
                    <div className="section-seven_card_three-img-two">
                        <img src={keyboard} alt="keyboard" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSeven
