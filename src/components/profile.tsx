/*
 * @Date: 2021-08-31 20:49:55
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2021-08-31 21:15:26
 * @Description: file content
 */

const Profile = () => {
    return (
        <div>
            <h2>个人信息</h2>
            <div className="flex">
                <p className="w-250px">
                    <span>性别:</span>
                    男
                </p>
                <p>
                    <span>出生日期:</span>
                    1993年01月
                </p>
            </div>
            <div className="flex">
                <p className="w-250px">
                    <span>手机:</span>
                    13601716401
                </p>
                <p>
                    <span>邮箱:</span>
                    wang0122xl@163.com
                </p>
            </div>
        </div>
    )
}

export default Profile