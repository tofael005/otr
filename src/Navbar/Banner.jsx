import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';



const Banner = () => {
    return (

        <div className='shadow-b-md'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper md:h-full w-full object-cover"
            >
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/sunglass.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;