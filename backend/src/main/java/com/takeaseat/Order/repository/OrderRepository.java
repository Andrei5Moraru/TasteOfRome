package com.takeaseat.Order.repository;


import com.takeaseat.Order.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Integer> {

}
