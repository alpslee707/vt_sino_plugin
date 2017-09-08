# vt_sino_plugin

适合初学者

windows环境下 kibana5.5.2 插件开发

柱形图

kibana版本5.5.2 echarts 3.7.1

准备

npm, node, kibana(开发版)

（kibana开发版） Git clone https://github.com/elastic/kibana

npm，node安装

进入kibana根目录

执行 npm run elasticsearch

结束后

执行 npm install echarts 安装echarts插件

开始开发

在根目录下的plugins文件夹中创建自己的插件 比如 vt_my_plugin。 vt 视图 ，my 我， plugin 插件。

进入 vt_my_plugin 创建 package.json 以及 index.js nodejs 开发规范要求。

package.json 中内容

{ "name": "vt_my_plugin", "version": "kibana" }

index.js 内容

export default function (kibana) { return new kibana.Plugin({ uiExports: { visTypes: [ 'plugins/vt_my_plugin/vt_my_plugin' ] } }) }
