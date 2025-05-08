import React, { useEffect, useState } from "react";
import "./style.css";
import { baseURL } from "../../App";
import { toast } from "react-toastify";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

//images
import { Image } from "../../assets/images";
import smPageBG from "../../assets/images/smPageBG.svg";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { FetchProdcut, ProductDataType } from "../../store/productSlice";
import { GetUser, UpdateDoc } from "../../store/userSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { AppBtn } from "../../components/Buttons";

export default function UserPage({ setCurrentNav, currentNav }: NavProps) {
  const logUserId = localStorage.getItem("userId");
  const productIndex = localStorage.getItem("productIndex");
  setCurrentNav("");
  const { data, status } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();
  const [selectProduct, setSelectProduct] = useState<ProductDataType>();

  const [fileUrls, setFileUrls] = useState<string[]>([]);
  console.log(fileUrls);

  const docList = ["Address Proof", "Identity Proof", " Financial Proof"];

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

      if (!res.ok) {
        let errorDetail = `Upload failed with status ${res.status}`;
        try {
          const errorData = await res.json();
          errorDetail = errorData?.detail || errorData?.error || errorDetail;
        } catch {
          // Non-JSON response
        }
        toast.error(`Upload failed for some error! ${errorDetail}`);
        throw new Error(errorDetail);
      }

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

  let productList: any = [];
  if (data.length && user.data[0]?.purchase?.length) {
    const idList = user.data[0]?.purchase.map((item) => item?.productId);
    productList = data?.filter(
      (product) => product._id && idList.includes(product._id)
    );
  }

  const docUpload = () => {
    if (!user?.data[0]?._id) {
      toast.warn("User id not found!");
      return;
    }

    const purchases = user?.data?.[0]?.purchase;
    const index = Number(productIndex) ?? 0;

    if (!purchases?.[index]?._id) {
      toast.warn("Product id not found!");
      return;
    }

    console.log(user?.data[0]?._id);
    console.log(purchases?.[index]?._id);

    interface docDataType {
      docTitle: string;
      docUrl: string;
      status: string;
      rejectMessage?: String;
    }
    const docData: docDataType[] = [];

    docType?.map((val, i) => {
      docData.push({
        docTitle: val,
        docUrl: fileUrls[i],
        status: "Panding",
      });
    });
    console.log(docData);

    dispatch(
      UpdateDoc({
        data: docData,
        userId: user?.data[0]?._id,
        productId: purchases?.[index]?._id,
      })
    );
  };

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
              <div
                className={
                  productIndex === i.toString()
                    ? "sideProductItem sideProductItemActive"
                    : "sideProductItem"
                }
                key={i}
                onClick={() => {
                  setSelectProduct(productList[i]);
                  localStorage.setItem("productIndex", i.toString());
                }}
              >
                <img
                  src={
                    productIndex === i.toString()
                      ? Image.ProductActiveIcon
                      : Image.ProductIcon
                  }
                  alt=""
                />
                <p>{el?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="userMainSection">
          <div className="userInfoTopBox">
            <div className="user_Box userInfoBox">
              <div className="userIngBox">
                <img src={Image.AvatarIcon} alt="" />
              </div>
              <div className="user_InfoBox">
                <h2>{user.data[0]?.name}</h2>
                <p>
                  {" "}
                  <img src={Image.MailIcon} alt="" /> {user.data[0]?.email}
                </p>
              </div>
            </div>

            <div className="userTopBtnBox userInfoBox">
              <div className="udBTN">
                <img src={Image.supportIcon} alt="" />
                <p>Support</p>
              </div>
              <div className="udBTN">
                {/* <img src={Image.supportIcon} alt="" /> */}
                <p>Refer Now</p>
              </div>
            </div>
          </div>
          <div className="serviceDetailsBox userInfoBox">
            <h2 style={{ marginBottom: "20px" }}>
              {selectProduct ? selectProduct?.title : productList[0]?.title}
            </h2>

            {(selectProduct?.feturePoints ?? productList[0]?.feturePoints)?.map(
              (fp: { title: string; summary: string }, i: number) => (
                <div key={i} className="usFeatureBox">
                  <h4>
                    <img src={Image.featureIcon} alt="" /> {fp?.title}
                  </h4>
                  <p>{fp?.summary}</p>
                </div>
              )
            )}
          </div>

          <div className="userInfoBox docRequerBox">
            <h2>Documents Required</h2>
            <div className="docUploadBox">
              {docList?.map((doc, i) => (
                <div key={i} className="docBox">
                  <div className="docLable">
                    <p>{doc}</p>
                  </div>

                  <label htmlFor={`doc${i}`}>
                    {fileUrls[i] ? (
                      <iframe
                        src={fileUrls[i]}
                        width="100%"
                        height="600px"
                        title="PDF Viewer"
                      />
                    ) : (
                      <img
                        className="docUploadIcon"
                        src={Image.docUploadIcon}
                        alt=""
                      />
                    )}
                  </label>
                  <input
                    id={`doc${i}`}
                    type="file"
                    onChange={(e) => handleFileChange(e, i)}
                  />

                  <p className="docStatusText successDocState">
                    <img src={Image.docSuccessIcon} alt="" /> Success
                  </p>
                </div>
              ))}

              {/* <div className="docBox">
                <div className="docLable">
                  <p>Identity Proof</p>
                </div>
                <label htmlFor="doc2">
                  {fileUrls[1] ? (
                    <iframe
                      src={fileUrls[1]}
                      width="100%"
                      height="600px"
                      title="PDF Viewer"
                    />
                  ) : (
                    <img
                      className="docUploadIcon"
                      src={Image.docUploadIcon}
                      alt=""
                    />
                  )}
                </label>
                <input
                  id="doc2"
                  type="file"
                  onChange={(e) => handleFileChange(e, 1)}
                />
                <p className="docStatusText pandingDocState">
                  <img src={Image.docPandingIcon} alt="" /> Panding
                </p>
              </div>
              <div className="docBox">
                <div className="docLable">
                  <p> Financial Proof</p>
                </div>
                <label htmlFor="doc3">
                  {fileUrls[2] ? (
                    <iframe
                      src={fileUrls[2]}
                      width="100%"
                      height="600px"
                      title="PDF Viewer"
                    />
                  ) : (
                    <img
                      className="docUploadIcon"
                      src={Image.docUploadIcon}
                      alt=""
                    />
                  )}
                </label>
                <input
                  id="doc3"
                  type="file"
                  onChange={(e) => handleFileChange(e, 2)}
                />
                <p className="docStatusText rejectDocState">
                  <img src={Image.docErrorIcon} alt="" /> Reject
                </p>
              </div> */}
            </div>
            {fileUrls.length >= 3 ? (
              <div className="btnBox">
                <AppBtn btnText="Upload" onClick={docUpload} />
              </div>
            ) : (
              <p className="docSelectText">Select all your Documents !</p>
            )}
          </div>

          {/* <div className="userNav">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
