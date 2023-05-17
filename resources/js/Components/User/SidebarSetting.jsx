import React from "react";
import logo from "../../../../public/unsyiah.png";
import user from "../../../../public/UserProfile.jpg";
import { Link } from "@inertiajs/react";
import { CgTranscript } from "react-icons/cg";
// import { HiOutlineAcademicCap } from "react-icons/hi";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
// import { RiSettingsLine } from "react-icons/ri";

const SidebarSetting = () => {
    const [open, setOpen] = React.useState(false);
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
                            <Link
                                href={route("biodata")}
                                as="button"
                                style={{
                                    transitionDelay: `${1 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 hover:bg-emerald-800 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Biodata
                            </Link>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <VscFileSubmodule size={20} />
                            </div>
                            <Link
                                href={route("security")}
                                as="button"
                                style={{
                                    transitionDelay: `${2 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Security & Sign in
                            </Link>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="relative">
                                <CgTranscript size={20} />
                            </div>
                            <Link
                                href={route("dashboard")}
                                as="button"
                                style={{
                                    transitionDelay: `${3 + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarSetting;
