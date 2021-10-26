import App from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import '../assets/css/global.less';
// import '../assets/css/frontnew.less';
// import 'antd/dist/antd.less';

import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Security from '../components/security';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Security>
          <Component {...pageProps} />
        </Security>
      </Provider>
    );
  }
}
if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    for (let i = 0; i < els.length; i += 1) {
      if (els[i].rel === 'stylesheet') {
        els[i].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
        break;
      }
    }
  });
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
