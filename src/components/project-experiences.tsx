/*
 * @Date: 2021-09-01 21:27:02
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2022-04-28 18:15:03
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
            <p>基于webworker实现的高性能多文件上传管理，支持文件、任务的暂停、失败重试，大文件分片上传等功能</p>
        </section>

        <h3>宠物LIS/LIMS系统(React)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            宠物LIS/LIMS系统是长为数据为 新瑞鹏集团/兽丘宠物第三方检测 定制研发的宠物医院 实验室检查/外送检查 现代化、自动化和信息化解决方案。系统秉持为新瑞鹏旗下1000余家宠物医院提供便利的目标，大大提高了宠物医院实验室的工作效率。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>采用yarn workspance + lerna方案管理组织代码，既保证了基础组件，底层工具及发布流程的高复用性，又确保了两个项目业务逻辑互相分离</p>
            <p>与硬件工程师现场调试，基于http / socket方式与工作站通信，下发实验请求，上报实验结果</p>
            <p>独立负责LIMS核心模块-数据录入公式自动计算结果(mathjs)，及LIS所有模块开发</p>
            <p>为满足LIS / LIMS的个性化报告打印和下载需求，独立开发了基于 dom-to-image 和 jsPdf 的 html 页面打印方案并开源至公司组件库</p>
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

        <h3>长为健康小程序(Taro + h5)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            长为健康小程序是长为健康的ToC产品，内含便便日记，胃肠道问卷，健康问答，饮食打卡四大模块，全方位记录用户各项健康指标并提供专业的健康建议。
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>项目整体使用 Taro-React ，其中饮食打卡模块采取小程序内嵌Vue H5方案以加快开发进度</p>
            <p>采取服务端渲染的方式实现了小程序内生成海报并截图分享的功能</p>
            <p>基于 vue-router + transition 开发了v-r-transition-plugin 插件，实现了vue-router push / back的仿app动画效果，并额外扩展present及dismiss方法以区分不同的业务跳转，提高用户体验</p>
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
