"use client";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/src/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Butybar = ({ blogy }: { blogy: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [backdrop, setBackdrop] = React.useState("opaque");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
  };

  const [scrollMargin, setScrollMargin] = useState(0);
  const handleButtonClick = (e: any, myelement: string) => {
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);
    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  const currentUrl = window.location.href;
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <nav
        className="border border-white w-max px-10 py-0.5 border-solid rounded-full font-medium capitalize items-center flex fixed bottom-6 right-1/2 translate-x-1/2 bg-black z-50 transition-all ease duration-300 gap-4"
        style={{
          bottom: isVisible ? "1.5rem" : "-5rem",
        }}
      >
        <Button
          className="capitalize text-white rounded-full bg-transparent focus:border focus:border-white hover:bg-black"
          onClick={() => handleOpen("tableofcontents")}
          aria-label="Table of Contents"
        >
          <FaBarsStaggered />
        </Button>
        <Dialog>
          <DialogContent>
            <DialogHeader className="flex flex-col gap-1">
              Table of Contents
            </DialogHeader>
            <ul className="mt-4 text-base">
              {blogy.toc.map((heading: any) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <button
                      onClick={(e) => handleButtonClick(e, `${heading.slug}`)}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-zinc-500/10 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 w-full hover:bg-alightdarkbg transition-all duration-400 rounded-lg p-3 flex items-center justify-start !text-left"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-4 h-4 rounded-full mr-1 items-center justify-start">
                          <ChevronRight className="-mr-4" />
                        </span>
                      ) : null}

                      <p className="pl-4">{heading.text}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
            <DialogFooter>
              <Button variant="destructive" color="danger">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
};

export default Butybar;
