import React from "react";

const bannerDetails = [
  {
    src: "https://res.cloudinary.com/supertramp69420/image/upload/v1651230740/focus/Mask_group_esxkid.svg",
    text: "Whenever you want to stay focused, plant a tree.",
  },
  {
    src: "https://res.cloudinary.com/supertramp69420/image/upload/v1651237385/focus/Mask_group_1_c4ezih.svg",
    text: "Your tree will grow while you focus on your work.",
  },
  {
    src: "https://res.cloudinary.com/supertramp69420/image/upload/v1651237385/focus/Mask_group_2_f3reqo.svg",
    text: "Leaving the app halfway will cause your tree to die.",
  },
];

const BannerContainer = () => {
  return (
    <section style={{ backgroundColor: "#1E5128" }} className="flex-col">
      <div className="spacer-3rem"> </div>

      <h2 className="text-center text-white">
        FocusTree is a app that helps you focus on important things.
      </h2>

      <div className="spacer-3rem"> </div>
      <div className="spacer-3rem"> </div>

      <div className="w-full flex justify-around align-items-center ">
        <div style={{ gap: "2rem" }} className="homePage__banner__container">
          {bannerDetails.map((item) => (
            <div
              key={item}
              className="flex flex-col justify-center align-items-center"
            >
              <img src={item.src} alt="plant-img" className="h-40 w-40" />

              <h5 className="text-center text-white mt-5">{item.text}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer-3rem"> </div>
      <div className="spacer-3rem"> </div>
      <div className="spacer-3rem"> </div>
    </section>
  );
};

export default BannerContainer;
