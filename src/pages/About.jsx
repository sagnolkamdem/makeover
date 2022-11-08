const About = () => {
    return ( 
        <div className="xl:grid xl:grid-cols-2 flex flex-col mt-5 items-center justify-center xl:gap-[10%] gap-10 w-full h-full pl-[5%] pr-[8%]">

            <div className="relative xl:grid hidden grid-rows-6 h-[90%] col-span-1 p-10">

                <div className="grid grid-cols-7 gap-6 row-span-4">
                    <div className="bg-[url('https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-cover bg-no-repeat col-span-4 bg-pink-100 rounded-xl"></div>
                    <div className="col-span-3">
                        <div className="bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1437915160026-6c59da36ede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHN0eWxlJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')] w-full h-[80%] bg-pink-50 rounded-xl"></div>
                    </div>
                </div>

                <div className="absolute bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1465145498025-928c7a71cab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaXIlMjBzdHlsZSUyMHBuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')] top-[60%] h-[30%] w-[70%] right-0 mr-10 bg-pink-200 rounded-xl"></div>

                <div className="row-span-2"></div>


            </div>

            <div className="flex items-center col-span-1">
                <div className="flex flex-col gap-8">

                    <h3 className="text-pink-500 text-2xl font-semibold uppercase">About us</h3>

                    <h1 className="capitalize xl:text-6xl text-3xl text-pink-900 font-inter font-extrabold">Beauty is about <br/> being comfortable <br/> In your own skin</h1>

                    <div className="flex flex-col gap-3">
                        <p className="text-slate-500 text-lg font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, maxime. Quaerat sunt beatae temporibus amet porro sint numquam officia sed, officiis, id harum facere ipsam laborum consequuntur? Iusto aut saepe nulla, quidem, ullam fuga quis ab sint accusantium nobis enim.</p>
                    </div>

                    <div className="flex sm:justify-between sm:flex-row flex-col gap-3">
                        <button className="sm:text-lg capitalize text-base bg-pink-500 hover:bg-pink-600 transition ease-in-out duration-150 text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default About;