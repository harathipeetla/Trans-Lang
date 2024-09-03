import { useLanguage } from "../../context";
import './index.css'

const Settings =() =>{
    const {language, setLanguage} = useLanguage()

    const handleChange =(e) =>{
        setLanguage(e.target.value)
    }

    return (
        <div className="settings">
            <label className="logo-header">TransLang</label>
            <select id="language" value={language} onChange={handleChange} className="languages-list" >
                <option value='English'>English</option>
                <option value='French'>French</option>
                <option value='German'>German</option>
                <option value='Russian'>Russian</option>
                <option value='Spanish'>Spanish</option>
                <option value='Chinese'>Chinese</option>
            </select>
        </div>
    )
}

export default Settings