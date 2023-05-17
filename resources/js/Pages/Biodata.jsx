import SidebarSetting from "@/Components/User/SidebarSetting";
import { LabelDataPribadi } from "@/Atom/LabelDataPribadi";
import { LabelDataOrangTua } from "@/Atom/LabelDataOrangTua";
import React from "react";

const Biodata = () => {
    return (
        <div className="flex h-screen">
            <SidebarSetting />
            <div className="w-full h-full flex flex-col gap-20 px-6 py-10 md:py-14 md:px-20 md:gap-12">
                <div className="bg-gray-200 flex flex-col gap-4 pt-4 pb-4 rounded-lg w-full shadow-xl">
                    <div className="flex flex-col gap-2 mx-5">
                        <p className="text-base md:text-2xl font-semibold text-left mx-1">
                            Data Pribadi
                        </p>
                        <hr
                            className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                            color="black"
                        />
                        <div>
                            {LabelDataPribadi?.map((item, index) => (
                                <div
                                    className="flex flex-row gap-4"
                                    key={index}
                                >
                                    <div className="flex flex-col w-[14rem] leading-10 md:text-xl md:w-full md:leading-[2rem]">
                                        <h2 className="text-left font-medium text-base">
                                            {item.Name}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col w-[14rem] text-base leading-10 md:text-xl md:w-full md:leading-[2rem]">
                                        <h2 className="text-left">
                                            {item.Value}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-col gap-4 pt-4 pb-4 rounded-lg w-full shadow-xl">
                    <div className="flex flex-col gap-2 mx-5">
                        <p className="text-base md:text-2xl text-left mx-1 font-semibold">
                            Data Orang Tua
                        </p>
                        <hr
                            className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                            color="black"
                        />
                        <div className="cals">
                            {LabelDataOrangTua?.map((item, index) => (
                                <div
                                    className="flex flex-row gap-2"
                                    key={index}
                                >
                                    <div className="flex flex-col w-[14rem] leading-10 md:w-full md:leading-[2rem] md:text-xl">
                                        <h2 className="text-left font-medium text-base">
                                            {item.Name}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col w-[14rem] leading-10 md:w-full md:leading-[2rem] md:text-xl">
                                        <h2 className="text-left">
                                            {item.Value}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biodata;
