package com.takeaseat.Booking.controller;

import com.takeaseat.Booking.model.BookingModel;
import com.takeaseat.Booking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/book")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public ResponseEntity<List<BookingModel>> getCompanies() {
        return new ResponseEntity<>(bookingService.getAll(), new HttpHeaders(), HttpStatus.OK);
    }

//    @GetMapping(value = "/{id}")
//    public Optional<BookingModel> getById(@PathVariable UUID id) {
//        return bookingService.getById(id);
//    }
    @PostMapping
    public BookingModel addBooking(@RequestBody BookingModel bookingModel) {
        return bookingService.save(bookingModel);
    }
}
