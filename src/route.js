import React from 'react';
import HomePage from "./pages/homepage";
import { ROUTE } from "./utils/route";
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/theme/masterLayout';
import WordSkill from "./pages/wordSkill";
import wordLevel from "./pages/wordlevel"
import JobList from "./pages/jobList"
import JobLevel from "./pages/jobLevel"


const renderRouter = () => {
    const userRouter = [
        {
            path: ROUTE.USER.HOME,
            component: HomePage
        },
        {
            path: ROUTE.USER.WORD_SKILL,
            component: WordSkill
        },
        {
            path: ROUTE.USER.WORD_LEVEL,
            component: wordLevel
        },
        {
            path: ROUTE.USER.JOBLIST,
            component: JobList
        },
        {
            path: ROUTE.USER.JOBLEVEL,
            component: JobLevel
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
                 <Route path="/tim-viec-lam-it/:skillName" element={JobList} />
                 <Route path="/tim-viec-lam-it-theo-cap-bac/:skillLevel" element={JobLevel} />
            </Routes>
        </MasterLayout>
    );
}

const RouterITVIEC = () => {
    return renderRouter();
}

export default RouterITVIEC;
