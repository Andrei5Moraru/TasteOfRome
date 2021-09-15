package com.takeaseat.UserProfile.registration;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.takeaseat.UserProfile.model.UserTypeModel;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

//registration Request

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest implements Serializable {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private UserTypeModel role;
    private String contactNumber;

}
