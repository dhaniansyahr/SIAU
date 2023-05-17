import SidebarKRS from "@/Components/User/SidebarKRS";
import { BiSearch } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import React from "react";

const Transkrip = () => {
    return (
        <div className="flex h-screen">
            <SidebarKRS />
            <div className="p-5 text-2xl font-semibold h-screen w-screen flex flex-col gap-6">
                <div className="flex bg-gray-200 items-center p-2 rounded-md w-full h-[4rem] md:h-[5rem] shadow-lg">
                    <div className="flex bg-gray-200 items-center flex-row gap-2 w-full">
                        <BsJournalBookmark size={30} />
                        <hr className="h-10 w-px" color="black" />
                        <div className="flex items-center justify-between bg-white rounded-md w-full">
                            <input
                                type="text"
                                className=" rounded-md border-none"
                                placeholder="Pilih Semester"
                            />
                            <BiSearch className="opacity-50 mx-2" />
                        </div>
                        <button className="text-center text-base font-bold bg-emerald-300  w-16 md:w-[5rem] md:h-[2rem] h-9 rounded-md">
                            Pilih
                        </button>
                        <button className="text-center text-xs font-bold bg-emerald-300 w-16 md:w-[5rem] md:h-[2rem] h-9 rounded-md">
                            Cetak
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row w-full h-full">
                    <div
                        className="bg-gray-200 rounded-xl h-fit md:h-full p-8 flex flex-col gap-8 
        shadow-2xl w-full"
                    >
                        <div className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-full">
                            <div>
                                <HiOutlineAcademicCap
                                    size={40}
                                    className="m-4"
                                    color={`#52525B`}
                                />
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                                    00.00
                                </p>
                                <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                                    IP
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-full">
                            <div>
                                <FiFileText
                                    size={40}
                                    className="m-4"
                                    color={`#52525B`}
                                />
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                                    00.00
                                </p>
                                <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                                    IPK
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-full">
                            <div>
                                <HiChartBar
                                    size={40}
                                    className="m-4"
                                    color={`#52525B`}
                                />
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                                    00
                                </p>
                                <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                                    Semester
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-full">
                            <div>
                                <HiCollection
                                    size={40}
                                    className="m-4"
                                    color={`#52525B`}
                                />
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                                    00
                                </p>
                                <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                                    SKS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 h-[15rem] bg-gray-200 rounded-xl p-4 md:w-full md:h-full shadow-xl">
                        <div className="flex items-center justify-between">
                            <h2 className="text-left font-bold md:text-3xl md:font-sans">
                                Transkrip Activity
                            </h2>
                            <button className="bg-emerald-300 rounded-lg w-[10rem] text-center h-[3rem]">
                                Download
                            </button>
                        </div>
                        <hr className=" w-full h-px" color="black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transkrip;
