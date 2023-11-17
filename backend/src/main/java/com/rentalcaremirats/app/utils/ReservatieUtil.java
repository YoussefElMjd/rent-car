package com.rentalcaremirats.app.utils;

import java.util.UUID;

public class ReservatieUtil {
    public static String generateReservationNumber() {
        UUID uuid = UUID.randomUUID();
        String reservationNumber = uuid.toString().replace("-", "");
        return reservationNumber.substring(0, 20);
    }
}
