package com.lingdong.spring.dao.impl;

import com.lingdong.spring.dao.UserDao;
import com.lingdong.spring.exceptions.UserException;
import com.lingdong.spring.hibernate.entities.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private SessionFactory sessionFactory ;
    //获取当前线程绑定的Session
    private Session getSession(){
        return sessionFactory.getCurrentSession() ;
    }


    @Override
    public void existUserName(String userName){
        String hql = "SELECT COUNT(*) FROM User u WHERE u.userName=?" ;
        Long count = (Long) getSession().createQuery(hql).setString(0,userName).uniqueResult();
        if (count > 0)
            throw new UserException("用户名" + userName + "已存在！");
    }


    @Override
    public void addUser(User user){
        getSession().save(user) ;
    }
    @Override
    public void deleteUser(String userName){}

    // 设置所有用户信息
    @Override
    public void updateUser(User user){
        getSession().update(user);
    }
    // 设置用户名
    @Override
    public void updateUser(String userName,Integer userId){
        String hql = "UPDATE User u SET u.userName = ? WHERE u.userId = ?" ;
        getSession().createQuery(hql).setString(0,userName).setInteger(1,userId).executeUpdate() ;
    }

    // 设置用户名和密码
    @Override
    public void updateUser(String userName, String password, Integer userId) {
        String hql = "UPDATE User u SET u.userName = ?, u.password = ? WHERE u.userId = ?" ;
        getSession().createQuery(hql).setString(0,userName).setString(1,password).setInteger(2,userId).executeUpdate() ;
    }
    // 设置密码
    @Override
    public void updateUserPassword(String password, Integer userId) {
        String hql = "UPDATE User u SET u.password = ? WHERE u.userId = ?" ;
        getSession().createQuery(hql).setString(0,password).setInteger(1,userId).executeUpdate() ;
    }

    @Override
    public List<User> getUser(String userid){
        String hql = "SELECT u.userName FROM User u  WHERE u.userId =?" ;
        Query query = getSession().createQuery(hql).setString(0,userid) ;
        return (List<User>) query.uniqueResult();
    }
}
