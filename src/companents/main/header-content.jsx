import { Button, Carousel, Flex } from "antd";
import { Icons } from "../../assets/icons";
import useLanguage from "../../hooks/useLanguage";
import TV from "../../assets/images/tv.svg";
import Machine from "../../assets/images/water-macine.svg";
import Iphone from "../../assets/images/iphone.svg";
const HeaderContent = () => {
    const contentStyle = {
        height: "160px",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    const translate = useLanguage();
    return (
        <div>
            <Flex className='header-content'>
                <div className='header-content_title'>
                    <h1>SAMSUNG</h1>
                    <span>50" QLED 4K Q60B</span>
                </div>

                <Button className='header-content_btn'>
                    {translate("all")}
                </Button>
                <div className='header-content_text'>
                    <p>
                        c рассрочкой 0% <div>0-0-12</div>
                    </p>
                </div>

                <div className='header-content_arrow'>
                    <Icons.leftArrow className='header-content_left-arrow' />
                    <Icons.rightArrow className='header-content_right-arrow' />
                </div>
                <div className='header-content-content'></div>
            </Flex>
            <div className='header-content_img'>
                <Carousel autoplay>
                    <div
                        className='header-content_img-one'
                        style={contentStyle}>
                        <img src={TV} alt='TV' />
                    </div>
                    <div
                        className='header-content_img-two'
                        style={contentStyle}>
                        <img src={Machine} alt='Machine' />
                    </div>
                    <div
                        className='header-content_img-three'
                        style={contentStyle}>
                        <img src={Iphone} alt='Iphone' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default HeaderContent;
