package com.lingdong.spring.service;

import com.lingdong.spring.dao.UserDao;
import com.lingdong.spring.hibernate.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Override
    public void addUser(User user) {
        userDao.existUserName(user.getUserName());
        userDao.addUser(user);

    }

    // 设置用户所有信息
    @Override
    public void updateUser(User user){
        userDao.existUserName(user.getUserName());
        userDao.updateUser(user);
    }

    // 设置用户名
    @Override
    public void updateUser(String userName, Integer userId) {
        userDao.existUserName(userName);
        userDao.updateUser(userName,userId);
    }
    // 设置用户名和密码
    @Override
    public void updateUser(String userName ,String password ,Integer userId) {
        userDao.existUserName(userName);
        userDao.updateUser(userName , password, userId);
    }
    // 设置密码

    @Override
    public void updateUserPassword(String password, Integer userId) {
        userDao.updateUserPassword(password, userId);
    }
}
