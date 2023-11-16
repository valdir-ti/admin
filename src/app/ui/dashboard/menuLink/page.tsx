'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function MenuLink({ item }: any) {

    const pathName = usePathname()

    return (
        <Link 
            href={item.path} 
            className={`p-3 flex items-center gap-3 m-1 rounded-md hover:bg-[--bgHover] ${pathName === item.path && 'bg-[--bgHover]'}`}
        >
            {item.icon}
            {item.title}
        </Link>
    )
}
