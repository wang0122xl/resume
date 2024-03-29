/*
 * @Date: 2021-09-01 21:27:02
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2023-03-10 17:49:11
 * @Description: file content
 */

const ProjectExperience = () => {
    return (
        <>
        <h2>项目经验</h2>

        <h3>宠医PACS系统(React)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            PACS系统是实验室影像系统解决方案，旨在提高院内影像流程的信息化和自动化。简化、标准化医生的影像设备操作流程，提高相关工作效率
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>作为主程独立负责项目从0-1的技术选型调研，框架搭建，最佳实践示例及核心阅片模块的开发</p>
            <p>基于cornerstone实现的dicom文件在线阅片、标注、保存功能</p>
            <p>基于p5js、seadragon、p5tools实现的超大图片在线阅片、标注、裁剪截图功能</p>
            <p>基于webworker，结合proxy特性实现的高性能多文件上传管理，支持文件/任务的暂停、失败重试、最大并发任务数、大文件分片上传等功能</p>
        </section>

        <h3>宠物LIS/LIMS系统(React)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            宠物LIS/LIMS系统是长为数据为 新瑞鹏集团/兽丘宠物第三方检测 定制研发的宠物医院 实验室检查/外送检查 现代化、自动化和信息化解决方案。系统秉持为新瑞鹏旗下1000余家宠物医院提供便利的目标，大大提高了宠物医院实验室的工作效率。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>采用yarn workspance + lerna方案管理组织代码，既保证了基础组件，底层工具及发布流程的高复用性，又确保了两个项目业务逻辑互相分离</p>
            <p>独立负责LIMS核心模块-数据录入公式自动计算结果(mathjs)，及LIS所有模块开发</p>
            <p>为满足LIS / LIMS的个性化报告打印和下载需求，独立开发了基于 dom-to-image 和 jsPdf 的 html 打印方案（element-to-pdf），其余项目的pdf打印功能也都使用此库实现，大大加快项目开发进度</p>
        </section>

        <h3>实验室图像采集H5(React + Koa)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            实验室图像采集H5是为公司数据部门研发的一款收集实验室显微镜结果图片的H5小工具。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>深度参与需求分析，为客户(数据部门)提供产品方案</p>
            <p>独立负责项目的设计、交互、前端、后端及部署工作</p>
            <p>项目较低复杂度下，独立开发大大降低了沟通成本，使项目得以快速落地投产</p>
        </section>

        <h3>LIMS送检小程序(Taro + React h5)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            LIMS送检小程序是针对有送检需求的医院开发的一款送检流程线上化的小程序。包含线上下单，物流提醒，线上支付、企业月付，数据实时推送等实用功能。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>项目整体使用 Taro 原生小程序内嵌React h5 方案。其中支付、在线查看报告使用原生页面，其余业务均采用h5页面加快研发速度</p>
        </section>

        <h3>商宴通(iOS + react-native)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            商宴通致力于为企业商务宴请及合规管控提供一站式解决方案。已有强生、罗氏、辉瑞等数十家知名企业选择商宴通管理企业员工的宴请会餐流程。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>整理代码并抽取通用组件制作pod仓库，为全程费控PRO的开发提供了便捷</p>
            <p>独立完成项目 weex 代码的版本控制方案，并实现对应的可视化发布工具，并负责方案中 iOS和Web 端的代码编写</p>
            <p>主导完成 APP 跨平台方案从 weex 迁移至 react-native，统一公司内混合 APP 项目技术栈</p>
            <p>独立实现 react-native 的拆包、预加载及增量热更能力，其中预加载和增量热更功能已经过线上环境检验可大大降低白屏时间和更新流量。并配合 gitlab-ci 实现代码的半自动发布和版本控制</p>
            <p>基于puppeteer能力，向后台补充近千万家餐厅，商宴通 APP 基于这些数据成功开通当面付功能</p>
        </section>
        </>
    )
}

export default ProjectExperience
