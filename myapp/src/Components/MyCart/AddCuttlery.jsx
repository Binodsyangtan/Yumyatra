import React from 'react'
import { GiForkKnifeSpoon } from "react-icons/gi";

const AddCuttlery = () => {
    return (
        <>
            <div className='w-full p-2 flex gap-3 h-fit shadow-xl rounded-md'>
                <div className='hidden sm:flex'>
                    <GiForkKnifeSpoon className='text-red-600' size={30} />
                </div>
                <div className='flex flex-row justify-between w-full'>
                    <div className='-mt-2'>
                        <p className='text-lg font-semibold text-red-500'>Add cutlery</p>
                        <p className='text-[14px] -mt-1 font-medium text-gray-400'>Don't have cutlery? Resturant will provide you</p>
                    </div>
                    <div className='justify-center items-center flex'>
                        <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-red-200 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-red-600 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-red-600 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-red-600 checked:focus:bg-red-600 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-red-600 dark:checked:after:bg-white dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCuttlery
