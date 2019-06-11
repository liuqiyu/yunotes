# 实用案例

## 清空 commit 历史记录

如果想清空已有项目的所有的 commit 历史记录，需要进行一下操作：

```bash
# 1、checkout
git checkout --orphan latest_branch

# 2、Add all the files
git add -A

# 3、Commit the changes
git commit -am "commit changes"

# 4、Delete the branch
git branch -D master

# 5、Rename the current branch to master
git branch -m master

# 6、Finally, focre update you repository
git push -f origin master
```

## 新建仓库添加远程仓库

```bash
1、 init git repo
git init

# 2、Add all the files
git add -A

# 3、Commit the changes
git commit -am "first commit"

# 4、Add the origin address
git remote add origin https://github.com/liuqiyu/yunotes.git

# 5、Push the commits
git push -u origin master
```
