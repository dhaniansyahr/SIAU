import SidebarKRS from "@/Components/User/SidebarKRS";
import { BiSearch } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import React from "react";

const HistoriNilai = () => {
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
                {/* <TableHistoriNilai /> */}
                <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-full md:overflow-x-visible">
                    <table className="table-fixed w-[40rem] md:w-full">
                        <thead className="w-full md:w-full">
                            <tr className="bg-emerald-300 text-center text-sm md:text-xl">
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kode
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mata Kuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    SKS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nilai
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nilai Decimal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Semester
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-fit md:w-full text-center text-sm md:text-xl">
                            <tr>
                                <td className="px-6 py-3">row.No</td>
                                <td className="px-6 py-3">row.Kode</td>
                                <td className="px-6 py-3">row.MataKuliah</td>
                                <td className="px-6 py-3">row.SKS</td>
                                <td className="px-6 py-3">row.Nilai</td>
                                <td className="px-6 py-3">row.NilaiDesimal</td>
                                <td className="px-6 py-3">row.Semester</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HistoriNilai;
