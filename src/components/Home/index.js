import { FaHome } from "react-icons/fa";
import './index.css'

const Home =()=>{
    return(
        <div className="home-container">
            <FaHome className="card-image"/>
            <h1>The Home Page</h1>
        </div>
    )
}

export default Home