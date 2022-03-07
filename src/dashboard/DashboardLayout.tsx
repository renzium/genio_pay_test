import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import styled from "styled-components";
import MemberContainer from "./main/dashboard_components/MembersContainer";
import TopNav from "./TopNav";

const Wrapper = styled.div`
  display: flex;

  .listItem {
    & > :nth-child(1) {
      margin: 0 1.2rem 0 1.6rem;
      width: 2.4rem;
    }
  }
  .main {
    flex: 1;
    overflow-y:auto;
    height: 100vh;
    background-color:var(--background);
  }
`;

const DashboardLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="main">
        <TopNav/>
   

        <Routes>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="wallet" element={<h1>Wallet</h1>} />
          <Route path="cards" element={<h1>Cards</h1>} />
          <Route path="fxcenter" element={<h1>FX-center</h1>} />
          <Route path="beneficiaries" element={<MemberContainer />} />
          <Route path="perks" element={<h1>Perks</h1>} />
        </Routes>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
