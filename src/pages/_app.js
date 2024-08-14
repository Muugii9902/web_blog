import Layout from "@/components/layout";
import "@/styles/globals.css";
import SreachProvider from "@/provider/sreach-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <SreachProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SreachProvider>
  );
}
