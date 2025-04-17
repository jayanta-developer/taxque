import React, { useEffect, useState } from "react";
import "./style.css";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

//images
import smPageBG from "../../assets/images/smPageBG.svg";
import AvatarIcon from "../../assets/images/AvatarIcon2.png";
import UserBG from "../../assets/images/userBG2.jpg";

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

                {selectProduct?.overView?.summarys?.map((fp, i) => (
                  <span style={{ marginTop: "20px" }} key={i}>{fp}</span>
                ))}
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
