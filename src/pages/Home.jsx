import React from 'react';
import Header from "../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Projetos from "../components/projectCard";
// import Jorney from "../components/jorneys";
import AboutMe from "../components/aboutme";
import FrontPage from "../components/frontpage";
import '../App.css';
import Backlog from "../components/backlog";
import '../index.css';
import Skills from "../components/skills";

SwiperCore.use([Pagination]);
// const Skills = React.lazy(() => import("../components/skills"));



function Home() {
  return (
    <>
    <Header />
    <div className="bg-white dark:bg-gray-600 h-full">

      <Swiper
        direction={'vertical'}
        pagination={{"clickable": true }}
        className="mySwiper"
      >
        <SwiperSlide >
          <FrontPage />
        </SwiperSlide>

        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>

        <SwiperSlide>
          <Skills />
        </SwiperSlide>

        {/* <SwiperSlide>
          <Jorney />
        </SwiperSlide> */}

        <SwiperSlide>
          <Projetos />
        </SwiperSlide>
    
        <SwiperSlide>
          <Backlog />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
} 

export default Home;