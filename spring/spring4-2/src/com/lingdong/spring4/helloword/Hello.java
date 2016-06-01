package com.lingdong.spring4.helloword;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by lingdong on 2016/4/27 0027.
 */
public class Hello extends AbstractController {
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception{
        String user = request.getParameter("userName") ;

        ModelAndView mav = new ModelAndView("index") ; //跳转到的index.jsp页面
        mav.addObject("hello","您的用户名是:" + user) ; //添加属性
        return mav ;
    }
}
