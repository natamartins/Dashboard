"use client";
import Image from "next/image";
import React, { useState } from "react";

import ArrowDown from "@/Images/arrowDown.svg";
import ArrowTop from "@/Images/arrowTop.svg";
import Items from "@/Components/Modal/Items";

interface Item {
    name: string;
}

const SelectInput = ({ itemList }: any) => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [isAddCrypto, setIsAddCrypto] = useState(false);

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    return (
        <div className="select_input">
            <input
                type="text"
                placeholder="Choose"
                value={selectedItem?.name || ""}
                readOnly
                onClick={() => setIsAddCrypto(true)}
            />
            <span>
                {!isAddCrypto ? (
                    <button>
                        <Image src={ArrowDown} alt="Icon Arrow Down" />
                    </button>
                ) : (
                    <button onClick={() => setIsAddCrypto(!true)}>
                        <Image src={ArrowTop} alt="Icon Arrow Top" />
                    </button>
                )}
            </span>

            {isAddCrypto && (
                <div className="list-crypto">
                    {itemList &&
                        itemList
                            .map((item: any) => (
                                <Items
                                    key={item.id}
                                    handleItemClick={handleItemClick}
                                    item={item}
                                />
                            ))
                            .slice(0, 5)}
                </div>
            )}
        </div>
    );
};

export default SelectInput;
