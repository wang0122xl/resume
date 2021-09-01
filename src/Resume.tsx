/*
 * @Date: 2021-08-31 19:40:51
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2021-09-01 23:38:46
 * @Description: file content
 */
import { useState } from "react";
import { PDFPreview } from "@cwfe/component";
import "./Resume.less";
import Profile from "./components/profile";
import WorkExperience from "./components/work-experience";
import ProjectExperience from "./components/project-experiences";
import Skill from "./components/skill";
import Education from "./components/education";
import Evaluation from "./components/evaluation";

const Seperator = (props: { solid?: boolean; className?: string }) => {
    return (
        <div className={props.className}>
            <div
                className={
                    props.solid ? "seperator !border-solid" : "seperator"
                }
            />
        </div>
    );
};

function App() {
    return (
        <PDFPreview onCancel={() => {}}>
            <div id="resume" className="bg-white flex flex-col">
                <div>
                    <h1 className="text-center">
                        王晓龙
                        <span className="text-[0.75em]"> -- 前端工程师</span>
                    </h1>
                    <Seperator solid className="!mt-[-10px]" />
                </div>
                <Profile />
                <Seperator />

                <WorkExperience />
                <Seperator />

                <ProjectExperience />
                <Seperator />

                <Skill />
                <Seperator />

                <Education />
                <Seperator />

                <Evaluation />

                <div />
            </div>
        </PDFPreview>
    );
}

export default App;
