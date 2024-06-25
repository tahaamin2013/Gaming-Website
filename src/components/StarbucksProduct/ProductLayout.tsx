"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronsDown } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductLayout = ({ subItem, delay }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, delay }}
      className="flex gap-8 flex-col mb-8 md:mb-1 md:flex-row "
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.3, delay }}
        className="flex flex-row mb-6 items-center gap-5"
      >
        <Link
          href={`/articles/${subItem.link}`}
          aria-label={`Starbucks ${subItem.name}`}
        >
          <Image
            src={subItem.image}
            loading="lazy"
            decoding="async"
            alt={`Starbucks menu with prices featuring a ${subItem.name}`}
            width={130}
            height={140}
            className="rounded-full max-w-[140rem] max-h-[130px]"
          />
        </Link>
        <div>
          <Link
            href={`/articles/${subItem.link}`}
            aria-label={`Starbucks ${subItem.name}`}
          >
            {" "}
            <h1 className="text-xl mb-1 w-full md:w-[260px]">{subItem.name}</h1>
          </Link>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductLayout;
