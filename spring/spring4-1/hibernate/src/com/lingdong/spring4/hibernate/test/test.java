package com.lingdong.spring4.hibernate.test;

import com.lingdong.spring4.hibernate.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

/**
 * Created by lingdong on 2016/4/25 0025.
 */
public class test {
    private static final ServiceRegistry serviceRegistry ;
    private static final SessionFactory sessionFactory ;
    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure(); //加载默认配置文件
            serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);
        }catch (Exception ex){
            throw ex ;
        }

    }

    public static Session getSession() throws ExceptionInInitializerError{
        return sessionFactory.openSession();
    }

    public static void main(String[] args){
        Session session = getSession() ;
        try{
            User user= (User) session.get(User.class,1) ;
            System.out.println(user.getUserName() + "-" + user.getPassword() + "-" + user.getUserId());

        }finally {
            session.close() ;


        }

    }
}
