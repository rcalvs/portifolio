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

SwiperCore.use([Pagination]);


function Home(){
  return (
    <>
    <Header />
    <Swiper direction={'vertical'} pagination={{"clickable": true }} className="mySwiper">
      <SwiperSlide>
        <FrontPage />
      </SwiperSlide>

      <SwiperSlide>
        <AboutMe />
      </SwiperSlide>

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