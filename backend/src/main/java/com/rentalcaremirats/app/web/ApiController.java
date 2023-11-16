package com.rentalcaremirats.app.web;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentalcaremirats.app.model.Car;
import com.rentalcaremirats.app.model.Rent;
import com.rentalcaremirats.app.repository.CarDB;
import com.rentalcaremirats.app.repository.RentRepository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@ComponentScan
@Service
@Getter
@RestController
@RequestMapping(path = "/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ApiController {

    @Autowired
    private CarDB carDB;

    @Autowired
    private RentRepository rentRepository;

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getCars() {
        List<Car> cars = (List<Car>) carDB.findAll();
        return new ResponseEntity<>(cars, HttpStatus.ACCEPTED);
    }

    @GetMapping("/car/{id}/rent/unable_date")
    public ResponseEntity<Set<LocalDate>> getUnableDateRentCar(@PathVariable Integer id) {
        Car car = carDB.findById(id).get();
        List<Rent> rents = (List<Rent>) rentRepository.findAllByCar(car);
        Set<LocalDate> unableDate = new HashSet<LocalDate>();
        for (Rent rent : rents) {
            unableDate.add(rent.getStartDateRent());
            unableDate.add(rent.getEndDateRent());
            unableDate.addAll(rent.getStartDateRent().datesUntil(rent.getEndDateRent()).collect(Collectors.toList()));
        }

        return new ResponseEntity<>(unableDate, HttpStatus.ACCEPTED);
    }

    @GetMapping("/car/{name}")
    public ResponseEntity<Car> getCarByName(@PathVariable String name) {
        Car car = carDB.findByCarName(name);
        System.out.println(car);
        return new ResponseEntity<>(car, HttpStatus.ACCEPTED);
    }

    @PostMapping("/add/car")
    public String addCar(@RequestBody Car car) {
        carDB.save(car);
        return "Car successfully added";
    }

    @GetMapping("/rents")
    public ResponseEntity<List<Rent>> getRents() {
        List<Rent> rents = (List<Rent>) rentRepository.findAll();
        return new ResponseEntity<>(rents, HttpStatus.ACCEPTED);
    }

    @GetMapping("/rent")
    public ResponseEntity<List<Rent>> getRent(@RequestBody String phoneNumber) {
        List<Rent> rents = (List<Rent>) rentRepository.findAllByPhoneNumber(phoneNumber);
        return new ResponseEntity<>(rents, HttpStatus.ACCEPTED);
    }

    @PostMapping("/add/rent")
    public String addCar(@RequestBody Rent rent) {
        rentRepository.save(rent);
        return "Car successfully added";
    }

}
