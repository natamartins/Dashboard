"use client";
import Image from "next/image";
import ArroBackModal from "@/Images/ArrowBackModal.svg";
import ImgWallet from "@/Images/wallet-crypto.svg";
import ImgUnion from "@/Images/union.svg";
import ImgCrypto from "@/Images/crypto.svg";
import ImgGrafic from "@/Images/chart.svg";

const MenuLeft = ({ dispatch }: any) => {
    return (
        <section className="moda_left-menu">
            <ul>
                <li>
                    <Image src={ImgWallet} width={30} alt="Icon Wallet" />
                    <p>
                        Lorem
                        <span />
                    </p>
                </li>
                <li>
                    <Image src={ImgUnion} width={30} alt="Icon Transotion" />
                    <p>
                        Lorem
                        <span />
                    </p>
                </li>
                <li>
                    <Image src={ImgCrypto} width={30} alt="Icon Money" />
                    <p>
                        Lorem
                        <span />
                    </p>
                </li>
                <li>
                    <Image src={ImgGrafic} width={30} alt="Icon Grafic" />
                    <p>
                        Lorem
                        <span />
                    </p>
                </li>
                <li className="arrow_back-modal">
                    <button onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
                        <Image
                            src={ArroBackModal}
                            alt="Icon Arrow for back modal"
                        />
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default MenuLeft;
