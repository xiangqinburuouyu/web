package com.lingdong.spring4.main;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

/**
 * Created by lingdong on 2016/5/7 0007.
 */
public class OpenSession {
    private static final SessionFactory ourSessionFactory ;
    private static final ServiceRegistry serviceRegistry ;
    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure(); //加载默认配置文件
            serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
            ourSessionFactory = configuration.buildSessionFactory(serviceRegistry);
        }catch (Throwable ex){
            throw new ExceptionInInitializerError(ex) ;
        }

    }

    public static Session getSession() throws HibernateException {
        return ourSessionFactory.openSession();
    }
}
