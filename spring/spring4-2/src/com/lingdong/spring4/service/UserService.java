package com.lingdong.spring4.service;

import com.lingdong.spring4.dao.UserDAO;
import com.lingdong.spring4.entity.User;

import java.util.List;

/**
 * Created by lingdong on 2016/6/15 0015.
 */
public interface UserService extends UserDAO {
    @Override
    void addUser(User user);

    @Override
    List<User> getAllUser();
}
