"use client";
import Image from "next/image";
import React, { useState } from "react";
import useFetch from "@/Hook/useFecth";
import ItemsWallet from "@/Components/ItemsWallet/Index";
import ImgWallet from "@/Images/wallet-crypto.svg";
import ImgUnion from "@/Images/union.svg";
import ImgCrypto from "@/Images/crypto.svg";
import ImgGrafic from "@/Images/chart.svg";
import AddWallet from "@/Images/addCrypto.svg";
import Grafic from "@/Images/grafico.svg";
import Logo from "@/Images/logo.svg";
import ArroBotton from "@/Images/dashboarArrowDown.svg";
import ArrowTop from "@/Images/dashboardArrowTop.svg";
import Users from "@/Images/Img03.jpg";
import ImgLogout from "@/Images/logout.svg";
import ImgBalance from "@/Images/balance.svg";
import ImgNfts from "@/Images/nfsNnews.svg";
import Menu from "@/Images/menu.svg";
import Modal from "@/Components/Modal/Index";
import BoxModal from "@/Components/Modal/BoxModal";
import ArroBackModal from "@/Images/ArrowBackModal.svg";

const page = () => {
    const { quotes }: any = useFetch();
    const [menubar, setMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuLeft, setIsMenuLeft] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header className="header">
                <nav>
                    <button
                        className="menu"
                        onClick={() => setIsMenuLeft(true)}
                    >
                        <Image src={Menu} alt="Icon Menu anburgue" />
                    </button>
                    <Image src={Logo} alt="Icon Logo" />
                    <div>
                        <Image
                            width={35}
                            height={35}
                            src={Users}
                            alt="Icon User"
                        />
                        {menubar === false ? (
                            <button
                                className="btn_menu"
                                onClick={() => setMenu(true)}
                            >
                                <p>Users</p>
                                <Image
                                    src={ArroBotton}
                                    alt="Icon Arrow Botton"
                                />
                            </button>
                        ) : (
                            <button
                                className="btn_menu"
                                onClick={() => setMenu(false)}
                            >
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

                {isMenuLeft === true && (
                    <section className="moda_left-menu">
                        <ul>
                            <li>
                                <Image
                                    src={ImgWallet}
                                    width={30}
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
                                    width={30}
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
                                    width={30}
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
                                    width={30}
                                    alt="Icon Grafic"
                                />
                                <p>
                                    Lorem
                                    <span />
                                </p>
                            </li>
                            <li className="arrow_back-modal">
                                <button onClick={() => setIsMenuLeft(false)}>
                                    <Image
                                        src={ArroBackModal}
                                        alt="Icon Arrow for back modal"
                                    />
                                </button>
                            </li>
                        </ul>
                    </section>
                )}

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
                                <span>
                                    <Image
                                        src={ImgWallet}
                                        alt="Icon my wallet"
                                    />
                                    <h4>My Wallet</h4>
                                </span>
                                <button
                                    className="button_add"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    + Add crypto
                                </button>
                                {isModalOpen && (
                                    <Modal
                                        isOpen={isModalOpen}
                                        onRequestClose={() =>
                                            setIsModalOpen(false)
                                        }
                                    >
                                        <BoxModal
                                            CloseModal={() =>
                                                setIsModalOpen(false)
                                            }
                                        />
                                    </Modal>
                                )}
                            </div>
                            {quotes.lenght < 0 ? (
                                <div className="box_add-wallet">
                                    <div>
                                        <Image
                                            src={AddWallet}
                                            alt="Icon add wallet"
                                        />
                                        <h5>Nothing here yet...</h5>
                                        <p>Add a crypto and start earning</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="list_crypto">
                                    <ItemsWallet quotes={quotes} />
                                </div>
                            )}
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

export default page;
