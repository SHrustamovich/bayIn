import { menuTitle } from "../../constants/menu"

const MenPage = () => {
    return (
    <div className="men-page">
      {menuTitle.map(item => (
        <div key={item.id} className="men-page_title">
            <span>{item.title_ru  }</span>
        </div>
      ))}
    </div>
  )
}

export default MenPage