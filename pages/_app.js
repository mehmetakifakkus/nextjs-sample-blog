// import 'tailwindcss/tailwind.css';
import TopicContext, { TopicProvider } from '../context/TopicContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (<>
    <TopicProvider>
      <Component {...pageProps} />
    </TopicProvider>
  </>)
}

export default MyApp;