import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../../../public/unsyiah.png";
import user from "../../../../public/UserProfile.jpg";

const SidebarKRS = () => {
    const [open, setOpen] = useState(false);
    const [submenu, setSubmenu] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setSubmenu(!submenu);
        console.log(submenu + " " + open);
    };
    return (
        <div
            className={` ${
                !open ? "w-14 relative" : "w-64 absolute"
            } duration-500 bg-emerald-400 h-full`}
        >
            <div className="flex gap-x-6 p-2 pt-5 items-center justify-end">
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500 ${
                            open ? "overflow-hidden" : ""
                        }`}
                    />
                    <h1
                        className={`text-black font-semibold text-xl duration-500 ${
                            !open && "overflow-hidden"
                        }`}
                    >
                        SIA - USK
                    </h1>
                </div>
                <div className="mr-2">
                    <HiMenuAlt2
                        size={20}
                        className="cursor-pointer origin-right"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <hr className={`${open ? "w-56" : "w-10"} mx-3 duration-500`} />
            <div className={`flex gap-x-6 p-2 pt-5 items-center justify-start`}>
                <div
                    className={`${
                        !open ? "mx-0" : "flex gap-x-4 items-center p-3"
                    } duration-500`}
                >
                    <img
                        src={user}
                        className={`sticky cursor-pointer rounded-full w-10 h-10`}
                    />
                    <div>
                        <h1
                            className={` text-center font-medium text-sm duration-500${
                                !open &&
                                "overflow-hidden opacity-0 translate-x-28"
                            }`}
                        >
                            Meone
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    <div
                        className={`flex flex-col text-sm gap-4 font-medium p-2 rounded-md ${
                            open ? "mx-5" : "mx-1"
                        }
                        `}
                    >
                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <MdOutlineDashboard size={20} />
                            </div>
                            <button
                                style={{
                                    transitionDelay: `${1 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Dashboard
                            </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex flex-row gap-2 items-start">
                                <div className="relative">
                                    <MdOutlineDashboard size={20} />
                                </div>
                                <button
                                    style={{
                                        transitionDelay: `${1 + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 flex flex-row gap-5 hover:bg-emerald-800 ${
                                        !open &&
                                        "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                                    onClick={handleClick}
                                >
                                    KRS{" "}
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            {/* <!-- Dropdown menu --> */}
                            {submenu && open && (
                                <div className="flex flex-col gap-2 items-start px-10">
                                    <button
                                        style={{
                                            transitionDelay: `${1 + 3}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                            !open &&
                                            "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                    >
                                        Isi KRS
                                    </button>
                                    <button
                                        style={{
                                            transitionDelay: `${1 + 3}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                            !open &&
                                            "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                    >
                                        KHS
                                    </button>
                                    <button
                                        style={{
                                            transitionDelay: `${1 + 3}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                            !open &&
                                            "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                    >
                                        PKRS
                                    </button>
                                    <button
                                        style={{
                                            transitionDelay: `${1 + 3}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                            !open &&
                                            "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                    >
                                        Mata Kuliah
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <CgTranscript size={20} />
                            </div>
                            <Link
                                href={route("simkuliah")}
                                as="button"
                                style={{
                                    transitionDelay: `${3 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Transkrip
                            </Link>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <HiOutlineAcademicCap size={20} />
                            </div>
                            <h2
                                style={{
                                    transitionDelay: `${4 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Ijazah
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <HiOutlineAcademicCap size={20} />
                            </div>
                            <h2
                                style={{
                                    transitionDelay: `${4 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Histori Niilai
                            </h2>
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute bottom-5 gap-4 p-2 
                        hover:bg-emerald-300 rounded-md justify-start border flex items-center duration-500 ${
                            open ? "mx-4 w-56" : "mx-1 w-12"
                        }`}
                >
                    <div>
                        <RiSettingsLine size={20} />
                    </div>

                    <h2
                        className={`whitespace-pre duration-500 font-medium text-sm ${
                            !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                    >
                        Setting
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SidebarKRS;
