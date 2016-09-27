package com.lingdong.spring.test;
import com.lingdong.spring.dao.UserDao;
import com.lingdong.spring.hibernate.entities.User;
import com.lingdong.spring.service.UserService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;
import java.sql.SQLException;



public class TestSpring {
    private ApplicationContext applicationContext = null ;

    DataSource dataSource = null ;
    private UserDao userDao = null;
    private UserService userService = null ;
    BCryptPasswordEncoder bCryptPasswordEncoder = null ;
    {
        applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml") ;
        dataSource = applicationContext.getBean(DataSource.class);
        userDao = applicationContext.getBean(UserDao.class);
        userService = applicationContext.getBean(UserService.class) ;
        bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }


   @Test
    public void testDataSource() throws SQLException{

        System.out.print(dataSource.getConnection());
    }
    @Test
    public void testAddUser(){
        User user = new User() ;
        String userName = "wangs11" ;
        String password = "123" ;
        password = bCryptPasswordEncoder.encode(password) ;
        user.setUserId(1);
        user.setUserName(userName);
        //user.setPassword(password);
        // 通过Id 设置用户名
        userService.updateUser(userName,1);

        // 设置用户名
        //userService.updateUserPassword(password,1);
        System.out.println("-->:" + password);
    }

    public static void main(String args[]) throws SQLException {
        TestSpring testSpring = new TestSpring() ;
        testSpring.testDataSource();
        testSpring.testAddUser();

    }

}
