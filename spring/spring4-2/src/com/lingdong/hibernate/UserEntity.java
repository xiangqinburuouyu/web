package com.lingdong.hibernate;

import javax.persistence.*;

/**
 * Created by lingdong on 2016/5/1 0001.
 */
@Entity
@Table(name = "user", schema = "javatest", catalog = "")
public class UserEntity {
    private int userId ;
    private String userName ;
    private String password ;

    @Id
    @Column(name = "userid")
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name="username")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Basic
    @Column(name="password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
