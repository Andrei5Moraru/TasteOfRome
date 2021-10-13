package com.takeaseat.Order.service;

import com.takeaseat.Order.model.OrderModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface OrderService {
    List<OrderModel> getAll();
    OrderModel save(OrderModel orderModel);
    Optional<OrderModel> getById(Integer id);
}
