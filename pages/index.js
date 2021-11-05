import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/DashboardComponents/Dashboard';

const Index = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default connect(null)(Index);
