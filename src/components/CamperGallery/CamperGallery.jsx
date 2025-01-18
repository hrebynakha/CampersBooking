import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ensureMinItems } from "../../utils/helpers/helpers";
import css from "./CamperGallery.module.css";

const CamperGallery = ({ gallery, name }) => {
  const galleryItems = ensureMinItems(gallery);
  return (
    <Swiper
      spaceBetween={48}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      {galleryItems.map((item, i) => {
        return (
          <li key={i} className={css.item}>
            <SwiperSlide key={i}>
              <img src={item.thumb} alt={name} className={css.img} />
            </SwiperSlide>
          </li>
        );
      })}
    </Swiper>
  );
};

export default CamperGallery;
