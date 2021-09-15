package com.takeaseat.UserProfile.registration;

import com.takeaseat.UserProfile.model.UserModel;
import com.takeaseat.UserProfile.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping(path = "/api/v1/registration")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserServiceImpl userService;


    @PostMapping("/signup")
    public ResponseEntity<UserModel> register(@RequestBody RegistrationRequest request){
        String email = request.getEmail();
        String password = passwordEncoder.encode(request.getPassword());

        UserModel userModel = UserModel.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(email)
                .role(request.getRole())
                .password(password)
                .contactNumber(request.getContactNumber())
                .build();

        if((userService.findByEmail(email).isPresent())){
            return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(userService.save(userModel), new HttpHeaders(), HttpStatus.OK);


    }

}
