import Head from 'next/head';
import { connect } from 'react-redux';
import { getMeApiAction } from '../store/actions/authActions';

const Layout = (props) => {
  const { children, title = 'Sign Gallery' } = props;
  const pageSubTitle = '';

  return (
    <div>
      <Head>
        <title>
          {title} {pageSubTitle}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          href={require('../assets/images/logo.png')}
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href={require('../assets/images/logo.png')}
          rel="apple-touch-icon"
        />
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqJ41SABsbpzg7DMktugzqFPcpGt2sphA&libraries=places"
        ></script>
        <script
          type="text/javascript"
          src={require('../assets/js/webflow.js')}
        ></script>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=612896921e6a8cd5880409f9"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
      </Head>
      <div>
        <div id="map"></div>
        {children}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMeApiAction })(Layout);
