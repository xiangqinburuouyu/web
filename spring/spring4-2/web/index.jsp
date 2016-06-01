<%--
  Created by IntelliJ IDEA.
  User: lingdong
  Date: 2016/4/26 0026
  Time: 21:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>首页</title>
    <script src="/static/mythemes/js/jquery.min.js"></script>
  </head>
  <body>
  <h1>注解方式设置Controller </h1>
  <form action="hello.do" method="post">
    姓名：<input type="text" name="userName" />
    <input type="submit"  value="提交" />
  </form>
  <h1>BeanName方式设置Controller </h1>
  <a href="/helloName.do">helloName.do</a>
  <h1>Url方式设置Controller </h1>
  <a href="/helloUrl.do">helloUrl.do</a>
  <h1>Controller类名方式设置Controller </h1>
  <a href="/helloClassName.do">HelloClassName.do</a>
  <h1>登录</h1>
  <a href="login.do">登录</a>
  </body>
</html>
