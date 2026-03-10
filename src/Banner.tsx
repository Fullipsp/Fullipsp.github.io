import style from "./Banner.module.css";

export const Banner = () => {
  return (
    <div class={style.container}>
      <img fetchpriority="high" src="/banner.webp" alt="banner" />
    </div>
  );
};
