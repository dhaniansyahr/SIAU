import React from "react";

const MenuKRS = [
    { id: 1, name: "Dashboard", icon: MdOutlineDashboard },
    {
        id: 2,
        name: "KRS",
        icon: VscFileSubmodule,
        subMenus: [
            { id: 21, name: "Isi KRS" },
            { id: 22, name: "PKRS" },
            { id: 23, name: "KHS" },
            { id: 24, name: "Mata Kuliah" },
        ],
    },
    {
        id: 3,
        name: "Transkrip",
        icon: CgTranscript,
    },
    { id: 5, name: "Histori Nilai", icon: MdOutlineHistory },
    { id: 4, name: "Ijazah", icon: HiOutlineAcademicCap },
];

export default MenuKRS;
