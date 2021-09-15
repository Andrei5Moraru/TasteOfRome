package com.takeaseat.Booking.service;

import com.takeaseat.Booking.model.BookingModel;
import com.takeaseat.Booking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingServiceImpl implements BookingService{
    @Autowired
    private BookingRepository bookingRepository;
    @Override
    public List<BookingModel> getAll() {
        return bookingRepository.findAll(); }

//    @Override
//    public Optional<BookingModel> getById(UUID id) {
//        return bookingRepository.findById(id);
//    }


    @Override
    public BookingModel save(BookingModel booking) {
        return bookingRepository.save(booking);
    }
}
