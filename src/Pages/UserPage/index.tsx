import React, { useEffect, useState } from "react";
import "./style.css";
import { baseURL } from "../../App";
import { toast } from "react-toastify";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ServiceCard } from "../../components/Tools";

//images
import { Image } from "../../assets/images";
import smPageBG from "../../assets/images/smPageBG.svg";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { FetchService } from "../../store/categorySlice";
import { FetchProdcut, ProductDataType } from "../../store/productSlice";
import { GetUser, UpdateDoc, docType, UpdateDocUrl } from "../../store/userSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { AppBtn } from "../../components/Buttons";

export default function UserPage({ setCurrentNav, currentNav }: NavProps) {
  const logUserId = localStorage.getItem("userId");
  const productIndex = localStorage.getItem("productIndex");
  setCurrentNav("");
  const { data } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.user);
  const service = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [selectProduct, setSelectProduct] = useState<ProductDataType>();
  const [selectProductId, setSelectProductId] = useState<string>();
  const [selectProductIndex, setSelectProductIndex] = useState<number>();

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setSelectProductIndex(index)
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

  let productList: any = [];
  if (data.length && user.data[0]?.purchase?.length) {
    const idList = user.data[0]?.purchase.map((item) => item?.productId);
    productList = data?.filter(
      (product) => product._id && idList.includes(product._id)
    );
  }

  const docUpload = async () => {
    if (!user?.data[0]?._id) {
      toast.warn("User id not found!");
      return;
    }

    const purchases = user?.data?.[0]?.purchase;
    const index = await Number(productIndex) ?? 0;

    if (!purchases?.[index]?._id) {
      toast.warn("Product id not found!");
      return;
    }

    // console.log(user?.data[0]?._id);
    // console.log(purchases?.[index]?._id);

    const docData: docType[] = [];

    selectProduct?.documentsRequired?.tableData?.map((val, i) => {
      docData.push({
        docTitle: val.documentType,
        docUrl: [fileUrls[i]],
        status: "Panding",
      });
    });
    // console.log({
    //   data: docData,
    //   userId: user?.data[0]?._id,
    //   productId: purchases?.[index]?._id,
    // });

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
    dispatch(FetchService());
    if (service?.data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);

  useEffect(() => {
    if (!logUserId) return;
    dispatch(GetUser({ _id: logUserId }));
    if (user.data?.length < 0) {
      dispatch(GetUser({ _id: logUserId }));
    }
  }, [logUserId]);

  const purchases = user?.data?.[0]?.purchase;
  const index = Number(productIndex) ?? 0;


  const handleDocUpload = (id: string | undefined) => {
    if (!selectProductIndex || !id || !logUserId) {
      return;
    }

    dispatch(UpdateDocUrl({
      data: {
        userId: logUserId,
        productId: selectProductId || productList[0]?._id,
        docId: id,
        newMessage: "",
        status: "Panding",
        docUrl: fileUrls[selectProductIndex]
      }
    }))
  }



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
                  setSelectProductId(el?._id)
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
              {purchases?.[index]?.requireDoc?.length !== undefined ? (
                <>
                  {purchases?.[index]?.requireDoc?.map((val, i) => (
                    <div key={i} className="docBox">
                      <h4>{val?.docTitle}</h4>

                      <label htmlFor={`doc${i}`}>
                        {fileUrls[i] ? (
                          <iframe
                            src={fileUrls[i]}
                            width="100%"
                            height="600px"
                            title="PDF Viewer"
                            className="DocIframe"
                          />
                        ) : (
                          <img
                            className={
                              val.status === "Approve" ? "docUploadIcon docA" :
                                val.status === "Panding" ? "docUploadIcon docP" :
                                  val.status === "Reject" ? "docUploadIcon docR" : "docUploadIcon"

                            }
                            src={val?.docUrl[0]}
                            alt=""
                          />
                        )}
                      </label>
                      <img style={{ display: selectProductIndex === i ? "block" : "none" }} src={Image.uploadIcon} alt="" className="DocuploadIcon" onClick={() => handleDocUpload(val?._id)} />
                      <input
                        id={`doc${i}`}
                        type="file"
                        onChange={(e) => handleFileChange(e, i)}
                      />

                      <p
                        className={
                          val.status === "Panding"
                            ? "docStatusText pandingDocState"
                            : val.status === "Approve"
                              ? "docStatusText successDocState"
                              : val.status === "Reject"
                                ? "docStatusText rejectDocState"
                                : "docStatusText"
                        }
                      >
                        {val.rejectMessage}
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {selectProduct?.documentsRequired?.tableData?.map((doc:any, i:number) => (
                      <div key={i} className="docBox">
                        <h4>{doc?.documentType}</h4>

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
                    )
                  )}
                </>
              )}
            </div>
            {fileUrls.length >= 3 ? (
              <div className="btnBox">
                <AppBtn btnText="Upload" onClick={docUpload} />
              </div>
            ) : (
              <p className="docSelectText">Select all your Documents !</p>
            )}
          </div>

          <h1 className="usHeader">All Relative Services</h1>
          <div className="serviceMainSection userServiceSection">
            {service?.data?.map((el, i) => (
              <ServiceCard {...el} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
