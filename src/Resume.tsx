/*
 * @Date: 2021-08-31 19:40:51
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2021-08-31 21:43:47
 * @Description: file content
 */
import { useState } from "react";
import { PDFPreview } from "@cwfe/component";
import "./Resume.less";
import Profile from "./components/profile";
import WorkExperience from "./components/work-experience";

const Seperator = (props: {
    solid?: boolean
    className?: string
}) => {
    return (
        <div className={props.className}>
            <div className={props.solid ? 'seperator !border-solid' : 'seperator'} />
        </div>
    )
}

function App() {
    return (
        <PDFPreview onCancel={() => {}}>
            <div id="resume" className="bg-white flex flex-col">
                <div>
                    <h1 className="text-center">
                        王晓龙
                        <span className="text-[0.75em]"> -- 前端工程师</span>
                    </h1>
                    <Seperator solid className='!mt-[-10px]' />
                </div>
                <Profile />
                <Seperator />
                
                <WorkExperience />
                <div />
            </div>
        </PDFPreview>
    );
}

export default App;
