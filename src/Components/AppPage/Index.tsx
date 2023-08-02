"use client";
import Image from "next/image";
import React, { useReducer } from "react";
import { initialState, reducerModal } from "../Modal/ReducerModal";
import CardWallet from "@/Components/CardWaallet/Index";
import MenuLeft from "@/Components/Menu/MenuLeft";
import OpenModal from "@/Components/Modal/OpenModal";
import Grafic from "@/Images/grafico.svg";
import ImgBalance from "@/Images/balance.svg";
import ImgNfts from "@/Images/nfsNnews.svg";
import Menu from "@/Images/menu.svg";
import CardMenu from "@/Components/Menu/Index";
import Logo from "@/Images/logo.svg";
import ImgWallet from "@/Images/wallet-crypto.svg";
import ImgUnion from "@/Images/union.svg";
import ImgCrypto from "@/Images/crypto.svg";
import ImgGrafic from "@/Images/chart.svg";

const Index = () => {
    const [state, dispatch] = useReducer(reducerModal, initialState);

    return (
        <>
            <header className="header">
                <nav>
                    <button
                        className="menu"
                        onClick={() => dispatch({ type: "OPEN_MODAL" })}
                    >
                        <Image src={Menu} alt="Icon Menu anburgue" />
                    </button>
                    <Image src={Logo} alt="Icon Logo" />
                    <CardMenu />
                </nav>
            </header>
            <main className="main">
                <section className="links-menu">
                    <ul>
                        <li>
                            <Image
                                src={ImgWallet}
                                width={40}
                                alt="Icon Wallet"
                            />
                            <p>
                                Lorem
                                <span />
                            </p>
                        </li>
                        <li>
                            <Image
                                src={ImgUnion}
                                width={40}
                                alt="Icon Transotion"
                            />
                            <p>
                                Lorem
                                <span />
                            </p>
                        </li>
                        <li>
                            <Image
                                src={ImgCrypto}
                                width={40}
                                alt="Icon Money"
                            />
                            <p>
                                Lorem
                                <span />
                            </p>
                        </li>
                        <li>
                            <Image
                                src={ImgGrafic}
                                width={40}
                                alt="Icon Grafic"
                            />
                            <p>
                                Lorem
                                <span />
                            </p>
                        </li>
                    </ul>
                </section>
                {state.isOpen === true && <MenuLeft dispatch={dispatch} />}
                <section className="wallet">
                    <div className="container">
                        <div className="cards_info">
                            <div className="balance">
                                <div>
                                    <div>
                                        <Image
                                            src={ImgBalance}
                                            alt="Icon Balane in US$"
                                        />
                                    </div>
                                    <span>
                                        <h4>Balance in US$</h4>
                                        <p>(approximately)</p>
                                    </span>
                                </div>
                                <h3>$32,256.56</h3>
                            </div>
                            <div className="box-cards">
                                <div className="grafic">
                                    <div>
                                        <p>Daily Variation</p>
                                        <span>
                                            <Image
                                                width={15}
                                                height={15}
                                                src={ImgGrafic}
                                                alt="Icon Daily variation"
                                            />
                                            <p>ETH</p>
                                        </span>
                                        <p>+5,65%</p>
                                    </div>
                                    <Image src={Grafic} alt="Image grafic" />
                                </div>
                                <div className="nfts">
                                    <div>
                                        <p>NFT’s NEWS</p>
                                        <p>New ElephantX NFT to be lauched!</p>
                                        <button>Read more +</button>
                                    </div>
                                    <Image src={ImgNfts} alt="Imagem NFTs" />
                                </div>
                            </div>
                        </div>
                        <div className="add_wallet">
                            <div className="lis_card">
                                <OpenModal />
                            </div>
                            <CardWallet />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>Copyright © 2022 - All rights reserved</p>
                <Image width={100} src={Logo} alt="Icon Logo" />
            </footer>
        </>
    );
};

export default Index;
