package com.takeaseat.Menu.model;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Menu")
public @Data
class MenuModel implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    @Column(length = 500)
    private String name;

    private int price;
    private String category;
    @Column(length = 500)
    private String description;

    private String image;


}
