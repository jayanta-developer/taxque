import "./style.css";

//images
import homeBg from "../../assets/images/homeBg.svg";
import MobileImg from "../../assets/images/MobileImg.png";
import subBg from "../../assets/images/subBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";

export default function Services() {
  return (
    <>
      <div className="servicesPage">
        <div className="subPageHeroSection">
          <NavBar />
          <img src={homeBg} className="homeBg" alt="" />
          <p className="navigateText">
            Home <span>{">"} Services</span>
          </p>
          <p className="hrMainText">Expert Online tax consultant Services</p>
        </div>
        <div className="serviceMainSection">
          <div className="servContaintBox"></div>
          <div className="servMLineBox"></div>
          <div className="servContaintBox"></div>
        </div>
        {/* Subscribe section */}
        <div className="subscribeSection">
          <div className="subscribeInSection">
            <img className="subBg" src={subBg} />
            <img className="subMobileImg" src={MobileImg} />
            <p className="subTitle">
              Subscribe to Our Newsletter and Reduce your tax liability up to
              26%
            </p>
            <p className="subSummery">
              We are India's most trusted tax filing platform. Our team goes
              through in-depth training to help you plan and minimize your tax
              liability.
            </p>
            <div className="emailInputBox">
              <input type="text" placeholder="Enter Your Email..." />
              <AppBtn
                btnText="Subscribe"
                icon={rightArrow}
                width="166px"
                height="52px"
              />
            </div>
          </div>
        </div>
        s
        <Footer />
      </div>
    </>
  );
}
