import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const category = [
  {
    src: "public/assets/images/category/wedding3.jpg",
    caption: "عروسی",
  },
  {
    src: "public/assets/images/category/formalite.jpg",
    caption: "فرمالیته",
  },
  {
    src: "public/assets/images/category/family4.jpg",
    caption: "خانوادگی",
  },
  {
    src: "public/assets/images/category/bardari.jpg",
    caption: "بارداری",
  },
  {
    src: "public/assets/images/category/kids4.jpg",
    caption: "کودک",
  },
  {
    src: "public/assets/images/category/happy.jpg",
    caption: "تولد",
  },
  {
    src: "public/assets/images/category/personal.jpg",
    caption: "پرسنلی",
  },
  {
    src: "public/assets/images/category/faregh2.jpg",
    caption: "فارغ التحصیلی",
  },
  {
    src: "public/assets/images/category/mazhabi.jpg",
    caption: "مذهبی",
  },
];
function Swiperr() {
  return (
    <div className="m-5">
      <h3 className="m-4">دسته بندی</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation ]}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {category.map((c) => (
          <SwiperSlide style={{ width: "220px" }}>
            <div className="category">
              <a href="">
                <img
                  src={c.src}
                  alt={c.caption}
                  className="shadow-category"
                  style={{ width: "150px", height: "150px" }}
                />
                <p className="m-4">{c.caption}</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swiperr;
