import type { AppProps } from "next/app";
import RootLayout from "./layout";
import { DefaultSeo } from "next-seo";
import { config } from "../config";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={config.title}
        description={config.description}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
