package com.takeaseat.Menu.model;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

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
