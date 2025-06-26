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
        <div className="grid grid-cols-1 md:grid-cols-1 grid-row-3 gap-3  ">
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product List"}
              icon={<CiCircleList className="size-6" />}
              url={"/product"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Sale Section"} icon={<CiShoppingCart className="size-6"/>} url={"/sale"} />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Voucher Store"} icon={<CiReceipt className="size-6" />} url={"/voucher"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
