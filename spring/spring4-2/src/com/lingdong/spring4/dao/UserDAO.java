package com.lingdong.spring4.dao;

import com.lingdong.spring4.entity.User;

import java.util.List;

/**
 * Created by lingdong on 2016/6/15 0015.
 */
public interface UserDAO {
    public void addUser(User user) ;
    public List<User> getAllUser() ;
}
