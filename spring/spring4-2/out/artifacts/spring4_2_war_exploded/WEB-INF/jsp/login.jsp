<%--
  Created by IntelliJ IDEA.
  User: lingdong
  Date: 2016/5/1 0001
  Time: 6:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录页面</title>
</head>
<body>
<form action="loginSubmit.do" method="post">
    <h1>${success}</h1>
    用户名：<input type="text" name="userName" placeholder="用户名/邮箱/手机号" /><br/><br/>
    密 码：<input type="password" name="password" placeholder="密码" /><br/><br/>
    <input type="submit" value="提交" />
</form>
</body>
</html>
