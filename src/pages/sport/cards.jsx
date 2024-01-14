import { Button, Select } from "antd";
import { Icons } from "../../assets/icons";

import {
    cardPage,
    cardPageFour,
    cardPageThree,
    cardPageTwo,
} from "../../constants/menu";
import useLanguage from "../../hooks/useLanguage";
import { Link } from "react-router-dom";

const Cards = () => {
    const translate = useLanguage();

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='sport-page_cards'>
            <div className='sport-page_cards-items'>
                <Button className='sport-page_cards-items-btn'>
                    Неважно
                    <Icons.finishBtn className='sport-page_cards-items-btn-icon' />
                </Button>
                <Button className='sport-page_cards-items-btn-two'>
                    Adidas
                    <Icons.finishBtn className='sport-page_cards-items-btn-icon' />
                </Button>
                <Button className='sport-page_cards-items-btn-two'>
                    30
                    <Icons.finishBtn className='sport-page_cards-items-btn-icon' />
                </Button>
                <a href='#'>Очистить все</a>
                <div className='sport-page_cards-items_select'>
                    <Select
                        defaultValue='Сортировать по'
                        style={{
                            width: 159,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                options: [
                                    {
                                        label: "Сортировать по",
                                        value: "jack",
                                    },
                                    {
                                        label: "Lucy",
                                        value: "lucy",
                                    },
                                ],
                            },
                            {
                                options: [
                                    {
                                        label: "yiminghe",
                                        value: "Yiminghe",
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='sport-page_cards-all'>
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
                {cardPageThree.map((item) => (
                    <Link to='/trainers' key={item.id}>
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
                {cardPageFour.map((item) => (
                    <Link to='/trainers' key={item.id}>
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
                {cardPageThree.map((item) => (
                    <Link to='/trainers' key={item.id}>
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
                {cardPageFour.map((item) => (
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
                {cardPageThree.map((item) => (
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
                {cardPageFour.map((item) => (
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
                {cardPageThree.map((item) => (
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
                {cardPageFour.map((item) => (
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
                {cardPageThree.map((item) => (
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
                {cardPageFour.map((item) => (
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
            <Button className='section-two_btn-two'>
                {" "}
                <Icons.more className='section-two_more' />
                <span>{translate("more")}</span>
            </Button>
            <div className='sport-page_cards-pagination'>
                <span>1</span>
                <span className='sport-page_cards-pagination-span'>2</span>
                <span className='sport-page_cards-pagination-span'>3</span>
                <span className='sport-page_cards-pagination-span'>4</span>
                <span className='sport-page_cards-pagination-span'>5</span>
                <span className='sport-page_cards-pagination-span'>6</span>
                <span className='sport-page_cards-pagination-span'>7</span>
                <span className='sport-page_cards-pagination-span'>...</span>
                <Button className='sport-page_cards-pagination_btn'>
                    {translate("again")}
                </Button>
            </div>
            <Button className='sport-page_cards-btn'>
                <Icons.bestArrow />
            </Button>
        </div>
    );
};

export default Cards;
