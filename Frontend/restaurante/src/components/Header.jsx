import '../assets/css/nav.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "red", maxWidth: "1480px"}} >

        <h1 style={{padding: "0"}}>Plazoleta </h1>

        <Nav/>

    </header>
  )
}

export default Header