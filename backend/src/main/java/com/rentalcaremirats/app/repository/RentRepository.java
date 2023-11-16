package com.rentalcaremirats.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rentalcaremirats.app.model.Car;
import com.rentalcaremirats.app.model.Rent;
import java.util.List;

@Repository
public interface RentRepository extends JpaRepository<Rent, Integer> {
    public List<Rent> findAllByPhoneNumber(String number);

    public List<Rent> findAllByCar(Car car);
}
