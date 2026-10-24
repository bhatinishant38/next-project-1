"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)} >
        <Menu setActive= {setActive} >
            <Link href={'#'}>
              <MenuItem setActive={setActive} active= {active} item= 'Home'>
                  test
              </MenuItem>       
            </Link>
        </Menu>   
    </div>
  )
}

export default Navbar