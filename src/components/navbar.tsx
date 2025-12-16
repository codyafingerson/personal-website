"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
        { label: "Interpreter Playground", href: "/interpreter-playground" },
    ];

    return (
        <nav className="flex justify-between items-center p-4">
            <Link href="/">
                <Image
                    src="/web-app-manifest-512x512.png"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </Link>
            <ul className="flex gap-4">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={
                                pathname === item.href
                                    ? "text-blue-500"
                                    : "text-gray-500"
                            }
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
