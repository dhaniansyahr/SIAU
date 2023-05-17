import React from "react";
import { HiOutlineUser, HiOutlineKey } from "react-icons/hi";
import unsyiah from "../../../public/unsyiah.png";
import { Link } from "@inertiajs/react";

const Login = () => {
    return (
        <div className="h-screen bg-emerald-400 flex items-center justify-center md:flex md:items-center md:justify-center">
            <form className="h-auto flex flex-col items-center justify-center md:flex md:flex-row md:gap-10" method="post">
                <div className="w-auto bg-emerald-400 mb-32 md:relative md:bottom-[2rem]">
                    <p className="text-2xl font-extrabold md:text-4xl md:text-left text-center">
                        SIA - USK
                    </p>
                    <p className="text-xl font-medium text-center md:text-left md:text-2xl">
                        Sistem Informasi Akademik Universitas Syiah Kuala
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 bg-gray-50 w-[25rem] md:w-[30rem] h-[34rem] md:h-[36rem] justify-center rounded-2xl">
                    <img src={unsyiah} className="w-24 h-24 mb-20" />
                    <p className="text-left font-medium text-xl text-black">
                        Welcome Back!
                    </p>
                    <div className="flex flex-col gap-2 md:flex md:items-center">
                        <div className="flex items-center w-auto">
                            <div className=" bg-gray-400 rounded-l-md h-12 w-10 flex items-center justify-center">
                                <HiOutlineUser size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="bg-white opacity-75 rounded-r-md md:w-[20rem] w-[17rem]"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="bg-gray-400 h-12 w-10 rounded-l-md flex items-center justify-center">
                                <HiOutlineKey size={20} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-white opacity-75 rounded-r-md md:w-[20rem] w-[17rem]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4 md:flex md:items-center">
                        <Link href={route("dashboard")}>
                            <button className="bg-emerald-200 hover:bg-emerald-400 py-2 px-4 rounded-md opacity-75 font-bold md:w-[22.5rem] w-[19.5rem]">
                                Login
                            </button>
                        </Link>
                        <hr className="h-px w-full bg-gray-300 border-0" />
                        <div>
                            <button className="bg-emerald-200 hover:bg-emerald-400 py-2 px-4 rounded-md opacity-75 font-bold md:w-[22.5rem] w-[19.5rem]">
                                Sigle Sign On
                            </button>
                        </div>
                    </div>
                    <p className="text-center font-medium text-base text-black">
                        &#169; Meone & toosakarin
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
