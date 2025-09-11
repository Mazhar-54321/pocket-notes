import "./Default.css";

const Default = ({ heading, title1, title2, imgSrc, imgSrc2 }) => {
  return (
    <div>
      <img src={imgSrc} />
      <h1>{heading}</h1>
      <p>{title1}</p>
      <p>{title2}</p>
      <footer>
        <img src={imgSrc2} />
        end-to-end-encrypted
      </footer>
    </div>
  );
};

export default Default;
