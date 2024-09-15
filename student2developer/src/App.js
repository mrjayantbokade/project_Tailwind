import './App.css';
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import student2developer from "./brandLogo/student2developer.svg"
// import bootcoding from "./brandLogo/bootcoding.svg"
import {handleMenu} from "./homePageFunctions/HandleMenu.js";

function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="px-6 py-3  flex bg-white justify-between items-center drop-shadow-sm" id="nav-bar">
                <a href="/" id="brand-logo" className="flex flex-row justify-center items-center gap-2">
                    <img className=" w-[50px] h-[40px] " src={student2developer} alt=""/>

                    <span id="brand" className="  font-font3 font-medium text-xl  text-blackboot ">
                        Student2Developer
                    </span>
                </a>

                <div id="navbar-options"
                     className=" hidden  lg:flex   lg:gap-x-16 justify-between text-lg font-semibold font-font1 text-blackboot">
                    <a href="/task" id="task" className=" hover:text-redboot cursor-pointer">Task</a>
                    <a href="/community" id="community" className=" hover:text-redboot cursor-pointer">Community</a>
                    <a href="/products" id="products" className=" hover:text-redboot cursor-pointer">Products</a>
                    <a href="/login" id="login" className=" hover:text-redboot cursor-pointer">Login</a>
                </div>


                <button id="getStarted"
                        className="hidden  lg:flex lg:flex-row md:gap-2  items-center gap-10 text-gray-950 rounded-md text-md font-medium shadow-sm border border-gray-300  font-font1  hover:border-gray-400 transition ` py-1.5 px-4">
                    <p>Get Started</p>
                    <FontAwesomeIcon className="text-gray-400 text-md" icon="fa-solid fa-arrow-right"/>
                </button>


                <button id="mobile-menu"
                        className={`lg:hidden text-gray-800 text-xl p-2 `}
                        onClick={handleMenu}>

                    <FontAwesomeIcon className="text-lg" icon="fa-solid fa-bars"/>

                </button>


                {/*/!*incomplete functionality*!/*/}
                {/*/!*${isMenuOpen ? 'block' : 'hidden'*!/*/}
                <div className="fixed flex justify-between bg-white px-6 py-3 inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden">

                    <a href="/" id="brand-logo" className="flex flex-row justify-center items-center gap-2">
                        <img className=" w-[50px] h-[40px] " src={student2developer} alt=""/>

                        <span id="brand" className="  font-font3 font-medium text-xl  text-blackboot ">
                        Student2Developer
                    </span>
                    </a>

                    <button id="mobile-menu"
                            className={`lg:hidden text-gray-800 text-xl p-2 `}
                            onClick={handleMenu}>

                        <FontAwesomeIcon className="text-lg" icon="fa-solid fa-cross"/>
                        <FontAwesomeIcon className="text-lg" icon="fa-solid fa-xmark" />

                    </button>

                </div>

            </nav>
        </>
    );
}

export default App;
