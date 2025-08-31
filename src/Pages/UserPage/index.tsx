import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { baseURL } from "../../App";
import { toast } from "react-toastify";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import { ServiceCard } from "../../components/Tools";
import { AppBtn } from "../../components/Buttons";

//images
import { Image } from "../../assets/images";
import smPageBG from "../../assets/images/smPageBG.svg";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

//Redux
import { FetchCategory } from "../../store/categorySlice";
import { FetchService, ServiceDataType } from "../../store/serviceSlice";
import {
  GetUser,
  UpdateDoc,
  docType,
  UpdateDocUrl,
} from "../../store/userSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function UserPage({ setCurrentNav, currentNav }: NavProps) {
  const ActivePage = localStorage.getItem("ActivePage");
  const logUserId = localStorage.getItem("userId");
  const productIndex = localStorage.getItem("productIndex");
  setCurrentNav("");
  const { data } = useSelector((state: RootState) => state.service);
  const user = useSelector((state: RootState) => state.user);
  const Category = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [selectProductIndex, setSelectProductIndex] = useState<number>();
  console.log(selectProductIndex);
  const [selectProductId, setSelectProductId] = useState<string>("");
  console.log(selectProductId);

  const [selectProduct, setSelectProduct] = useState<ServiceDataType[]>([]);

  const [_, setActivePage] = useState<string>("Product");
  const [activeMenu, setActiveMenu] = useState<string>();
  const subMenuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [docSectionIndex, setDocSectionIndex] = useState<number[]>([]);
  const [requireDoc, setRequireDoc] = useState([
    {
      docCategory: "",
      docUrlArray: [
        {
          docTitle: "",
          docUrl: "",
          status: "pending",
          rejectMessage: "",
        },
      ],
    },
  ]);

  console.log(requireDoc);

  useEffect(() => {
    const tableData = selectProduct[0]?.documentsRequired?.tableData;
    if (!tableData) return;

    const structuredDocs: any = [];

    // Loop headers + rows
    tableData.headers.forEach((header) => {
      const docUrlArray: any[] = [];

      tableData.rows.forEach((row) => {
        const docTitle = row[header];
        if (docTitle && docTitle.trim().length > 0) {
          docUrlArray.push({
            docTitle: docTitle,
            docUrl: "", // initially empty, will be updated when uploaded
            status: "Pending",
            rejectMessage: "",
          });
        }
      });

      if (docUrlArray.length > 0) {
        structuredDocs.push({
          docCategory: header,
          docUrlArray: docUrlArray,
        });
      }
    });

    setRequireDoc(structuredDocs);
  }, [selectProduct]);

  //handle function
  const handleActiveDocSeciton = (section: number) => {
    if (docSectionIndex.includes(section)) {
      const arr = docSectionIndex.filter((ind) => ind !== section);
      setDocSectionIndex(arr);
    } else {
      setDocSectionIndex((prv) => [...prv, section]);
    }
  };

  // Side menu function
  if (!ActivePage) {
    localStorage.setItem("ActivePage", "Category");
    setActivePage("Category");
  }

  const handleMenuClick = (title: string) => {
    const newActive = activeMenu === title ? "" : title;
    setActiveMenu(newActive);
    localStorage.setItem("activeMenu", newActive);
  };

  const HandleActivePage = (page: string) => {
    localStorage.setItem("ActivePage", page);
    setActivePage(page);
  };

  useEffect(() => {
    const index = sideMenuList.findIndex((item) => item.title === activeMenu);

    subMenuRefs.current.forEach((submenu) => {
      if (submenu) {
        submenu.style.transition = "height 0.3s ease";
        submenu.style.height = "0px";
        submenu.style.padding = "0px";
      }
    });

    if (index !== -1 && activeMenu) {
      const el = subMenuRefs.current[index];

      if (el) {
        el.style.height = "auto";
        const fullHeight = el.scrollHeight;
        el.style.height = "0px";

        requestAnimationFrame(() => {
          el.style.transition = "height 0.3s ease";
          el.style.height = fullHeight + 20 + "px";
          el.style.padding = "10px";
        });
      }
    }
  }, [activeMenu]);

  useEffect(() => {
    const savedMenu = localStorage.getItem("activeMenu");
    if (savedMenu) {
      setActiveMenu(savedMenu);
    }
  }, []);

  //side menu list
  interface sideMenuType {
    title: string;
    subTitle?: {
      title: string;
    }[];
  }
  const sideMenuList: sideMenuType[] = [
    {
      title: "My order",
      subTitle: [
        {
          title: "Order",
        },
        {
          title: "Plan upgrade",
        },
        {
          title: "Payment method",
        },
        {
          title: "cancel order",
        },
      ],
    },

    {
      title: "Category",
      subTitle: [
        {
          title: "All Category",
        },
      ],
    },
    {
      title: "refar",
      subTitle: [
        {
          title: "Refer And Earn",
        },
      ],
    },
    {
      title: "Suport",
      subTitle: [
        {
          title: "Get Customer Support",
        },
      ],
    },
  ];

  //Multipal file upload
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    catIndex: number,
    docIndex: number
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
        } catch {}
        toast.error(`Upload failed for some error! ${errorDetail}`);
        throw new Error(errorDetail);
      }

      // ✅ Update the exact doc inside docUrlArray
      setRequireDoc((prev) =>
        prev.map((doc, i) =>
          i === catIndex
            ? {
                ...doc,
                docUrlArray: doc.docUrlArray.map((d, j) =>
                  j === docIndex ? { ...d, docUrl: url } : d
                ),
                status: "Success",
              }
            : doc
        )
      );
    } catch (err) {
      console.error(
        `Upload failed for category ${catIndex + 1}, doc ${docIndex + 1}:`,
        err
      );
    }
  };

  let productList: ServiceDataType[] = [];
  if (data.length && user.data[0]?.purchase?.length) {
    const idList = user.data[0]?.purchase.map((item) => item?.productId);
    productList = data?.filter(
      (product) => product._id && idList.includes(product._id)
    );
  }
  useEffect(() => {
    if (!productList[0]?._id || selectProductId.length) return;
    setSelectProductId(productList[0]?._id);
  }, [productList]);

  const docUpload = async () => {
    if (!user?.data[0]?._id) {
      toast.warn("User id not found!");
      return;
    }

    const purchases = user?.data?.[0]?.purchase;
    const index = (await Number(productIndex)) ?? 0;

    if (!purchases?.[index]?._id) {
      toast.warn("Product id not found!");
      return;
    }

    const docData: docType[] = [];

    // selectProduct[0]?.documentsRequired?.tableData?.map((val: any, i: number) => {
    //   docData.push({
    //     docTitle: val.documentType,
    //     docUrl: [fileUrls[i]],
    //     status: "Panding",
    //   });
    // });
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
    const res = data?.filter((val) => val?._id === selectProductId);
    setSelectProduct(res);
  }, [selectProductId]);

  useEffect(() => {
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);

  useEffect(() => {
    dispatch(FetchCategory());
    if (Category?.data?.length < 0) {
      dispatch(FetchCategory());
    }
  }, []);

  useEffect(() => {
    if (!logUserId) return;
    dispatch(GetUser({ _id: logUserId }));
    if (user.data?.length < 0) {
      dispatch(GetUser({ _id: logUserId }));
    }
  }, [logUserId]);

  // const purchases = user?.data?.[0]?.purchase;
  // const index = Number(productIndex) ?? 0;

  const handleDocUpload = () => {
    if (!logUserId || !selectProductId) {
      return;
    }

    dispatch(
      UpdateDocUrl({
        userId: logUserId,
        productId: selectProductId,
        requireDoc: requireDoc,
      })
    );
  };

  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="userBox">
        {/* --------Side Menu-------------------- */}
        <div className="sideMenu">
          <div className="sideMenuItem_Box">
            {sideMenuList?.map((sm, i) => (
              <div key={i} className="sideMenuItemMainBox">
                <div
                  className={
                    activeMenu === sm.title
                      ? "sideMenuItem ActiveSideMenuItem"
                      : "sideMenuItem"
                  }
                  onClick={() => handleMenuClick(sm.title)}
                >
                  <p>{sm.title}</p>
                  <img
                    style={{
                      rotate: activeMenu === sm.title ? "180deg" : "0deg",
                    }}
                    src={
                      activeMenu === sm.title
                        ? Image.MenuArrow_A
                        : Image.MenuArrow
                    }
                    alt=""
                  />
                </div>

                <div
                  style={{ height: "0px" }}
                  ref={(el) => {
                    subMenuRefs.current[i] = el;
                  }}
                  className="subMenuItemBox"
                >
                  {sm?.subTitle?.map((sb, j: number) => (
                    <div
                      className={
                        ActivePage === sb.title
                          ? "subMenuItemActive subMenuItem"
                          : "subMenuItem"
                      }
                      key={j}
                      onClick={() => HandleActivePage(sb.title)}
                    >
                      <p>{sb?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}{" "}
          </div>
        </div>

        <div className="userMainSection">
          {/* ----User Info Top Box---- */}
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

          {/* Order section ----------------------------------------------*/}
          {/* Service Listing ---------------*/}
          <div
            style={{ display: ActivePage === "Order" ? "flex" : "none" }}
            className="UDContaintSection"
          >
            <div className="userDMainSectin">
              <h2>Your Service List</h2>
              <div className="serviceList">
                {productList?.map((val, i) => (
                  <div
                    onClick={() => setSelectProductId(val?._id || "")}
                    key={i}
                    className={
                      selectProductId === val?._id
                        ? "udServiceCard udServiceCardActive"
                        : "udServiceCard"
                    }
                  >
                    <h4>{val?.title}</h4>
                    <p>
                      {" "}
                      <b>Category :</b> {val?.category?.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Features--------------------- */}
            <div className="serviceDetailsBox userInfoBox">
              <h2 style={{ marginBottom: "20px" }}>Product Features</h2>
              {selectProduct[0]?.feturePoints?.map(
                (fp: { title: string; summary: string }, i: number) => (
                  <div key={i} className="usFeatureBox">
                    <h4>
                      <img src={Image.featureIcon} alt="" /> {fp?.summary}
                    </h4>
                  </div>
                )
              )}
            </div>

            {/* Document require section -------------------- */}
            <div className="docRequerBox">
              <h2>Documents Required</h2>
              {requireDoc.map((doc, i) => (
                <div
                  key={i}
                  className={
                    docSectionIndex.includes(i)
                      ? "docUploadBox docUploadActiveBox"
                      : "docUploadBox"
                  }
                >
                  <p className="tableDocTitle">
                    {i + 1}. {doc.docCategory}
                  </p>
                  <img
                    onClick={() => handleActiveDocSeciton(i)}
                    className="docSectionArrow"
                    src={Image.MenuArrow}
                  />

                  {doc.docUrlArray.map((docItem, j) => (
                    <div
                      style={{
                        display: docSectionIndex.includes(i) ? "flex" : "none",
                      }}
                      key={j}
                      className="docBox"
                    >
                      <p className="docTitle">{docItem.docTitle}</p>

                      <label htmlFor={`doc${i}-${j}`}>
                        {docItem.docUrl ? (
                          <iframe
                            src={docItem.docUrl}
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
                        id={`doc${i}-${j}`}
                        type="file"
                        onChange={(e) => handleFileChange(e, i, j)} // 👈 pass i + j
                      />

                      <p
                        className={`docStatusText ${
                          doc.docUrlArray[j].status === "Success"
                            ? "successDocState"
                            : "pendingDocState"
                        }`}
                      >
                        {doc.docUrlArray[j].status === "Success" ? (
                          <>
                            <img src={Image.docSuccessIcon} alt="" /> Success
                          </>
                        ) : (
                          "Pending"
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="subDocBtnBox">
            <AppBtn btnText="Submit Doc" onClick={handleDocUpload} />
          </div>

          {/* <h1 className="usHeader">All Relative Services</h1>
          <div className="serviceMainSection userServiceSection">
            {Category?.data?.map((el, i) => (
              <ServiceCard {...el} key={i} />
            ))}
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
