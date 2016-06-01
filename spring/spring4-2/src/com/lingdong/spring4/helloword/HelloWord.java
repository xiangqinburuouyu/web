package com.lingdong.spring4.helloword;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lingdong on 2016/4/26 0026.
 */
@Controller
@RequestMapping("/hellowrod")
public class HelloWord {
    private String helloId ;

    public String getHelloId() {
        return helloId;
    }

    public void setHelloId(String helloId) {
        this.helloId = helloId;
    }

    public HelloWord() {
        super();
    }

    public HelloWord(String helloId) {
        this.helloId = helloId;
    }

    @RequestMapping(value = "/hello.do")
    public String hellos(String userName, Model model){
        if(userName!="") {
            System.out.println(userName);
            model.addAttribute("helloword", "您的姓名是：" + userName);
            model.addAttribute("title", "当前页面：" + userName);
            return "hello";
        }else{
            return "valid" ;
        }
    }

    @RequestMapping("/helloWord.do")
    public @ResponseBody User helloWord(Integer userId, String userName){

        User user = new User() ;
        user.setUserId(userId) ;
        user.setUserName(userName) ;
        return user ;
    }

}
