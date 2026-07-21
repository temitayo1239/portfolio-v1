import type { AppProps } from 'next/app';
import '../app/globals.css';
import CustomCursor from '../components/ui/CustomCursor';
import AnimatedBlobBackground from '../components/ui/AnimatedBlobBackground';
import CommandMenu from '../components/ui/CommandMenu';
import ScrollProgress from '../components/ui/ScrollProgress';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBlobBackground />
      <CommandMenu />
      <Component {...pageProps} />
    </>
  );
}