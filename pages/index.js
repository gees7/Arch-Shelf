import Head from 'next/head';
import { connect } from 'react-redux';
import Dashboard from '../components/DashboardComponents/Dashboard';
import Navbar from '../components/DashboardComponents/Navbar';
import Footer from '../components/DashboardComponents/Footer';

const Index = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Dashboard />
    <Footer />
  </>
);

export default connect(null)(Index);
