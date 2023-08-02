"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArroBotton from "@/Images/dashboarArrowDown.svg";
import ArrowTop from "@/Images/dashboardArrowTop.svg";
import Users from "@/Images/Img03.jpg";
import ImgLogout from "@/Images/logout.svg";

const Index = () => {
    const [menubar, setMenu] = useState(false);

    return (
        <div>
            <Image width={35} height={35} src={Users} alt="Icon User" />
            {menubar === false ? (
                <button className="btn_menu" onClick={() => setMenu(true)}>
                    <p>Users</p>
                    <Image src={ArroBotton} alt="Icon Arrow Botton" />
                </button>
            ) : (
                <button className="btn_menu" onClick={() => setMenu(false)}>
                    <p>Users</p>
                    <Image src={ArrowTop} alt="Icon Arrow Top" />
                </button>
            )}
            {menubar === true && (
                <span>
                    <button>
                        <Image src={ImgLogout} alt="Icon Logout" />
                        Logout
                    </button>
                </span>
            )}
        </div>
    );
};

export default Index;
