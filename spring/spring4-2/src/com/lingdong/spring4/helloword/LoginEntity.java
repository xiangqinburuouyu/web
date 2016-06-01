package com.lingdong.spring4.helloword;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lingdong on 2016/5/1 0001.
 */
@Controller
public class LoginEntity {
    @RequestMapping(value = "UserManage.do" )
    public String login(){
        return "login" ;
    }
    @RequestMapping(value = "loginSubmit.do", method = RequestMethod.POST)
    public String loginSubmit(String userName, String password, Model model/*, Map map*/){
        String sqlUserName = "admin";
        String sqlPassword = "admin123";
        if(userName.equals(sqlUserName) && password.equals(sqlPassword)) {
            model.addAttribute("success", FinalStringClass.getLoginSuccessText() + userName + FinalStringClass.getLoginSuccessText2());
            //map.put("success", "\u4f7f\u7528Map\uff0c\u6b22\u8fce" + userName + "\u7528\u6237\uff01");
            return "home";
        }
        else {
            model.addAttribute("success", FinalStringClass.getLoginSuccessText3());
            return "login" ;
        }


    }

}
