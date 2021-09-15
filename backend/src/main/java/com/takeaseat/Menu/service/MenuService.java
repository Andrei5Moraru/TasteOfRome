package com.takeaseat.Menu.service;

import com.takeaseat.Booking.model.BookingModel;
import com.takeaseat.Menu.model.MenuModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public interface MenuService {
    List<MenuModel> getAll();
    MenuModel save(MenuModel menuModel);
    Optional<MenuModel> getById(Integer id);
}
