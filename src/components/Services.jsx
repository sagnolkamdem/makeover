const Services = () => {
    return ( 
        <div className="relative flex items-end justify-end w-screen h-screen overflow-hidden">
            <div className="w-[70%] h-[75%] bg-gradient-to-tl from-white to-pink-100"></div>
            <div className="absolute flex flex-col gap-4 inset-0 px-[5%] py-[1%]">
                <h3 className="text-pink-500 text-2xl font-semibold uppercase">Our services</h3>
                <h1 className="capitalize xl:text-6xl text-3xl mb-10 text-pink-900 font-inter font-extrabold">We are experienced <br/> in making you <br/> more beautifull</h1>
                
                <div className="flex max-lg:hidden w-full h-4/5 gap-8">

                    <div className="h-full w-[17%] flex flex-col border-t-2 border-pink-500">
                        <div className="w-full h-full flex flex-col justify-center gap-3">
                            <h2 className="flex justify-center items-center capitalize text-3xl text-pink-900 font-extrabold">Beauty treatments</h2>
                            <p className="text-slate-500 text-base font-normal">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                            <div className="flex items-center">
                                <button className="sm:text-lg capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[25%] h-[94%] bg-no-repeat rounded-lg bg-cover bg-[url('https://images.unsplash.com/photo-1560264641-1b5191cc63e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBzdHlsZSUyMHBuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')]"></div>

                    <div className="w-[35%] grid grid-cols-2 gap-y-3 gap-x-5 ">

                        <div className="w-full h-full flex flex-col justify-center gap-3 border-t-2 border-pink-500">
                            <h2 className="flex capitalize text-base text-pink-900 font-bold">Beauty treatments</h2>
                            <p className="text-slate-500 text-sm font-normal">Project recently success title century to outside sport. With occasion ever</p>
                            <p className="text-pink-500 text-lg font-semibold uppercase">$342</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center gap-3 border-t-2 border-pink-500">
                            <h2 className="flex capitalize text-base text-pink-900 font-bold">Beauty treatments</h2>
                            <p className="text-slate-500 text-sm font-normal">Project recently success title century to outside sport. With occasion ever</p>
                            <p className="text-pink-500 text-lg font-semibold uppercase">$342</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center gap-3 border-t-2 border-pink-500">
                            <h2 className="flex capitalize text-base text-pink-900 font-bold">Beauty treatments</h2>
                            <p className="text-slate-500 text-sm font-normal">Project recently success title century to outside sport. With occasion ever</p>
                            <p className="text-pink-500 text-lg font-semibold uppercase">$342</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center gap-3 border-t-2 border-pink-500">
                            <h2 className="flex capitalize text-base text-pink-900 font-bold">Beauty treatments</h2>
                            <p className="text-slate-500 text-sm font-normal">Project recently success title century to outside sport. With occasion ever</p>
                            <p className="text-pink-500 text-lg font-semibold uppercase">$342</p>
                        </div>
                        
                    </div>
                </div>

                <div className="hidden max-lg:flex justify-center w-full h-4/5 gap-8">

                    <div className="h-full w-[30%] min-w-[250px] flex flex-col border-t-2 border-pink-500">
                        <div className="w-full h-full flex flex-col justify-center gap-3">
                            <h2 className="flex justify-center items-center capitalize text-3xl text-pink-900 font-extrabold">Beauty treatments</h2>
                            <p className="text-slate-500 text-base font-normal">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                            <div className="flex items-center">
                                <button className="max-lg:text-sm capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 max-lg:px-3 max-lg:py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="max-sm:hidden w-[50%] h-[94%] bg-no-repeat rounded-lg bg-cover bg-[url('https://images.unsplash.com/photo-1560264641-1b5191cc63e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBzdHlsZSUyMHBuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')]"></div>
                
                </div>

            </div>
        </div>
     );
}
 
export default Services;