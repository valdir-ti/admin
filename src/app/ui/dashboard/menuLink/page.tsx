'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type MenuLinkProps = {
    item: {
        icon: ReactNode,
        title: string,
        path: string
    }
}

export default function MenuLink({ item }: MenuLinkProps) {

    const {icon, path, title} = item

    const pathName = usePathname()

    return (
        <Link 
            href={path} 
            className={`p-3 flex items-center gap-3 m-1 rounded-md hover:bg-[--bgHover] ${pathName === path && 'bg-[--bgHover]'}`}
        >
            {icon}
            {title}
        </Link>
    )
}
