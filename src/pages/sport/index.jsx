import { Icons } from "../../assets/icons";
import { menuSelect, menuTitle } from "../../constants/menu";
import useLanguage from "../../hooks/useLanguage";
import { Button, Slider } from "antd";
import Cards from "./cards";
const SportPage = () => {
    const translate = useLanguage();
    return (
        <div className='sport-page'>
            <div className='sport-page_titles'>
                {menuTitle.map((item) => (
                    <div key={item.id}>
                        <span>{item.title_ru}</span>
                    </div>
                ))}
            </div>
            <div className='sport-page_title'>
                <h1>{translate("boots")}</h1>
            </div>
            <span className='sport-page_text'>341 товаров</span>
            <Button className='sport-page_btns'>Nike Jordan N312</Button>
            <Button className='sport-page_btn'>Adidas Predator</Button>
            <Button className='sport-page_btn'>New Balance 240</Button>
            <Button className='sport-page_btn'>FILA Super SPEED</Button>
            <Button className='sport-page_btn'>Nike Jordan N312</Button>
            <Cards />
            <div className='sport-page_menu'>
                <div className='sport-page_menu-title'>
                    {menuSelect.map((item) => (
                        <div key={item.id}>
                            {item.title_ru}
                            <div className='sport-page_menu-title-icon'>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sport-page_radio'>
                    <div className='sport-page_radio-one'>
                        <input
                            type='radio'
                            name='radio'
                            className='sport-page_radio-input'
                        />
                        <span>Неважно</span>
                    </div>
                    <div className='sport-page_radio-two'>
                        <input
                            type='radio'
                            name='radio'
                            className='sport-page_radio-input'
                        />
                        <span>От 1 дней</span>
                    </div>
                    <div className='sport-page_radio-three'>
                        <input
                            type='radio'
                            name='radio'
                            className='sport-page_radio-input'
                        />
                        <span>От 1 дней</span>
                    </div>
                    <div className='sport-page_radio-five'>
                        <input
                            type='radio'
                            name='radio'
                            className='sport-page_radio-input'
                        />
                        <span>От 1 дней</span>
                    </div>
                </div>
                <div className='sport-page-checkbox'>
                    <div className='sport-page-checkbox-title'>
                        <span>{translate("brend")}</span>
                        <Icons.topArrow className='sport-page-checkbox_icon' />
                    </div>
                    <div className='sport-page-checkboxes'>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>Adidas</span>
                        </div>

                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>Nike</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>New Balance</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>FILA</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>Jordan</span>
                        </div>
                        <p className='sport-page-checkboxes_link'>
                            {translate("this")}
                        </p>
                    </div>
                </div>
                <div className='sport-page_size'>
                    <div className='sport-page-checkbox-title'>
                        <span>{translate("size")}</span>
                        <Icons.topArrow className='sport-page-checkbox_icon' />
                    </div>
                    <div className='sport-page-checkboxes'>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>30</span>
                        </div>

                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>31</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>32</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>33</span>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='sport-page-checkboxes_one'
                            />
                            <span>34</span>
                        </div>
                        <p className='sport-page-checkboxes_link'>
                            {translate("this")}
                        </p>
                    </div>
                </div>
                <div className='sport-page_color'>
                    <div className='sport-page-checkbox-title'>
                        <span>{translate("color")}</span>
                        <Icons.topArrow className='sport-page_color_icon' />
                    </div>
                    <div className='sport-page_colors'>
                        <button className='sport-page_colors-one'></button>
                        <button className='sport-page_colors-two'></button>
                        <button className='sport-page_colors-three'></button>
                        <button className='sport-page_colors-four'></button>
                        <button className='sport-page_colors-five'></button>
                        <button className='sport-page_colors-six'></button>
                        <button className='sport-page_colors-seven'></button>
                        <button className='sport-page_colors-eight'></button>
                        <button className='sport-page_colors-nine'></button>
                        <button className='sport-page_colors-ten'></button>
                    </div>
                    <p className='sport-page_colors_link'>
                        {translate("this")}
                    </p>
                </div>
                <div className='sport-page_sliders'>
                    <div className='sport-page-checkbox-title'>
                        <span>{translate("height")}</span>
                        <Icons.topArrow className='sport-page_color_icon' />
                    </div>
                    <div className='sport-page_slider'>
                        {" "}
                        <Slider
                            range={{
                                draggableTrack: true,
                            }}
                            defaultValue={[20, 50]}
                        />{" "}
                    </div>
                    <Button className='sport-page_slider-btn'>
                        от 388.000
                    </Button>
                    <Button className='sport-page_slider-btn-two'>
                        до 1.879.000
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SportPage;
