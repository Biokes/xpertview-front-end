// export default function FormText(){
//     const validation = {
//         'name':/^[a-zA-Z ]{5,}/,
//         'phoneNumber':/^[0-9]{10,14}/,
//     }
//     return (
//             <div className={`flex flex-col justify-center items-center`}>
//                 <div className={`my-[2%]  items-start`}>
//                     <p className={`mb-[1%] w-[100%]`}>Name Surname</p>
//                     <input type="text"
//                            className='border-2 border-gray-500 w-[80vw] sm:w-[350px]
//                         lg:w-[450px] h-[40px]'/>
//                     <p className={`mb-[1%] mt-[1%]`}>Phone</p>
//                     <input type="text" className='border-2 h-[40px] border-gray-500 w-[80vw] sm:w-[350px] lg:w-[450px]'/>
//                     <p className={`mb-[1%] mt-[1%]`}>Message</p>
//                     <textarea
//                         className="h-[150px] border-2  border-gray-500 w-[80vw] sm:w-[350px] lg:w-[450px]"/>
//                 </div>
//                 <div className={'flex justify-center items-center'}>
//                     <button className="justify-center bg-[#756961] px-[40%] py-[20%] text-[#fff] rounded-[12px]" >Send</button>
//                 </div>
//         </div>
//     )
// }
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function FormText() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().matches(/^[a-zA-Z ]{5,}/, 'Name should be at least 5 characters long and contain only letters and spaces').required('Name is required'),
        phoneNumber: Yup.string().matches(/^[0-9]{10,14}$/, 'Phone number should be between 10 and 14 digits').required('Phone number is required'),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = (values, { resetForm }) => {
        try {
            console.log(values);
            toast.success("Form submitted successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            resetForm();
        } catch (error) {
            toast.error("Form submission failed!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center bg-gray-300">
            <ToastContainer />
            <Formik
                initialValues={{ name: '', phoneNumber: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col justify-center items-center">
                        <div className="my-[2%] items-start">
                            <p className="mb-[1%] w-[100%]">Name Surname</p>
                            <Field
                                type="text"
                                name="name"
                                className={`border-2 w-[80vw] sm:w-[350px] lg:w-[450px] h-[40px] 
                                    ${errors.name && touched.name ? 'border-red-500' : 'border-gray-500'}`}
                            />
                            {errors.name && touched.name ? <div className="text-red-500 text-sm">{errors.name}</div> : null}

                            <p className="mb-[1%] mt-[1%]">Phone</p>
                            <Field
                                type="text"
                                name="phoneNumber"
                                className={`border-2 h-[40px] w-[80vw] sm:w-[350px] lg:w-[450px] 
                                    ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-500'}`}
                            />
                            {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-xs">{errors.phoneNumber}</div> : null}

                            <p className="mb-[1%] mt-[1%]">Message</p>
                            <Field
                                name="message"
                                as="textarea"
                                className={`h-[150px] border-2 w-[80vw] sm:w-[350px] lg:w-[450px] 
                                    ${errors.message && touched.message ? 'border-red-500' : 'border-gray-500'}`}
                            />
                            {errors.message && touched.message ? <div className="text-red-500 text-sm">{errors.message}</div> : null}
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="justify-center bg-[#756961] w-[100px] h-[40px] text-[#fff] rounded-[12px]">Send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
