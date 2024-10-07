import { AppProps } from "next/app";
// import Image from "next/image";
import { wrapper } from "./store";

export function App({ Component, pageProps }: AppProps): React.JSX.Element {
  return (
    <Component {...pageProps} />
  );
}

export default  wrapper.withRedux(App);
