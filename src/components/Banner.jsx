function Banner({ picture, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={picture} alt="" />
      <p className="banner__text">{text}</p>
    </div>
  );
}

export default Banner;
