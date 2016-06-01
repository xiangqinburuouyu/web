package com.lingdong.spring4.helloword;

/**
 * Created by lingdong on 2016/5/3 0003.
 */
public class User {
    private Integer userId ;
    private String userName ;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public User(Integer userId, String userName) {
        this.userId = userId;
        this.userName = userName;
    }

    public User() {

    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                '}';
    }
}
