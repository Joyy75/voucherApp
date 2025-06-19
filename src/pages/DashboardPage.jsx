import React from "react";
import { Container } from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { CiCircleList } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiReceipt } from "react-icons/ci";

const DashboardPage = () => {
  return (
    <section  className="p-5 min-h-screen">
      <Container>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <ModuleBtn
              name={"Product"}
              icon={<CiCircleList />}
              url={"/product"}
            />
          </div>
          <div className="col-span-1">
            <ModuleBtn name={"Sale"} icon={<CiShoppingCart />} url={"/sale"} />
          </div>
          <div className="col-span-1">
            <ModuleBtn name={"Voucher"} icon={<CiReceipt />} url={"/voucher"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
