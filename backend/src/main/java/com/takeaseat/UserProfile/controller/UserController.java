package com.takeaseat.UserProfile.controller;

import com.takeaseat.UserProfile.model.UserModel;

import com.takeaseat.UserProfile.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }


//    @GetMapping(value = "/users")
//    @PreAuthorize("hasAnyAuthority('COMPANY')")
//    public ResponseEntity<List<UserModel>> getAllUsers(){
//        return new ResponseEntity<>(userService.findAll(), new HttpHeaders(), HttpStatus.OK);
//    }




}
