package com.takeaseat.Order.model;

import com.takeaseat.Menu.model.MenuModel;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.Data;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDefs;
import org.hibernate.annotations.TypeDef;
import org.thymeleaf.expression.Maps;

import javax.persistence.*;
import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.Map;



@Entity
@Table(name = "Orders")
@TypeDefs({
        @TypeDef(name = "json", typeClass = JsonStringType.class),
        @TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
})
public @Data
class OrderModel implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer order_id;
    @Type(type = "jsonb")
    @Column( columnDefinition = "jsonb")
    private Object orders;
    private int total;


}
