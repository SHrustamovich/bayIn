import { Link } from "react-router-dom";
import { cardPageTwo } from "../../../constants/menu";
import { Icons } from "../../../assets/icons";
import { Button } from "antd";

const CardsTwo = () => {
    return (
        <div className='cards-two'>
            {cardPageTwo.map((item) => (
                <Link to={item.path} key={item.id}>
                    <div className='sport-page_cards-all-two'>
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
                    </div>
                </Link>
            ))}
            {cardPageTwo.map((item) => (
                <div className='sport-page_cards-all-two' key={item.id}>
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
            {cardPageTwo.map((item) => (
                <div className='sport-page_cards-all-two' key={item.id}>
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
            {cardPageTwo.map((item) => (
                <div className='sport-page_cards-all-two' key={item.id}>
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
            {cardPageTwo.map((item) => (
                <div className='sport-page_cards-all-two' key={item.id}>
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

export default CardsTwo;
