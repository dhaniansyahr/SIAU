import React from "react";
import SidebarKRS from "@/Components/User/SidebarKRS";

const IsiKRS = () => {
    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SidebarKRS />
            </div>
            <form className="flex h-screen w-screen p-6 flex-col gap-10 items-end">
                <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-full md:overflow-x-visible">
                    <table className="table-fixed w-[40rem] md:w-full">
                        <thead className="w-fit md:w-full">
                            <tr className="bg-emerald-300">
                                <th scope="col" class="px-6 py-3">
                                    Ambil
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kode
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                >
                                    Mata Kuliah
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    SKS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kelas
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Pengajar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ruang
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-fit md:w-full text-center text-sm">
                            <tr>
                                <td class="px-6 py-3">
                                    <input type="checkbox" name="ambil" />
                                </td>
                                <td class="px-6 py-3">INF104</td>
                                <td class="px-6 py-3">
                                    Struktur Data dan Algoritma
                                </td>
                                <td class="px-6 py-3">3</td>
                                <td class="px-6 py-3">A</td>
                                <td class="px-6 py-3">
                                    Alim Misbullah, S.Si., M.S.
                                </td>
                                <td class="px-6 py-3">E.03.01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded-xl w-[10rem]">
                    Ajukan
                </button>
            </form>
        </div>
    );
};

export default IsiKRS;
