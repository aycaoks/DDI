import "tailwindcss/tailwind.css";
import { DataProvider } from "../contexts/DataContext";

interface MyAppProps {
  Component: any,
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;