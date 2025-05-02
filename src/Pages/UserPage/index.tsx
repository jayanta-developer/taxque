import React, { useEffect, useState } from "react";
import "./style.css";
import { upload } from "@vercel/blob/client";
import { baseURL } from "../../App";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { DropBox } from "../../components/Tools";
// import { uploadFileToFirebase } from "../../Util/services/fileUploader";

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
import { GetUser } from "../../store/userSlice";
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

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const filename = encodeURIComponent(file.name);

      const res = await fetch(`${baseURL}/blob?filename=${filename}`, {
        method: "POST",
        body: await file.arrayBuffer(),
        headers: {
          "Content-Type": file.type || "application/octet-stream",
        },
      });
      const { url } = await res.json();

      // const { url } = await upload(file?.name, file, {
      //   access: "public",
      //   handleUploadUrl: `${baseURL}/blob`,
      // });

      setFileUrls((prev) => {
        const updated = [...prev];
        updated[index] = url;
        return updated;
      });
    } catch (err) {
      console.error(`Upload failed for file ${index + 1}:`, err);
    }
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
    if (data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);

  useEffect(() => {
    if (!logUserId) return;
    dispatch(GetUser({ _id: logUserId }));
    if (user.data?.length < 0) {
      dispatch(GetUser({ _id: logUserId }));
    }
  }, [logUserId]);

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

                    <label htmlFor="doc1">
                      <img
                        src={AddIcon}
                        alt="Upload"
                        className="CEImgUploadIcon"
                      />
                    </label>
                    <input
                      id="doc1"
                      type="file"
                      onChange={(e) => handleFileChange(e, 0)}
                    />
                    {fileUrls[0] && (
                      <a href={fileUrls[0]} target="_blank">
                        File 1 Link
                      </a>
                    )}
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
                    <input
                      id="doc2"
                      type="file"
                      onChange={(e) => handleFileChange(e, 1)}
                    />
                    {fileUrls[1] && (
                      <a href={fileUrls[1]} target="_blank">
                        File 2 Link
                      </a>
                    )}
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
                    <input
                      id="doc3"
                      type="file"
                      onChange={(e) => handleFileChange(e, 2)}
                    />
                    {fileUrls[2] && (
                      <a href={fileUrls[2]} target="_blank">
                        File 3 Link
                      </a>
                    )}
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
