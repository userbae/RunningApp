import Home from "pages/home";
import LoginPage from "pages/login";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./pc/Header";
import Community from "../pages/community/intext";
import MHome from "pages/m/home";
import MFooter from "./mobile/MFooter";
import Map from "pages/m/map";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  //모바일로 들어오면 true => 운동 시작 활성화 되게하기
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobile);

  return (
    <>
      {isAuthenticated ? (
        isMobile ? (
          <div className="max-h-[calc(100vh-4rem)] overflow-auto">
            <Routes>
              <Route path="/m" element={<MHome />} />
              <Route path="/m/run" element={<Map />} />

              <Route path="*" element={<Navigate replace to="/m" />} />
            </Routes>
            <MFooter />
          </div>
        ) : (
          <>
            <div className=" flex min-h-screen w-full flex-col divide-y divide-slate-200">
              <Header />
              <div className="flex-1 px-10 pt-5">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/community" element={<Community />} />

                  <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </>
      )}
    </>
  );
}
