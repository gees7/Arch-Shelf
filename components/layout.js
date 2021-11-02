import Head from 'next/head';
import { connect } from 'react-redux';
import { getMeApiAction } from '../store/actions/authActions';
import Navbar from './DashboardComponents/Navbar';
import Footer from './DashboardComponents/Footer';

const Layout = (props) => {
  const { children, title = 'Arch Shelf' } = props;
  const pageSubTitle = '';

  return (
    <div>
      <Head>
        <title>
          {title} {pageSubTitle}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" />
        <link rel="apple-touch-icon" />
        <div>
          <link
            href={require('../assets/images/favicon.ico')}
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link
            href={require('../assets/images/webclip.png')}
            rel="apple-touch-icon"
          />
        </div>

        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqJ41SABsbpzg7DMktugzqFPcpGt2sphA&libraries=places"
        ></script>
        {/* <script
          type="text/javascript"
          src={require('../assets/js/webflow.js')}
        ></script> */}
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=612896921e6a8cd5880409f9"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <div id="map">
          <Navbar />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMeApiAction })(Layout);
