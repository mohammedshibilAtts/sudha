import BranchBanner from "@/components/branch/branchBanner";
import BranchBody from "@/components/branch/BranchBody";
import Breadcrumbs from "@/components/breadCrumbs/breadcrumbs";
import React from "react";

function page() {
  const breadCrumbsData = [
    { title: "Home", link: "/" },
    { title: "Branches" },
    { title: "Test" },
  ];
  return (
    <div className="">
      <BranchBanner />
      <Breadcrumbs data={breadCrumbsData} />
      <div className="bg-[#F0F5FF]">
        <BranchBody />
      </div>
    </div>
  );
}

export default page;
