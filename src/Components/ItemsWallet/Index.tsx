"use client";
import useFetch from "@/Hook/useFecth";
import Image from "next/image";
import React, { useState } from "react";
import Transition from "@/Images/Сonversion.svg";
import CardsItems from "@/Components/ItemsWallet/CardItemsMobile";
import Modal from "@/Components/Modal/Index";
import BoxTransfer from "@/Components/ItemsWallet/Transfer";
import Type from "@/Types/Items";

const Index = ({ quotes }: any) => {
    const [showAll, setShowAll] = useState(false);
    const [date, setDate]: any = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const visibleItems = showAll ? quotes : quotes.slice(0, 4);

    const handleItems = (name: any) => {
        setIsModalOpen(true);
        setDate(name);
    };
    const handleShowMore = () => {
        setShowAll(true);
    };
    const handleLessMore = () => {
        setShowAll(!true);
    };

    return (
        <>
            <div className="card_top-crypptos-wed">
                <table className="card_top-cryptos">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Crypto</th>
                            <th>Holdings</th>
                            <th>Change</th>
                            <th>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleItems &&
                            visibleItems.map((name: Type) => (
                                <tr key={name.id}>
                                    <td>
                                        <p>{name.market_cap_rank}</p>
                                    </td>
                                    <td>
                                        <Image
                                            src={name.image}
                                            alt={name.name}
                                            width={20}
                                            height={20}
                                        />
                                        <p>{name.name}</p>
                                    </td>
                                    <td>
                                        <p>
                                            US${" "}
                                            {name.current_price.toLocaleString(
                                                "pt-BR"
                                            )}
                                        </p>
                                    </td>
                                    <td>
                                        <p
                                            className={`${
                                                name.price_change_percentage_24h <
                                                0
                                                    ? "red"
                                                    : "gren"
                                            }`}
                                        >
                                            {name.price_change_percentage_24h >
                                            0
                                                ? `${
                                                      "+" +
                                                      name.price_change_percentage_24h
                                                  }`
                                                : name.price_change_percentage_24h}
                                        </p>
                                    </td>
                                    <td>
                                        <button
                                            className="bnt_tranfer-box"
                                            onClick={() => handleItems(name)}
                                        >
                                            <Image
                                                src={Transition}
                                                alt="Icon Transition"
                                            />
                                            <div>
                                                <p>Transfer</p>
                                                <p>Crypto</p>
                                                <span />
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                    {isModalOpen && (
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                        >
                            <BoxTransfer
                                date={date}
                                CloseModal={() => setIsModalOpen(false)}
                            />
                        </Modal>
                    )}
                </table>
            </div>
            <div>
                <div className="card_top-crypptos-mobile">
                    {visibleItems &&
                        visibleItems.map((name: any) => (
                            <CardsItems
                                key={name.id}
                                name={name}
                                openModal={() => handleItems(name)}
                            />
                        ))}
                </div>
                <div className="button_vier">
                    {!showAll && quotes.length > 5 ? (
                        <button onClick={handleShowMore}>View more +</button>
                    ) : (
                        <button onClick={handleLessMore}>View less -</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Index;
