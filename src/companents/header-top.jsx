import { Button, Flex, Select, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import useLanguage from "../hooks/useLanguage";
const { Text } = Typography;

const HeaderTop = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const translate = useLanguage()
    const handlyChange = (event) => {
        localStorage.setItem("language", event.target.value);
        setLanguage?.(event.target.value);
    };

    return (
        <Flex justify='space-between' align='center' className='header-top'>
            <Flex align='center' gap='large' className='header-top__location'>
                <Button>0% Рассрочка</Button>
                <div>
                    {translate("punk")}{" "}
                    <Link>
                        {" "}
                        <Text>г.Ургенч</Text>
                    </Link>
                </div>
            </Flex>
            <Flex align='center' gap='large' className='header-top__question'>
                <Link>{translate("question")}</Link>
                <Button>Заказать звонок</Button>
                <div className='select'>
                    <select
                        defaultValue={language}
                        className='header-hat_select'
                        onChange={handlyChange}>
                        <option value='uz'>UZ</option>
                        <option value='ru'>RU</option>
                    </select>
                </div>
            </Flex>
        </Flex>
    );
};

export default HeaderTop;
