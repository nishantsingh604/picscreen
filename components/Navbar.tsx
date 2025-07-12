'use client'

import React from "react";
import  Image  from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {};

const Navbar = () => {
    const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.webp"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>PicScreen</h1>
        </Link>

        {user && (
            <figure>
                <button onClick={ () =>router.push('/profile/123456')}>
                    <Image
                        src="/assets/images/dummy.jpg"
                        alt="user icon"
                        width={36}
                        height={36}
                        className="rounded-full aspect-square"
                    />
                </button>
                <button className="cursor-pointer">
                    <Image src ="/assets/icons/logout.svg" alt="logout" width={24} height={24} className="rotate-180"/> 

                </button>
            </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
