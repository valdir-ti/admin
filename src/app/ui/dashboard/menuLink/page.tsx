'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type MenuLinkProps = {
    path: string
    icon: ReactNode
    title: string
}

export default function MenuLink({ icon, path = '/', title = '' }: MenuLinkProps) {

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
