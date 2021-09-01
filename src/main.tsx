/*
 * @Date: 2021-08-31 19:40:51
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2021-08-31 20:55:35
 * @Description: file content
 */
import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import Resume from "./Resume";
import "virtual:windi.css";
import "./index.css";

ReactDOM.render(
    <StrictMode>
        <Resume />
    </StrictMode>,
    document.getElementById("root")
);
