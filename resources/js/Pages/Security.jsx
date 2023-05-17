import SidebarSetting from "@/Components/User/SidebarSetting";
import React from "react";

const Security = () => {
    return (
        <div className="flex h-screen">
            <div className="flex h-screen">
                <SidebarSetting />
            </div>
            <div className="flex h-screen w-screen p-10 md:p-20">
                <div className=" bg-gray-200 h-fit w-full rounded-xl shadow-xl p-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 mx-5">
                        <div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2 w-[14rem] md:text-xl md:w-full md:leading-[2rem]">
                                    <h2 className="text-left font-medium text-sm md:text-base leading-8">
                                        Name
                                    </h2>
                                    <div className=" flex items-center flex-row gap-10">
                                        <h2 className="text-left items-center">
                                            Rama Dhaniansyah
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-[14rem] md:text-xl md:w-full md:leading-[2rem]">
                                    <h2 className="text-left font-medium text-sm md:text-base leading-8">
                                        Npm
                                    </h2>
                                    <div className=" flex items-center flex-row gap-10">
                                        <h2 className="text-left items-center">
                                            2108107010057
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-[14rem] md:text-xl md:w-full md:leading-[2rem]">
                                    <h2 className="text-left font-medium text-sm md:text-base leading-8">
                                        Email
                                    </h2>
                                    <div className=" flex items-center flex-row gap-10">
                                        <h2 className="text-left items-center">
                                            rama_dh@mhs.unsyiah.ac.id
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-[14rem] md:text-xl md:w-full md:leading-[2rem]">
                                    <h2 className="text-left font-medium text-sm md:text-base leading-8">
                                        Password
                                    </h2>
                                    {/* Update Password */}
                                    <form className=" flex items-center flex-row gap-10">
                                        <h2 className="text-left items-center">
                                            ********
                                        </h2>
                                        <div>
                                            <button className=" text-blue-500">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
