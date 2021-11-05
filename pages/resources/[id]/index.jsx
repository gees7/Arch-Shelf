import React from 'react';
import BlogDetails from '../../../components/blogDetails';
import { useRouter } from 'next/router';
const Resources = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <BlogDetails id={id} type="resources" />
    </div>
  );
};

export default Resources;
