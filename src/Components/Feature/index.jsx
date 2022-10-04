import React from "react";
import FeatureItem from "./FeatureItem";
import { TiTickOutline } from "react-icons/ti";
import Iframe from "react-iframe";
import { Button } from "@material-tailwind/react";
import lazyload from "vanilla-lazyload";
import Title_Feature from "../Title_Feature";
export default function Feature() {
  var lazyLoadInstance;
  const ontMount = () => {
    lazyLoadInstance = new lazyload();
  };
  const features = [
    {
      icon: <TiTickOutline />,
      name: " Chất lượng",
      content:
        " Gia sư giỏi, kinh nghiệm từ các trường TOP đầu. Thông tin hồ sơ rõ ràng",
    },
    {
      icon: <TiTickOutline />,
      name: "NHANH CHÓNG",
      content:
        "Chỉ 3 phút để tìm gia sư giỏi phù hợp với đúng yêu cầu của gia đình",
    },
    {
      icon: <TiTickOutline />,
      name: "TIỆN LỢI",
      content:
        "Công nghệ 4.0 giúp bạn tự kết nối với hàng ngàn gia sư ngay trên Smartphone",
    },
    {
      icon: <TiTickOutline />,
      name: "HỌC PHÍ",
      content:
        "Tự chọn gia sư và tự chủ động đưa ra mức học phí phù hợp với yêu cầu",
    },
    {
      icon: <TiTickOutline />,
      name: "ĐA DẠNG",
      content:
        "Người học có thể lựa chọn gia sư là: Giáo viên, Sinh viên, Nguời nước ngoài, …",
    },
    {
      icon: <TiTickOutline />,
      name: "MIỄN PHÍ",
      content:
        "Nguời học không phải trả bất kỳ khoản phí kết nối tìm gia sư cho chúng tôi",
    },
  ];
  return (
    <div className="max-w-[1140px] w-full mx-auto ">
      {/* <div className=" w-full text-center flex items-center">
        {" "}
        <b className="block flex-1 h-[1px] bg-current"></b>
        <h2 className="text-4xl my-6 font-bold text-[#2c70b9] mx-12">
          Tính năng nổi bật
        </h2>
        <b className="block flex-1 h-[1px] bg-current"></b>
      </div> */}
      <Title_Feature title="Tính năng nổi bật" />
      <div className="flex justify-center flex-wrap gap-y-8 lg:justify-between lg:flex-nowrap">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <YouTubeEmbed
            url="https://www.youtube.com/watch?v=HpVOs5imUN0"
            width={325}
            height={220}
          /> */}
        </div>
        <Iframe
          url="https://www.youtube.com/embed/wf0chPFLtiQ"
          width="480px"
          height="300px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        {/* <iframe
          class="lazy player-ratio myClassname m-w-[700px] w-full px-3 lg:max-w-[480px] lg:w-full"
          src="http://www.youtube.com/embed/Yw9Ra2UiVLw"
          data-src="http://www.youtube.com/embed/Yw9Ra2UiVLw"
          frameborder="0"
          title="Vimeo player"
        /> */}

        <div className="flex flex-col justify-center items-center">
          <ul className="max-w-[585px] w-full] grid grid-cols-258 gap-x-7 gap-y-6 justify-center  ">
            {features.map((item, index) => {
              return <FeatureItem key={index} value={item} />;
            })}
          </ul>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:block text-white bg-black mt-5 max-w-[180px] w-full"
          >
            <span>Đăng ký ngay</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
