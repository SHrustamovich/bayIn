import { Link } from "react-router-dom";
import { cardPage } from "../../../constants/menu";
import { Icons } from "../../../assets/icons";
import { Button } from "antd";

const CardsOne = () => {
    return (
        <div className='cards-one'>
            {cardPage.map((item) => (
                <Link to={item.path} key={item.id}>
                    <div className='sport-page_cards-all-one'>
                        <div className='sport-page_cards-all-one-icon'>
                            {item.icon}
                        </div>
                        <div className='sport-page_cards-all-one_img'>
                            <img src={item.img} alt='img' />
                        </div>
                        <p className='sport-page_cards-all-one_title'>
                            {item.title}
                        </p>
                        <div className='sport-page_cards-all-one_stars'>
                            <Icons.fillStar />
                            <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                            <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                            <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                            <Icons.star className='sport-page_cards-all-one_stars-two' />
                            <span>{item.starSpan}</span>
                        </div>
                        <div className='sport-page_cards-all-one_checks'>
                            {item.starCheckbox}
                            <span>{item.span}</span>
                        </div>
                        <Button className='sport-page_cards-all-one_btn'>
                            {item.btn}
                        </Button>

                        <span className='sport-page_cards-all-one_span'>
                            {item.btnSpan_ru}
                        </span>
                        <div className='sport-page_cards-all-one_money'>
                            {item.money}
                        </div>
                    </div>{" "}
                </Link>
            ))}
            {cardPage.map((item) => (
                <div className='sport-page_cards-all-one' key={item.id}>
                    <Link to='/trainers'>
                        <div className='sport-page_cards-all-one-icon'>
                            {item.icon}
                        </div>
                        <div className='sport-page_cards-all-two_img'>
                            <img src={item.img} alt='img' />
                        </div>
                        <p className='sport-page_cards-all-two_title'>
                            {item.title}
                        </p>
                        <div className='sport-page_cards-all-two_items'>
                            <div className='sport-page_cards-all-one_stars'>
                                <Icons.fillStar />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.star className='sport-page_cards-one_all-stars-two' />
                                <span>{item.starSpan}</span>
                            </div>
                            <div className='sport-page_cards-all-one_checks'>
                                {item.starCheckbox}
                                <span>{item.span}</span>
                            </div>
                            <Button className='sport-page_cards-all-one_btn'>
                                {item.btn}
                            </Button>
                            <span className='sport-page_cards-all-one_span'>
                                {item.btnSpan_ru}
                            </span>
                            <div className='sport-page_cards-all-one_money'>
                                {item.money}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {cardPage.map((item) => (
                <div className='sport-page_cards-all-one' key={item.id}>
                    <Link to='/trainers'>
                        <div className='sport-page_cards-all-one-icon'>
                            {item.icon}
                        </div>
                        <div className='sport-page_cards-all-two_img'>
                            <img src={item.img} alt='img' />
                        </div>
                        <p className='sport-page_cards-all-two_title'>
                            {item.title}
                        </p>
                        <div className='sport-page_cards-all-two_items'>
                            <div className='sport-page_cards-all-one_stars'>
                                <Icons.fillStar />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.star className='sport-page_cards-one_all-stars-two' />
                                <span>{item.starSpan}</span>
                            </div>
                            <div className='sport-page_cards-all-one_checks'>
                                {item.starCheckbox}
                                <span>{item.span}</span>
                            </div>
                            <Button className='sport-page_cards-all-one_btn'>
                                {item.btn}
                            </Button>
                            <span className='sport-page_cards-all-one_span'>
                                {item.btnSpan_ru}
                            </span>
                            <div className='sport-page_cards-all-one_money'>
                                {item.money}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {cardPage.map((item) => (
                <div className='sport-page_cards-all-one' key={item.id}>
                    <Link to='/trainers'>
                        <div className='sport-page_cards-all-one-icon'>
                            {item.icon}
                        </div>
                        <div className='sport-page_cards-all-two_img'>
                            <img src={item.img} alt='img' />
                        </div>
                        <p className='sport-page_cards-all-two_title'>
                            {item.title}
                        </p>
                        <div className='sport-page_cards-all-two_items'>
                            <div className='sport-page_cards-all-one_stars'>
                                <Icons.fillStar />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.star className='sport-page_cards-one_all-stars-two' />
                                <span>{item.starSpan}</span>
                            </div>
                            <div className='sport-page_cards-all-one_checks'>
                                {item.starCheckbox}
                                <span>{item.span}</span>
                            </div>
                            <Button className='sport-page_cards-all-one_btn'>
                                {item.btn}
                            </Button>
                            <span className='sport-page_cards-all-one_span'>
                                {item.btnSpan_ru}
                            </span>
                            <div className='sport-page_cards-all-one_money'>
                                {item.money}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {cardPage.map((item) => (
                <div className='sport-page_cards-all-one' key={item.id}>
                    <Link to='/trainers'>
                        <div className='sport-page_cards-all-one-icon'>
                            {item.icon}
                        </div>
                        <div className='sport-page_cards-all-two_img'>
                            <img src={item.img} alt='img' />
                        </div>
                        <p className='sport-page_cards-all-two_title'>
                            {item.title}
                        </p>
                        <div className='sport-page_cards-all-two_items'>
                            <div className='sport-page_cards-all-one_stars'>
                                <Icons.fillStar />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.fillStar className='sport-page_cards-all-one_stars-two' />
                                <Icons.star className='sport-page_cards-one_all-stars-two' />
                                <span>{item.starSpan}</span>
                            </div>
                            <div className='sport-page_cards-all-one_checks'>
                                {item.starCheckbox}
                                <span>{item.span}</span>
                            </div>
                            <Button className='sport-page_cards-all-one_btn'>
                                {item.btn}
                            </Button>
                            <span className='sport-page_cards-all-one_span'>
                                {item.btnSpan_ru}
                            </span>
                            <div className='sport-page_cards-all-one_money'>
                                {item.money}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CardsOne;
