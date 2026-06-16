"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(1);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Fade out
      setOpacity(0);
      const t = setTimeout(() => {
        setDisplayChildren(children);
        prevPathname.current = pathname;
        // Fade back in
        setOpacity(1);
      }, 150);
      return () => clearTimeout(t);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity,
        transform: opacity === 0 ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.18s ease-out, transform 0.18s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {displayChildren}
    </div>
  );
}
