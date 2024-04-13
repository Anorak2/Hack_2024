import "../css/sidebar.css"

function Sidebar() {
    return(
    <div className="sidebar">
        <a href="/">Home</a>
        <a href="/Manage">Manage</a>
        <a href="#clients">Notify</a>
    </div>
    );
}
export default Sidebar;