import React from "react";
import SidebarKRS from "@/Components/User/SidebarKRS";

const DashboardKRS = () => {
    return (
        <div className="flex h-screen">
            <div>
                <SidebarKRS />
            </div>
            <div className="w-full p-8 flex flex-col md:flex md:flex-row md:gap-4 gap-10">
                <div className="flex flex-col gap-4 md:w-full md:h-full">
                    <div>
                        <div className="w-full p-4 bg-gray-200 rounded-xl h-[20rem]">
                            <h2 className="text-left font-bold text-xl">
                                Informasi
                            </h2>
                            <hr
                                className="h-px md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                                color="black"
                            />
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg shadow-lg p-5 w-full h-full md:overflow-x-visible">
                        <table className="table-fixed w-full overflow-x-scroll">
                            <thead className="w-fit md:w-full text-sm">
                                <tr className="bg-emerald-300">
                                    <th scope="col" class="px-6 py-3">
                                        Kode
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Mata Kuliah
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tanggal
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Kelas
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Ruang
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="w-fit md:w-full text-center">
                                <tr>
                                    <td class="px-6 py-3">INF104</td>
                                    <td class="px-6 py-3">
                                        Struktur Data dan Algoritma
                                    </td>
                                    <td class="px-6 py-3">21 Agusturs 2023</td>
                                    <td class="px-6 py-3">A</td>
                                    <td class="px-6 py-3">E.03.01</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:w-[36rem] h-full">
                    <div className="w-full h-full p-6 bg-gray-200 rounded-xl">
                        <h2 className="text-center text-xl font-bold">
                            Time Line Activity
                        </h2>
                        <hr
                            className="h-px md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                            color="black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardKRS;
