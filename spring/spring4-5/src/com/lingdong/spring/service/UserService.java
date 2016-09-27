package com.lingdong.spring.service;

import com.lingdong.spring.hibernate.entities.User;


public interface UserService {
    void addUser(User user) ;
    // 设置用户所有信息
    void updateUser(User user) ;
    // 设置用户名
    void updateUser(String userName ,Integer userId) ;
    // 设置用户名和密码
    void updateUser(String userName , String password , Integer userId) ;
    // 设置密码
    void updateUserPassword(String password , Integer userId) ;
}
