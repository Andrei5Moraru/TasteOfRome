package com.takeaseat.UserProfile.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class UserModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type = "pg-uuid")
    private UUID id;

    @Enumerated(EnumType.STRING)
    private UserTypeModel role;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String contactNumber;
    private Boolean enabled = false;

    public boolean isEnabled() {
        return enabled;
    }



}
