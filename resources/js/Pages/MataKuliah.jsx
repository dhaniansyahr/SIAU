import DaftarSimKuliah from "@/Atom/DaftarSimKuliah";
import SidebarKRS from "@/Components/User/SidebarKRS";
import React from "react";

const MataKuliah = () => {
    const [rows, setRows] = React.useState(DaftarSimKuliah);

    return (
        <div className="flex h-screen">
            <div>
                <SidebarKRS />
            </div>
            <div className="flex h-full w-screen p-6 flex-col gap-10 items-end">
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default MataKuliah;
