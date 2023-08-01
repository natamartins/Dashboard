"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImgClose from "@/Images/buttonclose.svg";
import ArrowDown from "@/Images/arrowDown.svg";
import ArrowTop from "@/Images/arrowTop.svg";

interface Type {
    date: {
        name: string;
        symbol: string;
        image: string;
    };
    CloseModal: () => void;
}

const Transfer = ({ CloseModal, date }: Type) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isAddCrypto, setIsAddCrypto] = useState(false);

    const select = [
        { name: "Transfer in", id: "01" },
        { name: "Transfer out", id: "02" },
    ];

    const handleItemClick = (item: any) => {
        setSelectedItem(item.name);
    };

    return (
        <div className="transfer-crypto">
            <button onClick={CloseModal} className="btn_close">
                <Image
                    src={ImgClose}
                    alt="Icon Button close"
                    width={12}
                    height={12}
                />
            </button>
            <h3>Transfer Crypto</h3>
            <div className="items_selects">
                <p>You are transfering</p>
                <span>
                    <Image
                        width={20}
                        height={20}
                        src={date.image}
                        alt={date.name}
                    />
                    <ul>
                        <li>{date.name}</li>
                        <li>{date.symbol.toLocaleUpperCase()}</li>
                    </ul>
                </span>
            </div>
            <div>
                <div className="crypto-select">
                    <div>
                        <label htmlFor="transfer">Transfer</label>
                        <input
                            id="transfer"
                            name="transfer"
                            type="text"
                            placeholder="Choose"
                            value={selectedItem || ""}
                            readOnly
                            onClick={() => setIsAddCrypto(true)}
                        />
                        <span className="button_transfer">
                            {!isAddCrypto ? (
                                <button>
                                    <Image
                                        src={ArrowDown}
                                        alt="Icon Arrow Down"
                                    />
                                </button>
                            ) : (
                                <button onClick={() => setIsAddCrypto(!true)}>
                                    <Image
                                        src={ArrowTop}
                                        alt="Icon Arrow Top"
                                    />
                                </button>
                            )}
                        </span>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            placeholder="0,00"
                        />
                        {isAddCrypto && (
                            <div className="container_select">
                                {select.map((item) => (
                                    <div key={item.id} className="select-items">
                                        <p
                                            onClick={() =>
                                                handleItemClick(item)
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button className="btn_transfer">Transfer Crypto</button>
        </div>
    );
};

export default Transfer;
