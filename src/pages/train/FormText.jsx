export default function FormText(){
    return (
            <div className={`flex flex-col justify-center items-center`}>
                <div className={`my-[2%]  items-start`}>
                    <p className={`mb-[1%] w-[100%]`}>Name Surname</p>
                    <input type="text" className='border-2 border-gray-500 w-[80vw] sm:w-[350px]
                        lg:w-[450px] h-[40px]'/>
                    <p className={`mb-[1%] mt-[1%]`}>Phone</p>
                    <input type="text" className='border-2 h-[40px] border-gray-500 w-[80vw] sm:w-[350px] lg:w-[450px]'/>
                    <p className={`mb-[1%] mt-[1%]`}>Message</p>
                    <textarea
                        className="h-[150px] border-2  border-gray-500 w-[80vw] sm:w-[350px] lg:w-[450px]"/>
                </div>
                <div className={'flex justify-center items-center'}>
                    <button className="justify-center bg-[#756961] px-[40%] py-[20%] text-[#fff] rounded-[12px]" >Send</button>
                </div>
        </div>
    )
}