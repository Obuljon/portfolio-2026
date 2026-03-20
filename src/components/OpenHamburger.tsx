"use client";
import { Menu, X } from "lucide-react";

import { RootState } from "@/lib/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenuOpen } from "../lib/redux/features/humburgerSlice";
export default function OpenHamburger() {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector(
    (state: RootState) => state.mobileMenu.isMatch,
  );
  return (
    <button
      className="md:hidden pointer-events-auto p-2 -mr-2 hover:opacity-70 transition-opacity"
      onClick={() => dispatch(setMobileMenuOpen())}
      aria-label="Toggle menu"
    >
      {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
    </button>
  );
}
