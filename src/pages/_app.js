import Layout from "@/components/layout";
import "@/styles/globals.css";
import SreachProvider from "@/provider/sreach-provider";
export default function App({ Component, pageProps }) {
  return (
    <SreachProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SreachProvider>
  );
}
