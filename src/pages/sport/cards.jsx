import { Button, Select } from "antd";
import { Icons } from "../../assets/icons";
import useLanguage from "../../hooks/useLanguage";
import CardsOne from "./cards/cardsOne";
import CardsTwo from "./cards/cardsTwo";
import CardsThree from "./cards/cardsThree";
import CardsFour from "./cards/cardsFour";

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
                <CardsOne />
                <CardsTwo />
                <CardsThree />
                <CardsFour />
            </div>
            <Button className='section-two_btn-two'>
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
