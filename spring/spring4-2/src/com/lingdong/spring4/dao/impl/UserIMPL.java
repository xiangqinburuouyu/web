package com.lingdong.spring4.dao.impl;

import com.lingdong.spring4.dao.UserDAO;
import com.lingdong.spring4.entity.User;
import com.lingdong.spring4.main.OpenSession;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by lingdong on 2016/6/15 0015.
 */
public class UserIMPL implements UserDAO{
    @Override
    public void addUser(User user) {

    }

    @Override
    public List<User> getAllUser(){
        Session session = OpenSession.getSession() ;

        return null ;
    }
}
