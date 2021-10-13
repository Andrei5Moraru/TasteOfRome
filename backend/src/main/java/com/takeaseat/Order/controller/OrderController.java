package com.takeaseat.Order.controller;


import com.takeaseat.Menu.model.MenuModel;
import com.takeaseat.Menu.service.MenuService;
import com.takeaseat.Order.model.OrderModel;
import com.takeaseat.Order.service.OrderService;
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
@RequestMapping(path = "/api/v1/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderModel>> getAll() {
        return new ResponseEntity<>(orderService.getAll(), new HttpHeaders(), HttpStatus.OK);
    }

    //    @GetMapping(value = "/{id}")
//    public Optional<BookingModel> getById(@PathVariable UUID id) {
//        return bookingService.getById(id);
//    }
    @GetMapping(value = "/{id}")
    public Optional<OrderModel> getById(@PathVariable Integer id) {
        return orderService.getById(id);
    }


    @PostMapping
    public OrderModel addOrderItem(@RequestBody OrderModel orderModel) {
        return orderService.save(orderModel);
    }
}