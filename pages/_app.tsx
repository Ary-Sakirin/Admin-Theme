import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { Navigation } from '../src/components/Navigation';
import { Layout } from '../src/components/Layout';
import { Theme, ThemeProps } from '../src/context/theme';
import { useEffect, useState } from 'react';
import HomeMenu from '../src/screens/home/HomeMenu';
export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<ThemeProps>({
    darkmode: process.browser ? localStorage.getItem('mode') === "true" : false
  });

  const body = process.browser ? document.getElementsByTagName('body')[0] : { className: "lightmode" }

  if (theme.darkmode) {
    body.className = "darkmode"
  } else {
    body.className = "light"
  }


  return (
    <>
      <Theme.Provider value={{ theme, setTheme }} >
        <Layout>
          <Navigation displayIcon={!theme.darkmode} />
          <HomeMenu />
          <Component {...pageProps} />
        </Layout>
      </Theme.Provider>
    </>
  );
}

