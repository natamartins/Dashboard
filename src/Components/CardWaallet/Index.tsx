"use client";
import Image from "next/image";
import React from "react";
import ItemsWallet from "@/Components/ItemsWallet/Index";
import AddWallet from "@/Images/addCrypto.svg";
import useFetch from "@/Hook/useFecth";

const Index = () => {
    const { quotes }: any = useFetch();
    return (
        <>
            {quotes.lenght < 0 ? (
                <div className="box_add-wallet">
                    <div>
                        <Image src={AddWallet} alt="Icon add wallet" />
                        <h5>Nothing here yet...</h5>
                        <p>Add a crypto and start earning</p>
                    </div>
                </div>
            ) : (
                <div className="list_crypto">
                    <ItemsWallet quotes={quotes} />
                </div>
            )}
        </>
    );
};

export default Index;
