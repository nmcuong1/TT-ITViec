import React from 'react';
import HomePage from "./pages/homepage";
import { ROUTE } from "./utils/route";
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/theme/masterLayout';
import WordSkill from "./pages/wordSkill";
import wordLevel from "./pages/wordlevel"

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
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </MasterLayout>
    );
}

const RouterITVIEC = () => {
    return renderRouter();
}

export default RouterITVIEC;
