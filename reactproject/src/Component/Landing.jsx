import { Link } from "react-router-dom";
import '../Styles/Landing.css'
const Landing = () => {
    return (
        <div className="page">
            <Link to='/adminlogin'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9GzTlYccwnEuuK7rE-X4mRuo-A6ere51_g&s" alt="" />
            <h1>AdminLogin</h1>
            </Link>

            <Link to='/userlogin'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
            <h1>UserLogin</h1>
            </Link>

        </div>
    );
}
export default Landing;