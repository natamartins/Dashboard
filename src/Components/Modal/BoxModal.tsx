"use client";
import useFetch from "@/Hook/useFecth";
import Image from "next/image";
import React from "react";
import ImgClose from "@/Images/buttonclose.svg";
import SelectInput from "@/Components/Modal/SelectInput";

const BoxModal = ({ CloseModal }: any) => {
    const { quotes }: any = useFetch();

    return (
        <div className="add-crypto">
            <button onClick={CloseModal} className="button_close">
                <Image
                    src={ImgClose}
                    alt="Icon Button close"
                    width={12}
                    height={12}
                />
            </button>
            <h3>Add Crypto</h3>
            <div>
                <SelectInput itemList={quotes} />
                <input type="number" placeholder="0,00" />
            </div>
            <button>Add Crypto</button>
        </div>
    );
};

export default BoxModal;
