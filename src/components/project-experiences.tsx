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

        <h3>万得基金app(iOS + React + Cypress)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            万得基金app是上海万得基金销售有限公司推出的一款集投研、交易、管理服务为一体的基金app，基金代销数量超17000只
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>独立完成产品iOS基座的开发、维护工作，保障产品2k日活下的稳定使用</p>
            <p>解决产品长期存在的自动登录白屏问题，提升用户体验，有效避免因登录白屏引发的客诉</p>
            <p>设计页面预缓存方案，使页面跳转中的loading持续时间缩短60%以上</p>
            <p>基于Cypress实现产品核心/高频业务的自动化测试，节约开发自测时间并在一定程度上保障上线代码的稳定性</p>
            <p>制定并调试客户端与插件间的协议方法，使插件h5在维持快速迭代、快速升级的优势下，拥有接近原生的性能及能力边界</p>
            <p>设计并实现app内插件包的版本管理/更新方案及特殊场景下的h5降级方案</p>
        </section>

        <h3>基金智研/wbuy(React + UmiJS)</h3>
        <p className="mb-10px">
            <span>项目描述</span>
            基金智研/wbuy是上海万得基金销售有限公司推出的主要面向机构交易者的投研、基金交易平台，助力机构交易者的投资决策，提高交易运营效率
        </p>
        <p><span>项目成绩：</span></p>
        <section>
            <p>主要负责项目投研模块的开发、维护工作，保障迭代计划</p>
            <p>优化项目中的通用图表组件，提升组件的可复用性和可扩展性</p>
            <p>使用jenkins构建脚本将部署升级的耗时缩短1/3,使开发更多专注于版本的可靠性</p>
        </section>

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
