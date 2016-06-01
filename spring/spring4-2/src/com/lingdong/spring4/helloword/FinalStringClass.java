package com.lingdong.spring4.helloword;

/**
 * Created by lingdong on 2016/5/8 0008.
 */
public class FinalStringClass {
    private static final String loginSuccessText = "\u9a8c\u8bc1\u901a\u8fc7\uff0c\u6b22\u8fce" ;
    private static final String loginSuccessText2 = "\u7528\u6237\uff01" ;
    private static final String loginSuccessText3 = "\u9a8c\u8bc1\u672a\u901a\u8fc7\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u7528\u6237\u540d\u6216\u8005\u5bc6\u7801\uff01" ;

    public static String getLoginSuccessText() {
        return loginSuccessText;
    }

    public static String getLoginSuccessText2() {
        return loginSuccessText2;
    }

    public static String getLoginSuccessText3() {
        return loginSuccessText3;
    }
}
