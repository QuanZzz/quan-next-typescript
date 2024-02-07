import "../app/globals.css";
import type { AppProps } from "next/app";
import { UpvoteContextProvider } from "@/context/UpvoteContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UpvoteContextProvider>
      <Component {...pageProps} />
    </UpvoteContextProvider>
  );
}
