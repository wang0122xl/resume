/*
 * @Date: 2021-08-31 19:40:51
 * @Author: wang0122xl@163.com
 * @LastEditors: wang0122xl@163.com
 * @LastEditTime: 2021-08-31 20:50:51
 * @Description: file content
 */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCSS from "vite-plugin-windicss";
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), WindiCSS()],
    esbuild: {
        jsxInject: `import React from 'react'`
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                esbuildCommonjs(['@cwfe/component'])
            ]
        }
    }
});
