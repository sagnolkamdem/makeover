const BestSellers = () => {
    return ( 
        <div className="flex flex-col pt-10 items-center justify-center gap-6 w-full h-full bg-gradient-to-t to-pink-100 from-white px-[5%]">

            <h3 className="text-pink-500 text-2xl font-semibold uppercase">Best Sellers</h3>

            <h1 className="capitalize xl:text-6xl text-3xl text-pink-900 font-inter text-center font-extrabold">Our feature <br/> beauty treatments</h1>

            <div className="flex items-center w-full h-4/5 justify-between max-lg:justify-center">
                <div className="w-[300px] flex flex-col justify-center gap-2">
                    <div className="rounded-xl w-full h-[200px] bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHN0eWxlJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"></div>
                    <h2 className="flex justify-center items-center capitalize text-2xl text-pink-900 font-inter text-center font-extrabold">Spot reduction</h2>
                    <p className="text-slate-500 text-base font-normal text-center">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                    <p className="text-pink-500 text-2xl font-semibold uppercase text-center">$342</p>
                    <div className="flex justify-center items-center">
                        <button className="sm:text-lg capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Book now
                        </button>
                    </div>
                </div>
                <div className="w-[300px] max-lg:hidden flex flex-col justify-center gap-2">
                    <div className="rounded-xl w-full h-[200px] bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHN0eWxlJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"></div>
                    <h2 className="flex justify-center items-center capitalize text-2xl text-pink-900 font-inter text-center font-extrabold">Spot reduction</h2>
                    <p className="text-slate-500 text-base font-normal text-center">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                    <p className="text-pink-500 text-2xl font-semibold uppercase text-center">$342</p>
                    <div className="flex justify-center items-center">
                        <button className="sm:text-lg capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Book now
                        </button>
                    </div>
                </div>
                <div className="w-[300px] max-lg:hidden flex flex-col justify-center gap-2">
                    <div className="rounded-xl w-full h-[200px] bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHN0eWxlJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"></div>
                    <h2 className="flex justify-center items-center capitalize text-2xl text-pink-900 font-inter text-center font-extrabold">Spot reduction</h2>
                    <p className="text-slate-500 text-base font-normal text-center">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                    <p className="text-pink-500 text-2xl font-semibold uppercase text-center">$342</p>
                    <div className="flex justify-center items-center">
                        <button className="sm:text-lg capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Book now
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="flex-1 flex justify-center items-center w-full gap-6">
                <div className="w-full gap-5 grid grid-rows-10">
                    <div className="row-span-4 rounded-xl bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHN0eWxlJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"></div>
                    <h2 className="row-span-1 flex justify-center items-center capitalize text-3xl text-pink-900 font-inter text-center font-extrabold">Spot reduction</h2>
                    <p className="row-span-1 text-slate-500 text-lg font-normal text-center">The biggest mith is that lash extension ruin your own lashes. They do not. If applied</p>
                    <p className="row-span-1 text-pink-500 text-2xl font-semibold uppercase text-center">$342</p>
                    <div className="row-span-1 flex justify-center items-center">
                        <button className="sm:text-lg capitalize text-base border border-pink-500 text-slate-500 bg-white hover:bg-pink-600 transition ease-in-out duration-150 hover:text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Book now
                        </button>
                    </div>
                    <div className="row-span-2"></div>
                </div>
            </div> */}
            
        </div>
     );
}
 
export default BestSellers;