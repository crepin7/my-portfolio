"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SEO() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views for analytics (optional)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
