package com.rentalcaremirats.app.web;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.rentalcaremirats.app.utils.*;

import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import java.util.*;
import javax.mail.MessagingException;

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
    public ResponseEntity<List<Rent>> getRent(@RequestBody Rent rent) {
        List<Rent> rents = (List<Rent>) rentRepository.findAllByPhoneNumber(rent.getPhoneNumber());
        return new ResponseEntity<>(rents, HttpStatus.ACCEPTED);
    }

    @PostMapping("/add/rent")
    public String addCar(@RequestBody Rent rent) {
        Car car = carDB.findById(rent.getCar().getId()).get();
        rent.setReservationNumber(ReservatieUtil.generateReservationNumber());
        rent.setTotalPrice(
                ReservatieUtil.calcualteTotalPrice(rent.getStartDateRent(), rent.getEndDateRent(), car.getRentPrice()));
        rentRepository.save(rent);
        sendEmail(rent);
        return "Car successfully added";
    }

    @PostMapping("/rent/reservation")
    public ResponseEntity<Rent> getRentByReservationNumber(@RequestBody Rent rent) {
        Rent result = rentRepository.findByReservationNumber(rent.getReservationNumber());

        if (result == null) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rent>(result, HttpStatus.ACCEPTED);
    }

    @Transactional
    @PostMapping("/rent/reservation/delete")
    public ResponseEntity<String> deleteRentByReservation(@RequestBody Rent rent) {
        rentRepository.deleteByReservationNumber(rent.getReservationNumber());
        return new ResponseEntity<String>("Rent Successfully Deleted", HttpStatus.ACCEPTED);
    }

    private void sendEmail(Rent rent) {
        Car car = carDB.findById(rent.getCar().getId()).get();

        String htmlBody = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Car Rent Confirmation</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            line-height: 1.6;\n" +
                "            color: #000000;\n" +
                "        }\n" +
                "        .container {\n" +
                "            max-width: 600px;\n" +
                "            margin: 0 auto;\n" +
                "        }\n" +
                "        .header {\n" +
                "            background-color: #D8781F;\n" +
                "            color: white;\n" +
                "            padding: 1em;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        .content {\n" +
                "            padding: 1em;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            background-color: #f1f1f1;\n" +
                "            padding: 1em;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"header\">\n" +
                "            <h1>Rent Confirmation</h1>\n" +
                "        </div>\n" +
                "        <div class=\"content\">\n" +
                "            <p>Dear " + rent.getEmail() + ", </p>\n" +
                "            <p>We are pleased to confirm the rental of the following car:</p>\n" +
                "            <p><strong>Car Details:</strong></p>\n" +
                "            <ul>\n" +
                "<li><strong>Reservation Number</strong> " + rent.getReservationNumber() + "</li>\n" +
                "                <li><strong>Car Name:</strong> " + car.getCarName() + "</li>\n" +
                "                <li><strong>Rental Start Date:</strong> " + rent.getStartDateRent() + "</li>\n" +
                "                <li><strong>Rental End Date:</strong> " + rent.getEndDateRent() + "</li>\n" +
                "            </ul>\n" +
                "            <p><strong>Additional Information:</strong></p>\n" +
                "            <p>To proceed with the cancellation, kindly visit our website. Once logged in, navigate to the \"My Reservations\" section and enter your reservation number. Follow the on-screen instructions to complete the cancellation process.</p>\n"
                +
                "            <p>We appreciate your business and look forward to serving you. If you have any questions or need further assistance, please contact our customer support at [Customer Support Email or Phone Number].</p>\n"
                +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            <p>Thank you for choosing RentCarEmirats for your car rental needs.</p>\n" +
                "            <p>Best regards,<br>RentCarEmirats<br>https://rental-car-emirats.vercel.app/</p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";

        try {
            // Send the confirmation email
            EmailUtil.sendConfirmationEmail(rent.getEmail(), "Car Rental Confirmation", htmlBody);
            System.out.println("Rent confirmation email sent successfully.");
        } catch (MessagingException e) {
            System.err.println("Error sending rent confirmation email: " + e.getMessage());
        }
    }

}
