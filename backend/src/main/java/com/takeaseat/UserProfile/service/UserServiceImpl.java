package com.takeaseat.UserProfile.service;

import com.takeaseat.UserProfile.model.UserModel;
import com.takeaseat.UserProfile.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserDetailsService {



    private UserRepository userRepository;



    public Optional<UserModel> findByEmail(String name) {
        return userRepository.findByEmail(name);
    }


    public UserModel save(UserModel userModel) {
        return userRepository.save(userModel);

    }


    public List<UserModel> findAll() {
        return userRepository.findAll();
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel users = this.userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));

        return new User(users.getEmail(), users.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(users.getRole().name())));
    }

    public int enableUser(String email) {
        return userRepository.enableAppUser(email);
    }
}
