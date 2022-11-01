const Section = ({ category, images }) => {
  // const { category, images } = props;
  return (
    <>
      <h1>{category}</h1>
      <div className="carousel">
        {images.map((elem) => {
          return (
            <div className="movies">
              <img src={elem} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section;
