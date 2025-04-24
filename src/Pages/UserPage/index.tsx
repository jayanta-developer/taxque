import React, { useEffect, useState, ChangeEvent } from "react";
import "./style.css";
import axios from "axios";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { DropBox } from "../../components/Tools";
import FileUpload from "../../components/FileUploader";

//images
import smPageBG from "../../assets/images/smPageBG.svg";
import AvatarIcon from "../../assets/images/AvatarIcon2.png";
import UserBG from "../../assets/images/userBG2.jpg";
import AddIcon from "../../assets/images/AddIcon.png";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { FetchProdcut, ProductDataType } from "../../store/productSlice";
import { FetchUser } from "../../store/userSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function UserPage({ setCurrentNav, currentNav }: NavProps) {
  const logUserId = localStorage.getItem("userId");
  setCurrentNav("");
  const { data, status } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [selectProduct, setSelectProduct] = useState<ProductDataType>();
  const [docType1, setDocType1] = useState<string>();
  const [docType2, setDocType2] = useState<string>();
  const [docType3, setDocType3] = useState<string>();
  const [fileUrl, setFileUrl] = useState<string>();

  const handleUploadedUrl = (url: string) => {
    console.log("Cloudinary URL:", url);
    setFileUrl(url);
    // Example: save to user data
    return (
      <>
        <a href={url} target="_blank" rel="noopener noreferrer" download>
          Download File
        </a>
      </>
    );
  };

  const docType = ["Address proof", "Identity proof	", "Financial proof"];

  let curentUser;
  if (user.data) {
    curentUser = user?.data?.find((val) => val?._id === logUserId);
  }
  let productList: any = [];
  if (data.length && curentUser?.purchase?.length) {
    const idList = curentUser?.purchase.map((item) => item?.productId);
    productList = data?.filter(
      (product) => product._id && idList.includes(product._id)
    );
  }

  useEffect(() => {
    dispatch(FetchProdcut());
    dispatch(FetchUser());
    if (data?.length < 0) {
      dispatch(FetchProdcut());
      dispatch(FetchUser());
    }
  }, []);

  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="userBox">
        <div className="sideMenu">
          <h2>Products</h2>
          <div className="ProductList">
            {productList?.map((el: ProductDataType, i: number) => (
              <div key={i} onClick={() => setSelectProduct(el)}>
                <p>{el?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="userMainSection">
          <div className="userNav">
            <p>My Account</p>/<span>Profile</span>
          </div>
          <div className="userInfoBox">
            <img src={UserBG} className="userBG" alt="" />
            <img src={AvatarIcon} />
            <h3>{curentUser?.name}</h3>
            <p>{curentUser?.email}</p>
          </div>
          <div className="ProductInfoBox">
            {selectProduct ? (
              <div className="productBox">
                <h2 style={{ marginBottom: "20px" }}>{selectProduct.title}</h2>
                {selectProduct?.feturePoints?.map((fp, i) => (
                  <p key={i}>{fp.summary}</p>
                ))}
                <h2 style={{ margin: "20px 0" }}>Document require </h2>
                <div className="docUploadBox">
                  <div className="docSection">
                    <DropBox
                      setDropVal={setDocType1}
                      defaultVal="Select Doc type"
                      list={docType}
                    />

                    {/* <label htmlFor="doc1">
                      <img
                        src={AddIcon}
                        alt="Upload"
                        className="CEImgUploadIcon"
                      />
                    </label>
                    <input id="doc1" type="file" /> */}
                    <FileUpload onFileUpload={handleUploadedUrl} />
                  </div>
                  <div className="docSection">
                    <DropBox
                      setDropVal={setDocType2}
                      defaultVal="Select Doc type"
                      list={docType}
                    />
                    <label htmlFor="doc2">
                      <img
                        src={AddIcon}
                        alt="Upload"
                        className="CEImgUploadIcon"
                      />
                    </label>
                    <input id="doc2" type="file" />
                  </div>
                  <div className="docSection">
                    <DropBox
                      setDropVal={setDocType3}
                      defaultVal="Select Doc type"
                      list={docType}
                    />
                    <label htmlFor="doc3">
                      <img
                        src={AddIcon}
                        alt="Upload"
                        className="CEImgUploadIcon"
                      />
                    </label>
                    <input id="doc3" type="file" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="NoDataBox">
                <h1>Select a service !</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
