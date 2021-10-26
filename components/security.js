import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeApiAction, cookies } from '../store/actions/authActions';

const Security = ({ children, getMeApiAction: getMeApiActionEffect }) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const token = cookies.get('accessToken', { path: '/' }) || null;
    if (token) {
      getMeApiActionEffect('', () => {
        setIsReady(true);
      });
    } else {
      setIsReady(true);
    }
  }, []);

  if (isReady) return children;
  return <div>Loading...</div>;
};

export default connect(null, { getMeApiAction })(Security);
