import Header from "../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Projetos from "../components/projectCard";
import Jorney from "../components/jorneys";
import AboutMe from "../components/aboutme";
import FrontPage from "../components/frontpage";
import '../App.css';
import Backlog from "../components/backlog";
import '../index.css';
// import Skills from "../components/skills";

SwiperCore.use([Pagination]);

function Home() {
  return (
    <>
    <Header />
    <Swiper direction={'vertical'} pagination={{"clickable": true }} className="mySwiper bg-white dark:bg-gray-600">
      <SwiperSlide >
        <FrontPage />
      </SwiperSlide>

      <SwiperSlide>
        <AboutMe />
      </SwiperSlide>
{/* 
      <SwiperSlide>
        <Skills />
      </SwiperSlide> */}

      <SwiperSlide>
        <Jorney />
      </SwiperSlide>

      <SwiperSlide>
        <Projetos />
      </SwiperSlide>
   
      <SwiperSlide>
        <Backlog />
      </SwiperSlide>
    </Swiper>
    </>
  );
} 

export default Home;