package com.lingdong.spring4.manage;

import com.lingdong.spring4.entity.User;
import com.lingdong.spring4.main.OpenSession;
import org.hibernate.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lingdong on 2016/5/7 0007.
 */

/*
* UserManage 包含
* UserLogin 用户登录
* UserRegister 用户注册
* UserManage 用户管理
* */

@Controller
@RequestMapping("/user")
public class UserManage {
    @RequestMapping(value = "/userLogin.do")
    public String login(String userName, String password, Model model){
        String sqlUserName = "" ;
        String sqlPassword = "" ;
        if(sqlUserName.equals(userName) && sqlPassword.equals(sqlPassword)){
            model.addAttribute("success", "验证通过！欢迎您" + userName ) ;
            return "userManage" ;
        }else{
            model.addAttribute("lose", "验证未通过，请输入正确的用户名/密码！") ;
            return "userLogin" ;
        }

    }
    public User getUser(String userName){
        User user ;
        Session session = OpenSession.getSession() ;
        try{
            user = (User) session.get(User.class, userName) ;
        }catch (Exception ex){
            throw new ExceptionInInitializerError(ex) ;
        }finally {
            session.close() ;
        }
        return user ;
    }

}
