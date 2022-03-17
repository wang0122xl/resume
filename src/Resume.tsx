/*
 * @Date: 2021-08-31 19:40:51
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2022-03-17 16:55:51
 * @Description: file content
 */
import { useState } from "react";
import "./Resume.less";
import Profile from "./components/profile";
import WorkExperience from "./components/work-experience";
import ProjectExperience from "./components/project-experiences";
import Skill from "./components/skill";
import Education from "./components/education";
import Evaluation from "./components/evaluation";
import ElementToPdf from 'element-to-pdf'

const Seperator = (props: { solid?: boolean, className?: string }) => {
    return (
        <div
            className={
                (props.solid ? "seperator solid" : "seperator") + ` ${props.className}`
            }
        />
    );
};

function App() {
    const _getPdf = async () => {
        const domToPdf = new ElementToPdf()
        const { pdf } = await domToPdf.transformToPdf({
            element: document.getElementById('resume')! as HTMLDivElement,
            padding: [0, 10, 5, 10],
            lastElementAsFooter: false,
            lastElementOnBottom: false,
            renderPageFooter: (pdf, currentPage) => {
                pdf
                    .setTextColor('#111')
                    .setFontSize(8)
                    .text(`第${currentPage}页`, pdf.internal.pageSize.getWidth() - 17, pdf.internal.pageSize.getHeight() - 1)
            },
        })
        return pdf
    }

    const doPrint = async () => {
        const pdf = await _getPdf()
            const w = window.open()!
            const iframe = document.createElement('iframe')
            iframe.hidden = true
            iframe.src = URL.createObjectURL(pdf.output('blob'))
             w.document.body.appendChild(iframe)
            iframe.contentWindow?.print()
    }

    const doDownload = async () => {
        const pdf = await _getPdf()
        pdf.save('test')
    }

    return (
        // <PDFPreview onCancel={() => {}} previewType="all" titles={['王晓龙-13601716401']}>
        <div id="print-container">
            <div id="resume" className="print-layer a4">
                <div className="mt-10px mb-10px">
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

            </div>
            <div className="mt-40px flex space-x-50px justify-center mb-10vh">
                <button onClick={doDownload}>下载</button>
                <button onClick={doPrint}>打印</button>
            </div>
        </div>
        // </PDFPreview>
    );
}

export default App;
