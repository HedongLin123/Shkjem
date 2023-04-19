## 组件列表

1. vue-router
2. element-ui
3. axios
4. vue-video-player (视频组件)
5. vue-awesome-swiper (首页滚动组件)
6. vue-lazyload (图片懒加载)

## Project setup

``` powershell
npm install
```

### Compiles and hot-reloads for development

```powershell
npm run serve
```

### Compiles and minifies for production

```powershell
npm run build
```

### Docker

> 使用 Docker 发布镜像至镜像服务器
> 镜像地址（可拉取）：ccr.ccs.tencentyun.com/ifengzctest/kjweb:v1

```powershell
# 第一步构建镜像
docker build -t fengzctest.kjweb:v1 .

# 第二部登录镜像仓库
docker login --username 100001190206 ccr.ccs.tencentyun.com

# 查看镜像列表
docker images

# 添加Tag
docker tag [ImageId] ccr.ccs.tencentyun.com/ifengzctest/kjweb:v1 

# 推送镜像至镜像服务器
docker push ccr.ccs.tencentyun.com/ifengzctest/kjweb:[tag]
```
