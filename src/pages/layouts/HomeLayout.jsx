import Navbar from "./Navbar";
import styles from '../App.module.css';
import laff from '../assets/your-coach.jpeg';
import Benefit from "./Benefit";
import Choose from './Choose'
export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Navbar/>
                </div>
                <div className="flex flex-col justify-center items-center lg:hidden">
                    <div className={`grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2
                        lg:grid-cols-2 lg:grid-rows-2 ${styles.row}`}>
                        <img src={laff}
                            className={` w-[200px] h-[160px] p-[7px] shadow-md 
                                order-1 row-span-1 col-span-1 overflow-hidden
                                sm:w-[250px] sm:h-[300px] sm-order-1
                                md:w-[350px] md:h-[400px] md:order-2 md:row-span-1 md:col-span-1
                                sm:ml-[4vw]  md:ml-[0]`} 
                            alt="img" />
                        <p className={`flex flex-col font-semibold text-xl pt-[30px] text-center 
                            order-2 row-span-1 col-span-1  sm:order-1 md:text-[50px]
                            md:text-center md:row-span-1 md:col-span-2 md:py-[20px]`}>
                            We can do more together
                        </p>
                        <p className={`font-light text-sm order-2 sm:w-[1fr] sm:ml-[-70px] row-span-1 
                            col-span-2 pl-[10px] md:px-[50px] md:font-thin md:text-[25px] md:mt-[20px]
                            md:text-center md:col-span-1 md:text-2xl mt-[10px] sm:mt-[40px]`}>
                            At Xpert View, we believe in empowering individuals to reach their fullest
                        potential through personalized coaching and comprehensive training programs.
                        Whether you are looking to improve your personal skills, advance your career,
                        or achieve your life goals, our system is designed to guide you every step
                        of the way.
                        </p>
                        <button className="mt-[20px] ml-[22vw] md:ml-[400px]
                         border-2 order-4 row-span-1 col-span-1 w-[11em]">
                            Individual Consultation</button>
                    </div>
                </div>
                <div  className={`md:hidden lg:flex absolute mt-[700px] 
                            lg:justify-center lg:items-center`}>
                        <img src={laff} className={`border-white border-[15px] h-[500px] w-[600px] 
                            shadow-2xl overflow-hidden hidden lg:flex`} alt="img" />
                        <div className={`flex-col mx-[70px] h-[400px] w-[700px] 
                            grid grid-rows-3 grid-cols-1 ${styles.grid}`}>
                            <p className={`text-4xl hidden lg:flex`}>
                                We can do more together
                            </p>
                            <p className='text-lg font-md hidden lg:flex'>
                            At Xpert View, we believe in empowering individuals to reach their fullest
                            potential through personalized coaching and comprehensive training programs.
                            Whether you are looking to improve your personal skills, advance your career,
                            or achieve your life goals, our system is designed to guide you every step
                            of the way.
                            </p>
                            <button className="hidden lg:flex w-[200px] ml-[100px] border-2 pl-[10%] pb-[-10px]">
                                Individual Consultation</button>
                        </div>
                </div>
            </div>
            <div className={`flex justify-center items-center mt-[0] lg:mt-[350px]`}>
                <Benefit/>
            </div>  
            <Choose/>                  
        </div>
    );
}
