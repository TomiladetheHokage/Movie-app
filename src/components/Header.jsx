import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">

            <div>
                <h1>
                    HEADER
                </h1>
            </div>

                <ul>
                    <li><Link to={'/'}><p>HOME</p></Link></li>
                    <li><Link to={'/'}><p>ABOUT</p></Link></li>
                    <li><Link to='/signup'><p>Sign Up</p></Link></li>
                    <li><Link to={'/'}><p>HOME</p></Link></li>

                </ul>
        </div>
    )
}
export default Header