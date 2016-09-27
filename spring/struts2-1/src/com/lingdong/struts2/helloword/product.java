package com.lingdong.struts2.helloword;

/**
 * Created by lingdong on 2016/4/16 0016.
 */
public class product {
    private Integer proId ;
    private String proName ;
    private String proPrice ;

    public Integer getProId() {
        return proId;
    }

    public void setProId(Integer proId) {
        this.proId = proId;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getProPrice() {
        return proPrice;
    }

    public void setProPrice(String proPrice) {
        this.proPrice = proPrice;
    }


    @Override
    public String toString() {
        return "product{" +
                "proId=" + proId +
                ", proName='" + proName + '\'' +
                ", proPrice='" + proPrice + '\'' +
                '}';
    }
}
