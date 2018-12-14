# antd-demo 
![react-start](https://s1.ax1x.com/2018/12/14/FUJo6K.png)

### 基础知识

##### 1.使用脚手架创建项目并启动

​	1.1 安装脚手架：

```
npm install -g create-react-app
```

​	1.2 使用脚手架创建项目：

```
create-react-app antd-start-demo           antd-start-demo为项目名。
```

​	1.3 启动

```
npm start
```

##### 2.npm转换为yarn

​	2.1 安装yarn：

```
 npm install -g yarn
```

​	2.2 获取yarn当前的镜像源：

```
yarn config get registry
```

​	2.3 设置为淘宝镜像：

```
yarn config set registry 'https://registry.npm.taobao.org'
```

​	2.4 常用命令：

```
yarn init		--初始化
yarn add		--添加模块
yarn remove		--删除模块
yarn /yarn install		--安装项目中的依赖
```

### 项目搭建

1.1 安装react-router 4.0、axios、less-loader

```
yarn add react-router-dom axios less-loader
```

1.2 暴漏webpack配置

```
yarn eject
```

![webpack配置](https://s1.ax1x.com/2018/12/14/FUtPv6.png)