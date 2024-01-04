import { Button, Flex, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import useLanguage from "../hooks/useLanguage";
import { Icons } from "../assets/icons";
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
                <Button className="header-top_btn">{translate("plan")}</Button>
                <div>
                    {translate("punk")}{" "}
                    <Link>
                        {" "}
                        <Text className="header-top_text">
                            <Icons.location className="header-top_location"/>
                             г.Ургенч
                            </Text>
                    </Link>
                </div>
            </Flex>
            <Flex align='center' gap='large' className='header-top__question'>
                <Link className="header-top_link">{translate("question")}</Link>
                <Button className="header-top_btn">{translate("call")}</Button>
                <div className='select'>
                    <select
                        defaultValue={language}
                        className='header-top_select'
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
