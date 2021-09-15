package com.takeaseat.Menu.service;

import com.takeaseat.Menu.model.MenuModel;
import com.takeaseat.Menu.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MenuServiceImpl implements MenuService{
    @Autowired
    private MenuRepository menuRepository;
    @Override
    public List<MenuModel> getAll() {
        return menuRepository.findAll(); }

//    @Override
//    public Optional<BookingModel> getById(UUID id) {
//        return bookingRepository.findById(id);
//    }
@Override
public Optional<MenuModel> getById(Integer id) {
    return menuRepository.findById(id);
}

    @Override
    public MenuModel save(MenuModel menu) {
        return menuRepository.save(menu);
    }
}
