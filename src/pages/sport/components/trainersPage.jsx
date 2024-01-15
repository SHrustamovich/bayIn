import { Button } from "antd";
import { Icons } from "../../../assets/icons";
import { cardPageFour, cardPageThree, cardPageTwo, comments, trainers } from "../../../constants/menu";
import { Link } from "react-router-dom";

const TrainersPage = () => {
    return (
        <>
            <div className='trainers-page'>
                <div className='trainers-page_title'>
                    <span>
                        Главная / Спорт / Спортивные кроссовки /{" "}
                        <p>Adidas Yeezy 350 V2 “Clay” </p>
                    </span>
                </div>
                <div className='trainers-page_menu-title'>
                    <p>Adidas Yeezy 350 V2 “Clay”</p>
                </div>
                <div className='trainers-page_stars'>
                    <Icons.fillStar />
                    <Icons.fillStar className='trainers-page_stars-one' />
                    <Icons.fillStar className='trainers-page_stars-one' />
                    <Icons.fillStar className='trainers-page_stars-one' />
                    <Icons.star className='trainers-page_stars-one' />
                    <span>4 отзывов</span>
                </div>
                {trainers.map((item) => (
                    <div key={item.id} className='trainers-page_service'>
                        <div className='trainers-page_service-images'>
                            <div className='trainers-page_service-images-one'>
                                <img src={item.topIcon} alt={item.title} />
                            </div>
                            <div className='trainers-page_service-images-two'>
                                <img src={item.imgOne} alt='hello' />
                            </div>
                            <div className='trainers-page_service-images-three'>
                                <img src={item.imgTwo} alt='hello' />
                            </div>
                            <div className='trainers-page_service-images-four'>
                                <img src={item.imgThree} alt='hello' />
                            </div>
                            <div className='trainers-page_service-images-five'>
                                <img src={item.imgFour} alt='hello' />
                            </div>
                            <div className='trainers-page_service-images-six'>
                                <img src={item.topIconTwo} alt='hello' />
                            </div>
                            <div className='trainers-page_service-images-seven'>
                                <img src={item.bigImg} alt='hello' />
                            </div>
                        </div>
                    </div>
                ))}

                {trainers.map((item) => (
                    <div className='trainers-page_ranglar' key={item.id}>
                        <div className='trainers-page_ranglar_title'>
                            <span>Цвет:</span>
                        </div>
                        <div className='trainers-page_ranglar_img-one'>
                            <img src={item.imgSix} alt='hello' />
                        </div>
                        <div className='trainers-page_ranglar_img-two'>
                            <img src={item.imgSeven} alt='hello' />
                        </div>
                        <div className='trainers-page_ranglar_img-three'>
                            <img src={item.imgEight} alt='hello' />
                        </div>
                        <div className='trainers-page_ranglar-comp'>
                            <p>
                                Состав: <span>Легкая сетка, тонкая</span>
                            </p>
                        </div>
                        <div className='trainers-page_ranglar-razmer'>
                            <p>
                                Размеры:
                                <select className='select'>
                                    <option value='39'>39</option>
                                    <option value='39'>40</option>
                                    <option value='39'>41</option>
                                    <option value='39'>42</option>
                                    <option value='39'>43</option>
                                    <option value='39'>44</option>
                                </select>
                            </p>
                        </div>
                        <div className='trainers-page_ranglar-icons'>
                            <img src={item.icon} alt='hello' />
                            <span>Бесплатная доставка</span>
                        </div>
                        <div className='trainers-page_ranglar-icons-1'>
                            <img src={item.iconTwo} alt='hello' />
                            <span>Примерка</span>
                        </div>
                        <div className='trainers-page_ranglar-icons-2'>
                            <img src={item.iconThree} alt='hello' />
                            <span>Возврат товара</span>
                        </div>
                        <div className='trainers-page_brend'>
                            <p>Бренд</p>
                        </div>
                        <div className='trainers-page_brend-adidas'>
                            <img src={item.adidas} alt='hello' />
                        </div>
                        <div className='trainers-page_brend-som'>
                            <p>368.000 UZS</p>
                        </div>
                        <button className='trainers-page_brend-btn'>
                            В Корзину
                        </button>
                        <div className='trainers-page_brend-card'>
                            <div className='trainers-page_brend-card-title'>
                                <p>0%</p>
                                <span>рассрочка</span>
                            </div>
                            <div className='trainers-page_brend-card-money'>
                                <p>92.000 UZS x4</p>
                            </div>
                            <div className='trainers-page_brend-card-text'>
                                <p>
                                    Быстро доставим любой Ваш заказ по всему
                                    Узбекистану! <br />
                                    <br />
                                    Срок доставки от 1 до 2х рабочих дней!
                                    Стоимость доставки: 30 000 сум!
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='trainers-page_product'>
                    <div className='trainers-page_product-title'>
                        <h2>О товаре</h2>
                    </div>
                    <div className='trainers-page_product-about'>
                        <p>Основные характеристики</p>
                    </div>
                    <div className='trainers-page_product-texts'>
                        <p>Бренд ____________ adidas</p>
                        <p>Вид спорта ____________ повседневные</p>
                    </div>
                    <div className='trainers-page_product-material'>
                        <p>Материал</p>
                    </div>
                    <div className='trainers-page_product-texts'>
                        <p>Материал верха ____________ текстиль</p>
                        <p>Материал подошвы ____________ резина</p>
                    </div>
                    <div className='trainers-page_product-link'>
                        <a href='#'>Все характеристики</a>
                    </div>
                </div>
                <div className='trainers-page_description'>
                    <div className='trainers-page_description-title'>
                        <h2>Описание</h2>
                    </div>
                    <div className='trainers-page_description-text'>
                        <p>
                            adidas Yeezy Boost 750 — дебютная модель кроссовок в
                            линейке Yeezy, которая выходит в феврале 2015 года.
                            Изготовленные из натуральной замши, эти кроссовки
                            обладают высоким верхом со необычной шнуровкой и
                            липучкой, а также застежкой на молнии сбоку.
                        </p>
                    </div>
                </div>
                <div className='trainers-page_comment'>
                    <div className='trainers-page_comment-title'>
                        <h2>Отзывы о товаре</h2>
                        <span>4 отзывов</span>
                    </div>
                </div>
                <div className='trainers-page_comment-cards'>
                    {comments.map((item) => (
                        <div
                            key={item.id}
                            className='trainers-page_comment-card'>
                            <div className='trainers-page_comment-card-user'>
                                <img src={item.userImg} alt='hello' />
                            </div>
                            <div className='trainers-page_comment-card-name'>
                                <span>{item.name}</span>
                            </div>
                            <div className='trainers-page_comment-card-date'>
                                <span>{item.date}</span>
                            </div>
                            <div className='trainers-page_comment-card-stars'>
                                <Icons.fillStar />
                                <Icons.fillStar className='trainers-page_comment-card-star' />
                                <Icons.fillStar className='trainers-page_comment-card-star' />
                                <Icons.fillStar className='trainers-page_comment-card-star' />
                                <Icons.star className='trainers-page_comment-card-star' />
                            </div>
                            <div className='trainers-page_comment-card-images'>
                                <img src={item.trainerImg} alt='hello' />
                                <img
                                    src={item.trainerImgTwo}
                                    alt='hello'
                                    className='trainers-page_comment-card-images-two'
                                />
                                <img
                                    src={item.trainerImgThree}
                                    alt='hello'
                                    className='trainers-page_comment-card-images-three'
                                />
                            </div>
                            <div className='trainers-page_comment-card-text'>
                                <p>{item.comment}</p>
                            </div>
                            <div className='trainers-page_comment-card-like'>
                                <img src={item.like} alt='hello' />
                            </div>
                            <div className='trainers-page_comment-card-dislike'>
                                <img src={item.dislike} alt='hello' />
                            </div>
                        </div>
                    ))}
                    <Icons.rightArrow className='trainers-page_comment-card-btn' />
                </div>
                <div className='trainers-page_comment-cards-title'>
                    <h2>Похожие товары</h2>
                </div>
                <div className='sport-page_cards-all'>
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
                </div>
            </div>
        </>
    );
};

export default TrainersPage;
