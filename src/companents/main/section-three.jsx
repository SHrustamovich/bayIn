import { Icons } from "../../assets/icons"
import background from "../../assets/images/bg.svg"
import Christmas from "../../assets/images/christmas.svg"
import Gift from "../../assets/images/gift.svg"
import Illustration from "../../assets/images/illustration.svg"
const SectionThree = () => {
  return (
    <div className="section-three">
        <div className="section-three_img">
            <img src={background} alt="bg" />
            <Icons.redStar className="section-three_img_star-one"/>
            <Icons.orangeStar className="section-three_img_star-two"/>
            <Icons.yellowStar className="section-three_img_star-three"/>
            <Icons.greenStar className="section-three_img_star-four"/>
            <Icons.blackStar className="section-three_img_star-five"/>
            <Icons.crimsonStar className="section-three_img_star-six"/>
        </div>
        <div className="section-three_title">
            <span>Товары для нового года</span>
        </div>
        <div className="section-three_images">
            <div className="section-three_image-one">
                <img src={Christmas} alt="yangi yil" />
            </div>
            <div className="section-three_image-two">
                <img src={Gift} alt="gift" />
            </div>
            <div className="section-three_image-three">
                <img src={Illustration} alt="illustration" />
            </div>
            <div className="section-three_image-four">
                    <img src={Illustration} alt="illustration" />
                </div>
        </div>
        <div className="section-three_img-two">
            <img src={background} alt="bg" />
            <Icons.redStar className="section-three_img_star-one"/>
            <Icons.orangeStar className="section-three_img_star-two"/>
            <Icons.yellowStar className="section-three_img_star-three"/>
            <Icons.greenStar className="section-three_img_star-four"/>
            <Icons.blackStar className="section-three_img_star-five"/>
            <Icons.crimsonStar className="section-three_img_star-six"/>
        </div>
        <div className="section-three_title-two">
            <span>Товары для нового года</span>
        </div>
    </div>
  )
}

export default SectionThree
