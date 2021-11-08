import React from 'react';
import BlogDetails from '../../../components/blogDetails';
import { useRouter } from 'next/router';
const Courses = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <BlogDetails id={id} type="courses" />
    </div>
  );
};

export default Courses;
