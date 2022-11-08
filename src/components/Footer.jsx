const Footer = () => {
    return ( 
        <footer className="w-full h-full grid grid-rows-2 gap-6">


            <div className="row-span-1 flex flex-col gap-7 w-full h-full pb-10">
                <h3 className="text-slate-400 font-bold text-2xl mt-6 text-center">
                    Instagram: 
                    <span className="text-pink-500">   Makeover</span>
                </h3>

                <div className="grid grid-cols-5 flex-1 gap-5 px-6">
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-1 last-of-type:rounded-tr-none last-of-type:rounded-br-none first-of-type:rounded-tl-none first-of-type:rounded-bl-none rounded-xl bg-pink-50"></div>
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-1 last-of-type:rounded-tr-none last-of-type:rounded-br-none first-of-type:rounded-tl-none first-of-type:rounded-bl-none rounded-xl bg-pink-50"></div>
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-1 last-of-type:rounded-tr-none last-of-type:rounded-br-none first-of-type:rounded-tl-none first-of-type:rounded-bl-none rounded-xl bg-pink-50"></div>
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-1 last-of-type:rounded-tr-none last-of-type:rounded-br-none first-of-type:rounded-tl-none first-of-type:rounded-bl-none rounded-xl bg-pink-50"></div>
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-1 last-of-type:rounded-tr-none last-of-type:rounded-br-none first-of-type:rounded-tl-none first-of-type:rounded-bl-none rounded-xl bg-pink-50"></div>
                </div>
            </div>

            <div className="row-span-1 bg-pink-50 px-[8%] flex items-center pt-7">
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:flex justify-between w-full">

                    <div className="col-span-1 flex flex-col gap-6">
                        <h4 className="font-medium text-xl text-pink-900 capitalize">Logo</h4>
                        <p className="text-slate-500 text-sm font-normal capitalize">A perfect beauty salon near <br/> you to make you more beautifull</p>
                        <div className="flex gap-3">
                            <svg className="w-5 h-5 fill-slate-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00012 3C2.00012 2.44772 2.44784 2 3.00012 2H5.153C5.64183 2 6.05902 2.35341 6.13939 2.8356L6.8787 7.27147C6.95087 7.70451 6.73218 8.13397 6.33952 8.3303L4.79138 9.10437C5.90768 11.8783 8.1218 14.0924 10.8958 15.2087L11.6698 13.6606C11.8661 13.2679 12.2956 13.0492 12.7286 13.1214L17.1645 13.8607C17.6467 13.9411 18.0001 14.3583 18.0001 14.8471V17C18.0001 17.5523 17.5524 18 17.0001 18H15.0001C7.82042 18 2.00012 12.1797 2.00012 5V3Z"/>
                            </svg>

                            <p className="text-slate-500 text-sm font-normal capitalize"> + 237 623 902 672</p>
                        </div>

                        <div className="flex gap-3">
                            <svg className="w-5 h-5 fill-slate-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0016 4.19497 16.5104 3.99991 16 4H4C3.48958 3.99991 2.99845 4.19497 2.62718 4.54523C2.25591 4.89549 2.0326 5.37444 2.003 5.884Z"/>
                                <path d="M18 8.118L10 12.118L2 8.118V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.118Z"/>
                            </svg>
                            <p className="text-slate-500 text-sm font-normal">over@makeover.com</p>
                        </div>
                    </div>

                    <div className="col-span-1 max-lg:hidden flex flex-col gap-6">
                        <h4 className="font-medium text-xl text-pink-900 capitalize">Quick Links</h4>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Home</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">About us</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Beaty tips</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Blogs</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Contact us</span>
                        </a>
                    </div>

                    <div className="col-span-1 max-lg:hidden flex flex-col gap-4">
                        <h4 className="font-medium text-xl text-pink-900 capitalize">Quick Links</h4>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Home</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">About us</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Beaty tips</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Blogs</span>
                        </a>
                        <a href="#">
                            <span className="text-slate-500 text-sm font-normal capitalize">Contact us</span>
                        </a>
                    </div>

                    <div className="col-span-1 flex flex-col gap-6">
                        <h4 className="font-medium text-xl text-pink-900 capitalize">Subscribe us</h4>
                        <div className="flex w-full h-12 bg-white sm:text-lg text-base border border-pink-500 transition ease-in-out duration-150 text-slate-500 px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            <input type="text" className="block w-full max-w-lg px-1 rounded-full border-white focus:border-white focus:ring-red-300 outline-none sm:max-w-xs sm:text-sm" />
                            <button className="capitalize max-lg:text-sm bg-pink-500 hover:bg-pink-600 transition ease-in-out duration-150 text-white px-5 py-1 max-sm:px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                <span className="max-sm:hidden">Send</span>
                                <span className="max-sm:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
                                </span>
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex justify-center items-center w-8 h-8 rounded-full border border-pink-500 bg-pink-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-pink-500" ><path d="M8.93133 13.998V8.53399H10.7747L11.0487 6.39466H8.93133V5.03199C8.93133 4.41466 9.10333 3.99199 9.98933 3.99199H11.112V2.08466C10.5658 2.02612 10.0167 1.99785 9.46733 1.99999C7.838 1.99999 6.71933 2.99466 6.71933 4.82066V6.39066H4.888V8.52999H6.72333V13.998H8.93133Z"></path></svg>
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 rounded-full border border-pink-500 bg-pink-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-pink-500"><path d="M13.0886 5.33132C13.0973 5.44799 13.0973 5.56399 13.0973 5.67999C13.0973 9.22999 10.3953 13.3207 5.45731 13.3207C3.93598 13.3207 2.52265 12.88 1.33331 12.1147C1.54931 12.1393 1.75731 12.148 1.98198 12.148C3.19064 12.1509 4.36508 11.7467 5.31598 11.0007C4.75559 10.9905 4.21236 10.8056 3.76214 10.4718C3.31191 10.138 2.97717 9.67192 2.80465 9.13866C2.97065 9.16332 3.13731 9.17999 3.31198 9.17999C3.55265 9.17999 3.79465 9.14666 4.01931 9.08866C3.41115 8.96586 2.8643 8.63622 2.47173 8.15578C2.07916 7.67534 1.86511 7.07375 1.86598 6.45332V6.41999C2.22398 6.61932 2.63931 6.74399 3.07931 6.76065C2.71071 6.51571 2.40846 6.18334 2.19954 5.79318C1.99062 5.40303 1.88152 4.96723 1.88198 4.52466C1.88198 4.02599 2.01465 3.56866 2.24731 3.16999C2.92207 4 3.76365 4.67903 4.71754 5.16309C5.67143 5.64716 6.71635 5.92547 7.78465 5.97999C7.74331 5.77999 7.71798 5.57265 7.71798 5.36465C7.7178 5.01196 7.78714 4.66269 7.92203 4.33681C8.05692 4.01094 8.25471 3.71484 8.5041 3.46545C8.7535 3.21606 9.04959 3.01826 9.37547 2.88337C9.70135 2.74849 10.0506 2.67915 10.4033 2.67932C11.1766 2.67932 11.8746 3.00332 12.3653 3.52732C12.9665 3.41107 13.543 3.1916 14.0693 2.87865C13.8689 3.4992 13.4492 4.02539 12.8886 4.35866C13.4218 4.29784 13.9429 4.15762 14.4346 3.94265C14.0674 4.47805 13.6123 4.94755 13.0886 5.33132V5.33132Z"></path></svg>
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 rounded-full border border-pink-500 bg-pink-200">
                                <svg className="w-4 h-4 fill-pink-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99935 4.91803C7.18178 4.91803 6.39769 5.24281 5.81958 5.82092C5.24147 6.39903 4.91669 7.18312 4.91669 8.0007C4.91669 8.81827 5.24147 9.60236 5.81958 10.1805C6.39769 10.7586 7.18178 11.0834 7.99935 11.0834C8.81693 11.0834 9.60102 10.7586 10.1791 10.1805C10.7572 9.60236 11.082 8.81827 11.082 8.0007C11.082 7.18312 10.7572 6.39903 10.1791 5.82092C9.60102 5.24281 8.81693 4.91803 7.99935 4.91803V4.91803ZM7.99935 10.0027C7.46821 10.0027 6.95883 9.7917 6.58325 9.41613C6.20768 9.04056 5.99669 8.53117 5.99669 8.00003C5.99669 7.46889 6.20768 6.9595 6.58325 6.58393C6.95883 6.20836 7.46821 5.99736 7.99935 5.99736C8.53049 5.99736 9.03988 6.20836 9.41545 6.58393C9.79103 6.9595 10.002 7.46889 10.002 8.00003C10.002 8.53117 9.79103 9.04056 9.41545 9.41613C9.03988 9.7917 8.53049 10.0027 7.99935 10.0027V10.0027Z"/>
                                    <path d="M11.204 5.52333C11.6009 5.52333 11.9227 5.20157 11.9227 4.80466C11.9227 4.40776 11.6009 4.086 11.204 4.086C10.8071 4.086 10.4854 4.40776 10.4854 4.80466C10.4854 5.20157 10.8071 5.52333 11.204 5.52333Z"/>
                                    <path d="M13.6887 4.07402C13.5343 3.67548 13.2985 3.31355 12.9962 3.0114C12.694 2.70925 12.3319 2.47354 11.9333 2.31936C11.4669 2.14426 10.9741 2.04958 10.476 2.03936C9.83401 2.01136 9.63068 2.00336 8.00268 2.00336C6.37468 2.00336 6.16601 2.00336 5.52934 2.03936C5.0316 2.04906 4.53918 2.14376 4.07334 2.31936C3.67463 2.47336 3.31252 2.709 3.01023 3.01118C2.70795 3.31335 2.47216 3.67537 2.31801 4.07402C2.14288 4.54043 2.04842 5.03325 2.03868 5.53136C2.01001 6.17269 2.00134 6.37602 2.00134 8.00469C2.00134 9.63269 2.00134 9.84002 2.03868 10.478C2.04868 10.9767 2.14268 11.4687 2.31801 11.936C2.47259 12.3345 2.70861 12.6964 3.01097 12.9985C3.31333 13.3007 3.67539 13.5364 4.07401 13.6907C4.53897 13.8728 5.03159 13.9743 5.53068 13.9907C6.17268 14.0187 6.37601 14.0274 8.00401 14.0274C9.63201 14.0274 9.84068 14.0274 10.4773 13.9907C10.9754 13.9806 11.4682 13.8861 11.9347 13.7114C12.3332 13.5568 12.6951 13.3209 12.9973 13.0187C13.2996 12.7164 13.5355 12.3545 13.69 11.956C13.8653 11.4894 13.9593 10.9974 13.9693 10.4987C13.998 9.85736 14.0067 9.65402 14.0067 8.02536C14.0067 6.39669 14.0067 6.19002 13.9693 5.55202C13.9616 5.04687 13.8666 4.54686 13.6887 4.07402V4.07402ZM12.8767 10.4287C12.8724 10.8129 12.8023 11.1935 12.6693 11.554C12.5692 11.8133 12.416 12.0487 12.2194 12.2451C12.0228 12.4416 11.7873 12.5947 11.528 12.6947C11.1715 12.827 10.7949 12.8971 10.4147 12.902C9.78134 12.9314 9.60268 12.9387 7.97868 12.9387C6.35334 12.9387 6.18734 12.9387 5.54201 12.902C5.16196 12.8974 4.78556 12.8272 4.42934 12.6947C4.16913 12.5953 3.93268 12.4425 3.73527 12.246C3.53786 12.0495 3.3839 11.8138 3.28334 11.554C3.15231 11.1974 3.08222 10.8212 3.07601 10.4414C3.04734 9.80802 3.04068 9.62936 3.04068 8.00536C3.04068 6.38069 3.04068 6.21469 3.07601 5.56869C3.08032 5.1847 3.15045 4.8043 3.28334 4.44402C3.48668 3.91802 3.90334 3.50402 4.42934 3.30269C4.78574 3.17078 5.16203 3.10067 5.54201 3.09536C6.17601 3.06669 6.35401 3.05869 7.97868 3.05869C9.60334 3.05869 9.77001 3.05869 10.4147 3.09536C10.7949 3.09993 11.1716 3.17007 11.528 3.30269C11.7873 3.40287 12.0228 3.55616 12.2193 3.75271C12.4159 3.94926 12.5692 4.18474 12.6693 4.44402C12.8004 4.80066 12.8705 5.1768 12.8767 5.55669C12.9053 6.19069 12.9127 6.36869 12.9127 7.99336C12.9127 9.61736 12.9127 9.79202 12.884 10.4294H12.8767V10.4287Z"/>
                                </svg>
                            </div>

                            <div className="flex justify-center items-center w-8 h-8 rounded-full border border-pink-500 bg-pink-200">
                                <svg className="w-4 h-4 fill-pink-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.32212 4.79801C4.12772 4.79801 4.78079 4.14494 4.78079 3.33934C4.78079 2.53374 4.12772 1.88068 3.32212 1.88068C2.51652 1.88068 1.86346 2.53374 1.86346 3.33934C1.86346 4.14494 2.51652 4.79801 3.32212 4.79801Z"/>
                                    <path d="M6.15812 5.90331V13.996H8.67079V9.99397C8.67079 8.93797 8.86945 7.91531 10.1788 7.91531C11.4701 7.91531 11.4861 9.12264 11.4861 10.0606V13.9966H14.0001V9.55864C14.0001 7.37864 13.5308 5.70331 10.9828 5.70331C9.75945 5.70331 8.93945 6.37464 8.60412 7.00997H8.57012V5.90331H6.15812V5.90331ZM2.06345 5.90331H4.58012V13.996H2.06345V5.90331Z"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </footer>
     );
}
 
export default Footer;