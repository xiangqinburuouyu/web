package com.lingdong.spring4.test;

import org.hibernate.Session;

import static com.lingdong.spring4.main.OpenSession.getSession;

/**
 * Created by lingdong on 2016/6/15 0015.
 */
public class TestUser {
    public static void main (String arge[]){
        Session session = getSession() ;
    }
}
