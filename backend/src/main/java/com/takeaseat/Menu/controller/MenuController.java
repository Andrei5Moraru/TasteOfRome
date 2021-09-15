package com.takeaseat.Menu.controller;


import com.takeaseat.Menu.model.MenuModel;
import com.takeaseat.Menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    @Autowired
    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public ResponseEntity<List<MenuModel>> getAll() {
        return new ResponseEntity<>(menuService.getAll(), new HttpHeaders(), HttpStatus.OK);
    }

    //    @GetMapping(value = "/{id}")
//    public Optional<BookingModel> getById(@PathVariable UUID id) {
//        return bookingService.getById(id);
//    }
    @GetMapping(value = "/{id}")
    public Optional<MenuModel> getById(@PathVariable Integer id) {
        return menuService.getById(id);
    }


    @PostMapping
    public MenuModel addMenuItem(@RequestBody MenuModel menuModel) {
        return menuService.save(menuModel);
    }
}