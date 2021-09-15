package com.takeaseat.Booking.service;

import com.takeaseat.Booking.model.BookingModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public interface BookingService {
    List<BookingModel> getAll();
    BookingModel save(BookingModel bookingModel);
}
