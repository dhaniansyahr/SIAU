import React from "react";

// Komponen
import Sidebar from "@/Components/User/Sidebar";
import Userfoto from "../../../public/UserProfile.jpg";
import { InfoMenu } from "@/Atom/InfoMenu";

// Icon yang digunakan
import { HiArrowSmLeft } from "react-icons/hi";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";

const DashboardUser = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold h-screen w-screen flex flex-col gap-14 overflow-y-scroll">
                <div className="bg-gray-200 w-full h-20 rounded-lg shadow-2xl flex items-center justify-between">
                    <button className="border-r-2 border-gray-300 h-12 flex items-center">
                        <HiArrowSmLeft
                            size={30}
                            color="#D4D4D8"
                            className="m-3"
                        />
                    </button>
                    <div className="flex justify-end">
                        <div className="border-l-2 border-gray-300 h-12 flex items-center">
                            <HiChatBubbleLeft
                                size={30}
                                color="#D4D4D8"
                                className="m-3"
                            />
                        </div>
                        <div className="border-l-2 border-gray-300 h-12 flex items-center">
                            <HiOutlineUserCircle
                                size={30}
                                color="#D4D4D8"
                                className="m-3"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 h-48 md:h-80 rounded-xl shadow-2xl flex">
                    <div className="mt-8 md:mt-10">
                        <img
                            src={Userfoto}
                            className="rounded-full w-[8rem] h-[8rem] md:rounded-full md:w-[15rem] md:h-[15rem] mx-4 md:mx-10"
                        />
                    </div>
                    <div className=" mt-8 md:mt-14 md:w-full md:mx-16">
                        <h1 className="text-sm md:text-2xl font-medium text-gray-600">
                            Meone
                        </h1>
                        <h1 className="text-xs md:text-xl font-normal text-gray-600 mt-4 md:mt-6">
                            Fakultas Matematika dan Ilmu Pengetahuan Alam
                        </h1>
                        <h1 className="text-xs md:text-xl font-normal text-gray-600">
                            S1 - Informatika
                        </h1>
                        <h1 className="text-xs md:text-xl font-normal text-gray-600 leading-normal">
                            2108107010057
                        </h1>
                        <hr className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-xs md:text-xl font-normal text-gray-600 leading-normal">
                            Dosen Wali
                        </h1>
                        <hr className="h-px my-1 md:my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                </div>
                <div className="bg-gray-200 rounded-xl h-max p-8 flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-2 shadow-2xl">
                    {InfoMenu?.map((menu, i) => (
                        <div
                            to={menu?.link}
                            key={i}
                            className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-56"
                        >
                            <div>
                                {React.createElement(menu?.icon, {
                                    size: "40",
                                    className: "m-4",
                                    color: "#52525B",
                                })}
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                                    {menu?.value}
                                </p>
                                <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                                    {menu?.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardUser;
