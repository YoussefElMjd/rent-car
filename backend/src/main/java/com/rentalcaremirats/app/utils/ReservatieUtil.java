package com.rentalcaremirats.app.utils;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

import com.rentalcaremirats.app.model.Rent;

public class ReservatieUtil {
    public static String generateReservationNumber() {
        UUID uuid = UUID.randomUUID();
        String reservationNumber = uuid.toString().replace("-", "").toUpperCase();
        return reservationNumber.substring(0, 10);
    }

    public static double calcualteTotalPrice(LocalDate start, LocalDate end, double rentPrice) {
        long diffInDays = start.until(end, ChronoUnit.DAYS);
        return rentPrice * diffInDays;
    }
}
