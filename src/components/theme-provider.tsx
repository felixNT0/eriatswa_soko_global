"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from 'nextjs-toploader';
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
        <NextTopLoader color="#D4AF37" showSpinner={false} />
        {children}
    </NextThemesProvider>
  );
}
