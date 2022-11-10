import { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'

const ServicesPage = () => {

    const options = {
        margin: 30,
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
    };
    
    return ( 
        <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-2 px-[5%]">

                <h3 className="text-pink-500 text-2xl font-semibold uppercase">Our services</h3>
                <h1 className="xl:text-xl text-lg mb-5 text-pink-900 font-inter font-extrabold">We offer a wide range of beauty services</h1>
                
                <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center overflow-hidden">
                        <div className="group w-full h-full">
                            <div className="relative group-hover:scale-105 duration-300 transition-all ease-in-out  w-full h-[180px] bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?b=1&s=170667a&w=0&k=20&c=OYpOKgnC8xVk43A3irW0VkVHnYrmwcd5QQlaIZJDyig=')]">
                                <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div>
                                <div className="translate-y-20 group-hover:translate-y-0 duration-300 absolute inset-0 transition-all ease-in-out flex flex-col gap-3 text-white justify-center items-center">
                                    <h4 className="text-white text-lg font-bold">Makeup</h4>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12 21M12 21L8 17M12 21L12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            
            <div className="flex flex-col gap-2 bg-pink-50 px-[5%] py-10">

                <h3 className="text-pink-500 text-2xl font-semibold uppercase">Our services</h3>
                <h1 className="xl:text-xl text-lg mb-5 text-pink-900 font-inter font-extrabold">We offer a wide range of beauty services</h1>
                
                <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="col-span-1 flex justify-center items-center shadow-sm overflow-hidden">
                        <div className="group w-full h-full hover:border-b-2 border-pink-500 transition-all ease-in-out duration-300">
                            <div className="relative w-full h-[180px] bg-no-repeat bg-cover bg-white">
                                <div className="group-hover:-translate-y-16 translate-y-5 duration-300 px-8 absolute inset-0 transition-all ease-in-out flex flex-col text-white">
                                    <div className="w-12 h-12 mb-11">

                                        <svg className="w-12 h-12" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7.61981C22.2827 6.16657 24.1593 5.25 26.25 5.25C30.116 5.25 33.25 8.38401 33.25 12.25C33.25 16.116 30.116 19.25 26.25 19.25C24.1593 19.25 22.2827 18.3334 21 16.8802M26.25 36.75H5.25V35C5.25 29.201 9.95101 24.5 15.75 24.5C21.549 24.5 26.25 29.201 26.25 35V36.75ZM26.25 36.75H36.75V35C36.75 29.201 32.049 24.5 26.25 24.5C24.3375 24.5 22.5444 25.0113 21 25.9047M22.75 12.25C22.75 16.116 19.616 19.25 15.75 19.25C11.884 19.25 8.75 16.116 8.75 12.25C8.75 8.38401 11.884 5.25 15.75 5.25C19.616 5.25 22.75 8.38401 22.75 12.25Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>


                                    </div>
                                    <h5 className="text-pink-900 text-xl font-bold mb-9">Facial makeup</h5>
                                    <p className="text-slate-400 text-base hidden group-hover:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center shadow-sm overflow-hidden">
                        <div className="group w-full h-full hover:border-b-2 border-pink-500 transition-all ease-in-out duration-300">
                            <div className="relative w-full h-[180px] bg-no-repeat bg-cover bg-white">
                                {/* <div className="bg-black duration-300 transition-all ease-in-out group-hover:opacity-40 opacity-20 w-full h-full text-white"></div> */}
                                <div className="group-hover:-translate-y-16 translate-y-5 duration-300 px-8 absolute inset-0 transition-all ease-in-out flex flex-col text-white">
                                    <div className="w-12 h-12 mb-11">

                                        <svg className="w-12 h-12" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7.61981C22.2827 6.16657 24.1593 5.25 26.25 5.25C30.116 5.25 33.25 8.38401 33.25 12.25C33.25 16.116 30.116 19.25 26.25 19.25C24.1593 19.25 22.2827 18.3334 21 16.8802M26.25 36.75H5.25V35C5.25 29.201 9.95101 24.5 15.75 24.5C21.549 24.5 26.25 29.201 26.25 35V36.75ZM26.25 36.75H36.75V35C36.75 29.201 32.049 24.5 26.25 24.5C24.3375 24.5 22.5444 25.0113 21 25.9047M22.75 12.25C22.75 16.116 19.616 19.25 15.75 19.25C11.884 19.25 8.75 16.116 8.75 12.25C8.75 8.38401 11.884 5.25 15.75 5.25C19.616 5.25 22.75 8.38401 22.75 12.25Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>


                                    </div>
                                    <h5 className="text-pink-900 text-xl font-bold mb-9">Facial makeup</h5>
                                    <p className="text-slate-400 text-base hidden group-hover:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-span-1 flex justify-center items-center shadow-sm overflow-hidden">
                        <div className="group w-full h-full hover:border-b-2 border-pink-500 transition-all ease-in-out duration-300">
                            <div className="relative w-full h-[180px] bg-no-repeat bg-cover bg-white">
                                <div className="group-hover:-translate-y-16 translate-y-5 duration-300 px-8 absolute inset-0 transition-all ease-in-out flex flex-col text-white">
                                    <div className="w-12 h-12 mb-11">

                                        <svg className="w-12 h-12" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7.61981C22.2827 6.16657 24.1593 5.25 26.25 5.25C30.116 5.25 33.25 8.38401 33.25 12.25C33.25 16.116 30.116 19.25 26.25 19.25C24.1593 19.25 22.2827 18.3334 21 16.8802M26.25 36.75H5.25V35C5.25 29.201 9.95101 24.5 15.75 24.5C21.549 24.5 26.25 29.201 26.25 35V36.75ZM26.25 36.75H36.75V35C36.75 29.201 32.049 24.5 26.25 24.5C24.3375 24.5 22.5444 25.0113 21 25.9047M22.75 12.25C22.75 16.116 19.616 19.25 15.75 19.25C11.884 19.25 8.75 16.116 8.75 12.25C8.75 8.38401 11.884 5.25 15.75 5.25C19.616 5.25 22.75 8.38401 22.75 12.25Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>


                                    </div>
                                    <h5 className="text-pink-900 text-xl font-bold mb-9">Facial makeup</h5>
                                    <p className="text-slate-400 text-base hidden group-hover:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            
            <div className="grid grid-col-3 gap-8 bg-no-repeat bg-fixed bg-cover bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1ha2V1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')] px-[5%] py-10 overflow-hidden">

                <div className="col-span-1 flex gap-4 flex-col">

                    <h3 className="text-pink-500 text-2xl font-semibold uppercase">What our clients say <br /> about betty</h3>

                    <p className="text-slate-800 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                    
                </div>

                <div className="col-span-2 flex flex-col gap-10 justify-center overflow-hidden">
                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                        <div className="group w-full h-full hover:border-b-2 border-pink-500 transition-all ease-in-out duration-300">
                            <div className="rounded-lg relative w-full h-[180px] bg-no-repeat bg-cover bg-white">
                                <div className="absolute p-10 inset-0 transition-all ease-in-out flex flex-col justify-between text-white">
                                    <p className="text-slate-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!</p>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full">
                                            <svg className="w-12 h-12" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 7.61981C22.2827 6.16657 24.1593 5.25 26.25 5.25C30.116 5.25 33.25 8.38401 33.25 12.25C33.25 16.116 30.116 19.25 26.25 19.25C24.1593 19.25 22.2827 18.3334 21 16.8802M26.25 36.75H5.25V35C5.25 29.201 9.95101 24.5 15.75 24.5C21.549 24.5 26.25 29.201 26.25 35V36.75ZM26.25 36.75H36.75V35C36.75 29.201 32.049 24.5 26.25 24.5C24.3375 24.5 22.5444 25.0113 21 25.9047M22.75 12.25C22.75 16.116 19.616 19.25 15.75 19.25C11.884 19.25 8.75 16.116 8.75 12.25C8.75 8.38401 11.884 5.25 15.75 5.25C19.616 5.25 22.75 8.38401 22.75 12.25Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                        <div className="flex flex-col justify-between">
                                            <h5 className="text-pink-900 text-base font-semibold">Facial makeup</h5>
                                            <h5 className="text-slate-500 text-base">Facial makeup</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>

        </div>
     );
}
 
export default ServicesPage;