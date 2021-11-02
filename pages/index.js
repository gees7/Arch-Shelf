import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import Dashboard from '../components/DashboardComponents/Dashboard';
// import { getDashboardFeed, getFeeds } from '../../../store/api/dashboardApi';
import { getDashboardFeed, getFeeds } from '../store/api/dashboardApi';
import Navbar from '../components/DashboardComponents/Navbar';
import Footer from '../components/DashboardComponents/Footer';

const Index = () => {
  const [dashboard, setDashboard] = useState([]);
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    getDashboardFeed().then((res) => {
      setDashboard(res?.data);
    });
    getFeeds({ query: { type: 'resources', limit: '3' } }).then((res) => {
      setResources(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'projects', limit: '3' } }).then((res) => {
      setProjects(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'courses', limit: '3' } }).then((res) => {
      setCourses(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'competitions', limit: '3' } }).then((res) => {
      setCompetitions(res?.data?.feedList);
    });
    getFeeds({ query: { type: 'breakfasts', limit: '3' } }).then((res) => {
      setBreakfast(res?.data?.feedList);
    });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar
        dashboard={dashboard}
        setDashboard={setDashboard}
        resources={resources}
        setResources={setResources}
        projects={projects}
        setProjects={setProjects}
        courses={courses}
        setCourses={setCourses}
        competitions={competitions}
        setCompetitions={setCompetitions}
        breakfast={breakfast}
        setBreakfast={setBreakfast}
      />
      <Dashboard
        dashboard={dashboard}
        setDashboard={setDashboard}
        projects={projects}
        setProjects={setProjects}
        competitions={competitions}
        setCompetitions={setCompetitions}
      />
      <Footer
        dashboard={dashboard}
        setDashboard={setDashboard}
        projects={projects}
        setProjects={setProjects}
        competitions={competitions}
        setCompetitions={setCompetitions}
      />
    </>
  );
};

export default connect(null)(Index);
