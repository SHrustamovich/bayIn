import useLanguage from "../../hooks/useLanguage"
import Iphone from "../../assets/images/iphone.svg"
import tv from "../../assets/images/tv.svg"
import Machine from "../../assets/images/water-macine.svg"
const SectionOne = () => {
    const translate = useLanguage()
  return (
<div className="section-one">
       <div className='section-one_card-one'>
            <h3 className="section-one_card-one_title">{translate("phone")}</h3>
            <p className="section-one_card-one_text">{translate("best")}</p>
            <div className="section-one_card-one_img">
                <img src={Iphone} alt="Iphone" />
                <div className="section-one_content"></div>
            </div>
        </div>
        <div className='section-one_card-one'>
            <h3 className="section-one_card-one_title">{translate("tv")}</h3>
            <p className="section-one_card-one_text">{translate("home")}</p>
            <div className="section-one_card-two_img">
                <img src={tv} alt="Iphone" />    
            </div>
            <div className="section-one_content-two"></div>
        </div>
        <div className='section-one_card-three'>
            <h3 className="section-one_card-two_title">{translate("machine")}</h3>
            <p className="section-one_card-two_text">{translate("home")}</p>
            <div className="section-one_card-three_img">
                <img src={Machine} alt="Iphone" />    
            </div>
            <div className="section-one_content-three"></div>
        </div>
        <div className='section-one_card-three'>
            <h3 className="section-one_card-two_title">{translate("machine")}</h3>
            <p className="section-one_card-two_text">{translate("home")}</p>
            <div className="section-one_card-three_img">
                <img src={Machine} alt="Iphone" />    
            </div>
            <div className="section-one_content-three"></div>
        </div>
        <div className='section-one_card-one'>
            <h3 className="section-one_card-one_title">{translate("phone")}</h3>
            <p className="section-one_card-one_text">{translate("best")}</p>
            <div className="section-one_card-one_img">
                <img src={Iphone} alt="Iphone" />
                <div className="section-one_content"></div>
            </div>
        </div>
        <div className='section-one_card-one'>
            <h3 className="section-one_card-one_title">{translate("tv")}</h3>
            <p className="section-one_card-one_text">{translate("home")}</p>
            <div className="section-one_card-two_img">
                <img src={tv} alt="Iphone" />    
            </div>
            <div className="section-one_content-two"></div>
        </div>
</div>
  )
}

export default SectionOne
