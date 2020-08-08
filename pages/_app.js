// import es_ES from 'antd/es/locale-provider/es_ES';
import { ConfigProvider } from 'antd';

import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

  return (
    <ConfigProvider >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
