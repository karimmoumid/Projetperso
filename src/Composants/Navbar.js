import styled from "styled-components";
import logo from "./Media/logo.png";
import burger from "./Media/stash_burger-classic-duotone.png";

export default function Navbar(){
 return(  <header>
<nav className=" d-flex justify-content-between p-3 bg-white" >
<img src={logo} />
<button className=" bg-white border-0">
    <img src={burger}></img>
</button>
</nav>
    </header> )
}