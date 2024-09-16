import './App.css';
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import student2developer from "./brandLogo/student2developer.svg"
// import bootcoding from "./brandLogo/bootcoding.svg"
import {handleMenu} from "./homePageFunctions/HandleMenu.js";

function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            {/*navbar*/}
            <nav className="px-6 py-5 lg:py-3  flex bg-white justify-between items-center " id="nav-bar">
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


                <a id="getStarted" href="/getStarted"
                   className="hidden  lg:flex lg:flex-row md:gap-2  items-center gap-10 text-gray-950 rounded-md text-md font-medium shadow-sm border border-gray-300  font-font1  hover:border-gray-400 transition ` py-1.5 px-4">
                    <p>Get Started</p>
                    <FontAwesomeIcon className="text-gray-400 text-md" icon="fa-solid fa-arrow-right"/>
                </a>


                <button id="mobile-menu"
                        className={`lg:hidden text-gray-800 text-xl p-2 `}
                        onClick={handleMenu}>

                    <FontAwesomeIcon className="text-lg" icon="fa-solid fa-bars"/>

                </button>


                {/*/!*incomplete functionality*!/*/}
                {/*/!*${isMenuOpen ? 'block' : 'hidden'*!/*/}
                <div className={`fixed   bg-white px-6 py-5 inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>

                    <div id="navbar-mobile" className={`flex   justify-between`}>
                        <a href="/" id="brand-logo" className="flex items-center gap-2">
                            <img className=" w-[50px] h-[40px] " src={student2developer} alt=""/>

                            <span id="brand" className="  font-font3 font-medium text-xl  text-blackboot ">
                                  Student2Developer
                            </span>
                        </a>
                        <button id="mobile-menu" className={`lg:hidden text-gray-800 text-xl p-2 `}
                                onClick={handleMenu}>
                            <FontAwesomeIcon className="text-lg" icon="fa-solid fa-xmark"/>
                        </button>
                    </div>

                    <div id="menu-options" className={`flex flex-col mt-5`}>

                        <a href="/task" id="task"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50   cursor-pointer">Task</a>
                        <a href="/community" id="community"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Community</a>
                        <a href="/products" id="products"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Products</a>
                        <a href="/login" id="login"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Login</a>
                        <a href="/miniprojects" id="miniprojects"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Mini
                            Projects</a>
                        <a href="/majorprojects" id="majorprojects"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Major
                            Projects</a>
                        <a href="/Certifications" id="Certifications"
                           className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer">Certifications</a>

                    </div>


                    <button id="getStarted"
                            className=" font-medium m-3 p-3 w-full mr-12  gap-2 rounded-md hover:bg-gray-50   cursor-pointer flex flex-row   items-center  text-gray-950 rounded-md text-md font-medium shadow-sm   font-font1  hover:border-gray-400 transition  ">
                        <p>Get Started</p>
                        <FontAwesomeIcon className="text-gray-400 text-md" icon="fa-solid fa-arrow-right"/>
                    </button>


                </div>


            </nav>

            {/*main*/}
            <main>
                {/*hero section*/}
                <div
                    className={` px-6 sm:flex sm:flex-col  min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-transparent`}>

                    {/*    <div id="hero-section" className={`  lg:px-8 pt-8*/}
                    {/*sm:pt-14   h-screen   lg:justify-center lg:mx-auto lg:max-w-3xl`}>*/}
                    <div id="hero-section"
                         className={`mx-auto max-w-4xl pt-8 pb-32 sm:pt-14 sm:pb-20 sm:flex sm:flex-col sm:items-center`}>

                        {/*<button id="task-of-the-day"*/}
                        {/*        className={`group hover:-translate-y-0.5 hover:transition hover:ease-in-out hover:duration-200 shadow-sm hover:shadow-lg hover:shadow-yellow-700/10  cursor-pointer px-4 py-1 mb-8 rounded-lg border border-yellow-200 hover:border-yellow-600/40 flex flex-row gap-2 justify-center items-center bg-yellow-100/60 text-yellow-900 font-medium `}>*/}
                        {/*    <div className={`h-2 w-2 rounded-full bg-yellow-400 border border-yellow-500`}></div>*/}
                        {/*    <p className={`items-center`} id="task-of-the-day">*/}
                        {/*        Task of the Day*/}
                        {/*    </p>*/}
                        {/*    <FontAwesomeIcon*/}
                        {/*        className={`text-yellow-500 group-hover:text-yellow-600 group-hover:translate-x-1 group-hover:transition group-hover:ease-in-out group-hover:duration-700  text-md items-center`}*/}
                        {/*        icon="fa-solid fa-arrow-right"/>*/}
                        {/*</button>*/}

                        <button id="task-of-the-day"
                                className={`group w-fit hover:-translate-y-0.5 hover:transition hover:ease-in-out hover:duration-200 shadow-sm hover:shadow-lg hover:shadow-red-700/10  cursor-pointer px-4 py-1 mb-8 rounded-lg border border-red-200 hover:border-red-600/40 flex flex-row gap-2 justify-center items-center bg-red-100/60 text-red-900 font-medium `}>
                            <div className={`h-2 w-2 rounded-full bg-red-400 border border-red-500`}></div>
                            <p className={`items-center`} id="task-of-the-day">
                                Task of the Day
                            </p>
                            <FontAwesomeIcon
                                className={`text-red-500 group-hover:text-red-600 group-hover:translate-x-1 group-hover:transition group-hover:ease-in-out group-hover:duration-700  text-md items-center`}
                                icon="fa-solid fa-arrow-right"/>
                        </button>

                        <div id="hero-headline"
                             className={`font-font1 text-5xl text-black font-semibold sm:text-center sm:text-7xl sm:mt-16 mb-8`}>
                            From student to developer in no time!
                        </div>
                        <div id="hero-subheadline"
                             className={` font-font2 text-xl leading-8 text-gray-600 sm:text-2xl sm:text-center `}>

                             Transform yourself from student into a industry level developer with our
                            guided learning paths and  real world projects.
                        </div>

                        <div className={`mt-12 flex flex-col gap-4 text-center sm:flex-row sm:justify-center`}>
                            <button
                                className={`text-lg inline-block rounded-lg px-8 py-3 text-white font-semibold bg-redboot hover:bg-redboot/90 shadow-sm ring-1 ring-redboot/80 hover:ring-redboot`}>Start
                                Exploring Now!
                            </button>
                            <button
                                className={`text-lg inline-block rounded-lg px-8 py-3 text-gray-900 font-semibold   shadow-sm ring-1 ring-gray-400/80 hover:ring-gray-500`}>Join
                                Community
                            </button>
                        </div>


                    </div>
                    <div>hello</div>
                </div>


            </main>

        </>
    );
}

export default App;
