import styles from '../../App.module.css'
import {ErrorMessage, Field} from "formik";
export default function DateChoosing(){
    const Text =()=>{
       return  (
           <p className={'mx-[5%] md:font-normal md:text-normal lg:font-thin lg:text-3xl'}>
           Lorem Ipsum is simply dummy text of the printing and typesetting
           industry. Lorem Ipsum has been the industry's standard dummy
           text ever since the 1500s. <br/>
           When an unknown printer took a galley of type and scrambled it
           to make a type specimen book. It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
       )
    }
    // const Inputs =()=> {
    //     return (
    //         <div className={`flex flex-col ml-[7%] mr-[5%] ${styles.inputs}`}>
    //             <div className={'flex flex-col mt-[5%]'}>
    //                 <p>Name</p>
    //                 <input type="text"/>
    //                 <p>Phone</p>
    //                 <input type="number" className={'border-2'}/>
    //                 <p>Proposed Date and Time</p>
    //                 <input type="text"/>
    //                 <p>Message</p>
    //                 <textarea/>
    //             </div>
    //             <div className={'flex justify-center items-center my-[30px] ml-[-20%]'}>
    //                 <button className={'bg-[#756961] py-[10px] text-white px-[40px] rounded-[10px]'}>Send</button>
    //             </div>
    //         </div>
    //     )
    // }

    const Inputs = () => (
        <div className={`flex flex-col ml-[7%] mr-[5%] ${styles.inputs}`}>
            <div className={'flex flex-col mt-[5%]'}>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" className={'border-2'} />
                <ErrorMessage name="name" component="div" className="text-red-500" />

                <label htmlFor="phone">Phone</label>
                <Field name="phone" type="number" className={'border-2'} />
                <ErrorMessage name="phone" component="div" className="text-red-500" />

                <label htmlFor="date">Proposed Date and Time</label>
                <Field name="date" type="text" className={'border-2'} />
                <ErrorMessage name="date" component="div" className="text-red-500" />

                <label htmlFor="message">Message</label>
                <Field name="message" as="textarea" className={'border-2'} />
                <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <div className={'flex justify-center items-center my-[30px] ml-[-20%]'}>
                <button type="submit" className={'bg-[#756961] py-[10px] text-white px-[40px] rounded-[10px]'}>Send</button>
            </div>
        </div>
    );
    const Header=()=>{
        return (
            <p className={`${styles.benefit} text-[300%] text-center`}>
                Choose a convenient Date
            </p>
        )
    }
    return (
        <div className={`grid my-[40px] ${styles.largeGrid} lg:grid-rows-2 lg:grid-cols-2`}>
            <div className={`order-1 md:order-2 lg:order-3 lg:mt-[10%]`}>
                <Text/>
            </div>
            <div className={`order-3 lg:order-1 lg:col-span-1 lg:my-auto lg:row-span-2`}>
                <Inputs/>
            </div>
            <div className={`order-2 md:order-1 lg:order-2 lg:my-auto`}>
                <Header/>
            </div>
        </div>
    )
}