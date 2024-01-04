import { Button } from "antd"
import useLanguage from "../../hooks/useLanguage"
import samsungImg from "../../assets/images/samsung-img.svg"
import apple from "../../assets/images/apple.svg"
import xiaomi from "../../assets/images/xiaomi.svg"
import huawei from "../../assets/images/hiawei.svg"
import honor from "../../assets/images/honor.svg"
import { Icons } from "../../assets/icons"
const sectionFive = () => {
    const translate = useLanguage()
  return (
    <div className="section-five">
        <Button className="section-four_btn">{translate('brend')}</Button>
        <div className="section-five_brend">
                <div className="section-five_brend_img">
                    <img src={samsungImg} alt="samsung" />
                </div>
            <div className="section-five_brend_img-two">
                <img src={apple} alt="apple" />
            </div><span>APPLE</span>
            <div className="section-five_brend_img-three">
                 <img src={xiaomi} alt="xiaomi" />
            </div>
            <div className="section-five_brend_img-two">
                <img src={huawei} alt="huawei"/>
            </div><span className="section-five_brend_span">HUAWEI</span>
            <div className="section-five_brend_img-five">
                <img src={honor} alt="honor" />
            </div>
            <div className="section-five_brend_img-six">
                    <img src={samsungImg} alt="samsung" />
                </div>
                <div className="section-five_brend_img-seven">
                 <img src={xiaomi} alt="xiaomi" />
            </div>
            <div className="section-five_brend_img-two">
                <img src={huawei} alt="huawei"/>
            </div><span className="section-five_brend_span">HUAWEI</span>
            <div className="section-five_brend_img-five">
                <img src={honor} alt="honor" />
            </div>
            <div className="section-five_brend_img-ten">
                    <img src={samsungImg} alt="samsung" />
                </div>
                <div className="section-five_brend_img-two">
                <img src={apple} alt="apple" />
            </div><span>APPLE</span>
            <div className="section-five_brend_img-twelve">
                    <img src={samsungImg} alt="samsung" />
                </div>
                <Button className="section-five_btn-two"><Icons.more className="section-two_more"/>
           <span>{translate("more")}</span>
        </Button>
        </div>
    </div>
  )
}

export default sectionFive