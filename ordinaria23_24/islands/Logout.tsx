
const Logout = () => {
    const onLogOut = () => {
    document.cookie = "auth=; path=/;"; //borrar cookies
    window.location.href = "/login"; //redirect to login

    }; 
    return <a onClick ={onLogOut}>Logout</a>
}

export default Logout; 