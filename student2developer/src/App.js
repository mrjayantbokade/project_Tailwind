import './App.css';
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import student2developer from "./brandLogo/student2developer.svg"
// import bootcoding from "./brandLogo/bootcoding.svg"
import {handleMenu} from "./homePageFunctions/HandleMenu.js";
import Below0 from "./assets/image-section/BELOW0.svg"
import Below from "./assets/image-section/BELOW.svg"
import butterflyArrowSVG from "./assets/image-section/butterflyArrow.svg"
import butterflyArrow2 from "./assets/image-section/butterflyArrow2.svg"
import allFree from "./assets/image-section/feature-flags/allFree.svg"
import amateurCoding from "./assets/image-section/feature-flags/amateurCoding.svg"
import clearAim from "./assets/image-section/feature-flags/clearAim.svg"
import communitySupport from "./assets/image-section/feature-flags/communitySupport.svg"
import confused from "./assets/image-section/feature-flags/confused.svg"
import industryLevelProjects from "./assets/image-section/feature-flags/industryLevelProjects.svg"
import industryPractices from "./assets/image-section/feature-flags/industryPractices.svg"
import noFreePlatform from "./assets/image-section/feature-flags/noFreePlatform.svg"
import noProjects from "./assets/image-section/feature-flags/noProjects.svg"
import {clear} from "@testing-library/user-event/dist/clear";


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
            <main className={`bg-gradient-to-br from-orange-100/60 via-red-50/70  to-transparent`}>
                {/*hero section*/}
                <div
                    className={` px-6 sm:flex sm:flex-col`}>

                    {/*    <div id="hero-section" className={`  lg:px-8 pt-8*/}
                    {/*sm:pt-14   h-screen   lg:justify-center lg:mx-auto lg:max-w-3xl`}>*/}
                    <div id="hero-section"
                         className={`mx-auto max-w-4xl pt-8 pb-32 sm:pt-14 sm:pb-15 sm:flex sm:flex-col sm:items-center`}>

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
                                className={`group w-fit hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-sm hover:shadow-lg hover:shadow-red-700/10  cursor-pointer px-4 py-1 mb-8 rounded-lg border border-red-200 hover:border-red-600/40 flex flex-row gap-2 justify-center items-center bg-red-100/60 text-red-900 font-medium `}>
                            <div className={`h-2 w-2 rounded-full bg-red-400 border border-red-500`}></div>
                            <p className={`items-center`} id="task-of-the-day">
                                Task of the Day
                            </p>
                            <FontAwesomeIcon
                                className={`text-red-500 group-hover:text-red-600 group-hover:translate-x-1 group-hover:transition group-hover:ease-in group-hover:ease-out duration-700  text-md items-center`}
                                icon="fa-solid fa-arrow-right"/>
                        </button>

                        <div id="hero-headline"
                             className={`font-font1 text-5xl text-black font-semibold sm:text-center sm:text-7xl sm:mt-16 mb-8`}>
                            From student to developer in no time!
                        </div>
                        <div id="hero-subheadline"
                             className={` font-font2 text-xl leading-8 text-gray-600 sm:text-2xl sm:text-center `}>

                            Transform yourself from student into a industry level developer with our
                            guided learning paths and real world projects.
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

                </div>


                <div className={`relative max-w-9xl mx-auto resize-none hidden lg:block `}>
                    <div className={`inset-0 absolute z-50 h-screen w-full`}></div>

                    {/*<div id={`boxred`}*/}
                    {/*     className={`hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-purple-950/10    hover:translate-y-0.5   rounded-lg z-50 absolute bottom-[340px] left-40`}>*/}
                    {/*    <img className={`h-22 w-36`} src={allFree} alt=""/>*/}
                    {/*</div>*/}

                    <div id={`onlyonweb-section`}
                         className={`hidden lg:block mx-auto  py-5 max-w-7xl -mt-2 flex  flex-col justify-center text-center items-center`}>

                        <div id="inner-onlyonweb-section">
                            <h1 className={`font-font2 text-image-section text-red-500 font-bold `}> "Transform you into
                                your
                                better self"</h1>


                        </div>
                    </div>

                    <div id={`boxred`}
                         className={`  hover:translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-slate-600/30   cursor-pointer rounded-lg z-50 absolute bottom-[360px] left-[230px]`}>
                        <img className={`h-16 w-full`} src={noProjects} alt=""/>
                    </div>

                    <div id={`boxred`}
                         className={`hover:translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-slate-600/30   cursor-pointer  rounded-lg z-50  absolute bottom-[310px] left-[60px]`}>
                        <img className={`h-16 w-full`} src={amateurCoding} alt=""/>
                    </div>
                    <div id={`boxred`}
                         className={`hover:translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-slate-600/30    cursor-pointer  rounded-lg z-50  absolute bottom-[210px] left-[30px]`}>
                        <img className={`h-12 w-full`} src={confused} alt=""/>
                    </div>
                    <div id={`boxred`}
                         className={`  hover:translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-slate-600/30   cursor-pointer rounded-lg z-50 absolute bottom-[285px] left-[350px]`}>
                        <img className={`h-14 w-full`} src={noFreePlatform} alt=""/>
                    </div>

                    {/*second image feature flags*/}
                    <div id={`boxred`}
                         className={`  hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30   cursor-pointer rounded-lg z-50 absolute bottom-[370px] right-[320px]`}>
                        <img className={`h-16 w-full`} src={communitySupport} alt=""/>
                    </div>

                    <div id={`boxred`}
                         className={`hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30   cursor-pointer  rounded-lg z-50  absolute bottom-[300px] right-[150px]`}>
                        <img className={`h-16 w-full`} src={industryLevelProjects} alt=""/>
                    </div>
                    <div id={`boxred`}
                         className={`hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30    cursor-pointer  rounded-lg z-50  absolute bottom-[230px] right-[50px]`}>
                        <img className={`h-14 w-full`} src={clearAim} alt=""/>
                    </div>
                    <div id={`boxred`}
                         className={`  hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30   cursor-pointer rounded-lg z-50 absolute bottom-[280px] right-[450px]`}>
                        <img className={`h-16 w-full`} src={industryPractices} alt=""/>
                    </div>
                    <div id={`boxred`}
                         className={`  hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/30   cursor-pointer rounded-lg z-50 absolute bottom-[200px] right-[530px]`}>
                        <img className={`h-[50px] w-full`} src={allFree} alt=""/>
                    </div>


                    <div id={`onlyonweb-section`}
                         className={`hidden relative lg:flex  max-w-8xl px-9 mt-24 flex-row justify-between  `}>

                        {/*<div id="image-secion">*/}

                        {/*    <img className={` ml-16 w-full h-96  ml-5 `} src={Below0} alt="1st image"/>*/}
                        {/*</div>*/}
                        {/*<div id="image-secion">*/}

                        {/*    <img className={`object-contain  `} src={butterflyArrow} alt="1st image"/>*/}
                        {/*</div>*/}

                        {/*<div id="image-secion">*/}

                        {/*    <img className={`w-full h-96 mr-10 `} src={Below} alt="1st image"/>*/}
                        {/*</div>*/}

                        <div id="image-secion" className={`relative   `}>


                            <img className={` w-full h-80  ml-10 mt-12 `} src={Below0} alt="1st image"/>
                        </div>
                        <div id="image-secion">

                            <img className={`   h-[210px] w-[210px]  `} src={butterflyArrow2} alt="1st image"/>
                        </div>

                        <div id="image-secion">

                            <img className={`w-full h-80 mr-12  mt-12 `} src={Below} alt="1st image"/>
                        </div>

                    </div>
                </div>


                <div className={`h-[1000px]`}>

                </div>
            </main>

        </>
    );
}

export default App;
