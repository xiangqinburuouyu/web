package com.lingdong.spring.dao;

import com.lingdong.spring.hibernate.entities.User;

import java.util.List;


public interface UserDao {
    // 检查用户名是否存在
    void existUserName(String userName) ;
    // 添加用户
    void addUser(User user) ;
    void deleteUser(String userName) ;
    // 传递User类设置用户的所有信息
    void updateUser(User user);
    // 通过userId 设置用户名
    void updateUser(String userName,Integer userId);
    // 通过userId 设置用户名和密码
    void updateUser(String userName,String password,Integer userId);
    // 通过userId 设置密码
    void updateUserPassword(String password,Integer userId);
    List<User> getUser(String userid) ;
}
