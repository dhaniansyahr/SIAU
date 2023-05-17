import React from "react";
// import Sidebar from "@/Components/User/Sidebar";
import SidebarKRS from "@/Components/User/SidebarKRS";
import DaftarSimKuliah from "@/Atom/DaftarSimKuliah";
import { BiRefresh } from "react-icons/bi";
import { useState } from "react";

const Simkuliah = () => {
    const [rows, setRows] = useState(DaftarSimKuliah);

    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SidebarKRS />
            </div>
            <div className="flex h-screen w-screen p-6 flex-col gap-10">
                <div className="flex items-center bg-gray-200 h-fit w-full p-5 rounded-lg shadow-lg justify-between">
                    <h1 className=" text-base font-bold">
                        Jadwal Kuliah Hari Ini
                    </h1>
                    <div className="flex items-center bg-emerald-300 w-32 justify-center h-10 rounded-lg">
                        <BiRefresh size={20} />
                        <button className="text-base font-bold text-center">
                            Refresh
                        </button>
                    </div>
                </div>
                <form className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full md:overflow-x-visible">
                    <table className="table-fixed w-full">
                        <thead className="w-fit md:w-full">
                            <tr className="bg-emerald-300">
                                <th scope="col" className="px-6 py-3">
                                    Kode
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                >
                                    Mata Kuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    SKS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kelas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pengajar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ruang
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Absensi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-fit md:w-full text-center text-xs md:text-lg">
                            {rows.DaftarSimKuliah.map((row) => (
                                <tr>
                                    <td className="px-6 py-3">{row.Kode}</td>
                                    <td className="px-6 py-3">
                                        {row.MataKuliah}
                                    </td>
                                    <td className="px-6 py-3">{row.SKS}</td>
                                    <td className="px-6 py-3">{row.Kelas}</td>
                                    <td className="px-6 py-3">
                                        {row.Pengajar}
                                    </td>
                                    <td className="px-6 py-3">{row.Ruang}</td>
                                    <td className="px-6 py-3">{row.Absensi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Simkuliah;
