"use client";
import Image from "next/image";
import React from "react";

import ArrowRight from "@/Images/arrowRight.svg";

interface Type {
    item: {
        id: string;
        image: string;
        name: string;
        symbol: string;
    };
    handleItemClick: any;
}

const Items = ({ item, handleItemClick }: Type) => {
    return (
        <div
            key={item.id}
            className="items_modal"
            onClick={() => handleItemClick(item)}
        >
            <div>
                <div>
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={25}
                        height={25}
                    />
                    <p>{item.name}</p>
                    <p>{item.symbol.toLocaleUpperCase()}</p>
                </div>
                <Image src={ArrowRight} alt="Icon Arrow right" />
            </div>
        </div>
    );
};

export default Items;
