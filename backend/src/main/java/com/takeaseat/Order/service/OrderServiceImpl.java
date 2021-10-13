package com.takeaseat.Order.service;

import com.takeaseat.Menu.model.MenuModel;
import com.takeaseat.Menu.repository.MenuRepository;
import com.takeaseat.Order.model.OrderModel;
import com.takeaseat.Order.repository.OrderRepository;
import com.takeaseat.Order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public List<OrderModel> getAll() {
        return orderRepository.findAll(); }

@Override
public Optional<OrderModel> getById(Integer id) {
    return orderRepository.findById(id);
}

    @Override
    public OrderModel save(OrderModel menu) {
        return orderRepository.save(menu);
    }
}
