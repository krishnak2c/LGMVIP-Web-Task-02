const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a className="brand">LetsGrowMore (Task02)</a></li>
                <button onClick={clicked}className="button button-85">Get Users</button>
            </ul>
        </div>
    )
}
export default Navbar;