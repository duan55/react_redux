###### 前置

学习webpack

###### 步骤

脚手架

安装

npm install -g create-react-app

cd des+tab => cd Desktop 到这个常用界面启动项目

dir cls



因为老旧版本的下载方式已经过时

而我的版本又不兼容

npx create-react-app react_staging --skip-install

那之后到`package.json` 文件编辑修改版本，

```json
{
  "name": "react_staging",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4",
    "ajv": "^8.12.0",
    "ajv-keywords": "^5.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

```
git init   本地初始化一个git仓库
git add .  将本地所有文件添加到我们本地仓库
git commit -m "first commit"  提交
git remote add origin git@github.com:crazy-dking/xxx.git   添加远程连接   
git push -u origin master   推送代码到远程
```

```
ipconfig/flushdns
git config --global --unset http.proxy
git config --global --unset https.proxy
```

```
git config --global http.sslVerify false
git config --global url.https://github.com/.insteadOf git://github.com/
```



###### 拼尽全力 最后解决

```
git remote -v
origin  https://github.com/duan55/react_staging.git (fetch)
origin  https://github.com/duan55/react_staging.git (push)
PS C:\Users\陈鸿森\Desktop\react_staging> git config --global credential.helper cache
PS C:\Users\陈鸿森\Desktop\react_staging> git config --global -l
credential.http://58.247.122.126:8010.provider=generic
user.name=duan55
user.email=2233635634@qq.com
credential.http://10.0.48.15:8090.provider=generic
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
http.sslverify=false
credential.https://pmgitlab.hipermatic.com.provider=generic
credential.helper=cache
PS C:\Users\陈鸿森\Desktop\react_staging> git config --global http.sslVerify true
PS C:\Users\陈鸿森\Desktop\react_staging> git remote set-url origin git@ssh.github.com:duan55/react_staging.git
PS C:\Users\陈鸿森\Desktop\react_staging> git push -u origin master
The authenticity of host 'ssh.github.com (20.205.243.160)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:1: github.com
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'ssh.github.com' (ED25519) to the list of known hosts.
Enumerating objects: 32048, done.
Counting objects: 100% (32048/32048), done.
Delta compression using up to 16 threads
Compressing objects: 100% (24545/24545), done.
Writing objects:  48% (15384/32048), 22.60 MiB | 97.00 KiB/s
```

因为http不行 所以使用了ssh传输 更改链接方式remote 然后就行了
