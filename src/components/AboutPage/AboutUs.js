import StoreImage from "../Assets/nandawana-store-low-resolution-logo-color-on-transparent-background.png";
import classes from "./About.module.css";
const AboutUs = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={StoreImage} />
        </div>
        <div className={classes.text}>
          <p>
            Welcome to Nandawana Store, your go-to destination for a delightful
            shopping experience. At Nandawana Store, we're passionate about
            providing our customers with top-notch products, exceptional
            service, and a user-friendly platform. Our mission is to curate a
            diverse collection of high-quality products that cater to various
            tastes and preferences. Whether you're looking for everyday
            essentials or something special, we've got you covered. We believe
            in simplifying your shopping journey, ensuring you find what you
            need with ease. We value our customers and are committed to
            delivering an enjoyable and seamless shopping experience. If you
            have any questions, suggestions, or concerns, please don't hesitate
            to reach out to us. Your satisfaction is our priority. Thank you for
            choosing Nandawana Store. We look forward to serving you and making
            your shopping experience exceptional!
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
