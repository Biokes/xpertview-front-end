import Hamburger from 'hamburger-react';
import styles from '../App.module.css'; 
import { useState, useEffect } from 'react';
import  Facebook from '../assets/fb.svg'
import Insta from '../assets/insta (3).png'
import Youtube from '../assets/youtube.png'

export default function Navbar(){
    const [isOpen,setIsOpen] = useState(false)
    const display =()=>{
        return (
            <div className={`flex flex-col ${styles.content} `}>
                <p>Home</p>
                <p>Training</p>
                <p>Coaching</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        )
    }

    const getContents=()=>{
       return(
            <div className={`flex ${styles.getContents} w-[40vw] `}>
                <button>Home</button>
                <button>Training</button>
                <button>Coaching</button>
                <button>Blog</button>
                <button>Contact</button>
            </div>       
       )
    }
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        const handleResize =()=> setIsMobile(window.innerWidth<768);
        window.addEventListener('resize',handleResize);
        window.removeEventListener('resize',handleResize);
    },[])
    return (
        <div className='fixed w-[100vw] h-[14vh] bg-gray-200'>
            <div className='flex justify-between align-center mx-[12px] '>
                    <div className='flex flex-col justify-center align-center'>
                            <p className={`${styles.headerText} font-bold`}>Xpert View</p>
                            <span className='font-semibold'>Life Coach</span>
                    </div>
                    <div className='mt-[7px]'>
                        <div className={`flex justify-end mr-[2vw] ${styles.svg}`}>
                            <img className={'h-[30px] w-[30px]'} src={Facebook} alt='fb'/>
                            <img className={'h-[30px] w-[30px]'} src={Insta} alt="Ig" />
                            <img className={'h-[30px] w-[30px]'} src={Youtube} alt="Yb" />
                        </div>
                        {isMobile?(
                            <div>
                                <Hamburger className='w-[60px] h-[60px]' toggled={isOpen} toggle={setIsOpen} />
                                {isOpen && display()}
                            </div>):(
                            getContents())
                        }
                    </div>   
            </div>
        </div>
            )
}