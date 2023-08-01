import Image from "next/image";
import React from "react";

const CardItemsMobile = ({ name, openModal }: any) => {
    return (
        <div className="box_crypto-mobile">
            <div>
                <Image
                    width={20}
                    height={20}
                    src={name.image}
                    alt={name.name}
                />
                <p>{name.name}</p>
                <p>{name.symbol.toLocaleUpperCase()}</p>
            </div>
            <ul>
                <li>Holdings</li>
                <li>US$ {name.current_price.toLocaleString("pt-BR")}</li>
                <li>434 BTC</li>
            </ul>
            <ul>
                <li>Change</li>
                <li>
                    <p
                        className={`${
                            name.price_change_percentage_24h < 0
                                ? "red"
                                : "gren"
                        }`}
                    >
                        {name.price_change_percentage_24h > 0
                            ? `${"+" + name.price_change_percentage_24h}`
                            : name.price_change_percentage_24h}
                    </p>
                </li>
            </ul>
            <button onClick={openModal}>Trade</button>
        </div>
    );
};

export default CardItemsMobile;
