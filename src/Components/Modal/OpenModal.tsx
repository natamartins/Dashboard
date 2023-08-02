"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/Components/Modal/Index";
import BoxModal from "@/Components/Modal/BoxModal";
import ImgWallet from "@/Images/wallet-crypto.svg";

const OpenModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <span>
                <Image src={ImgWallet} alt="Icon my wallet" />
                <h4>My Wallet</h4>
            </span>
            <button className="button_add" onClick={() => setIsModalOpen(true)}>
                + Add crypto
            </button>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                >
                    <BoxModal CloseModal={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </>
    );
};

export default OpenModal;
