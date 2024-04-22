import "../css/sidebar.css"

function Sidebar() {
    return(
    <div className="sidebar">
        <a href="/">Home</a>
        <a href="/schedule">Schedule</a>
        <a href="/Manage">Add</a>
        <a href="/Notify">Notify</a>
    </div>
    );
}
export default Sidebar;