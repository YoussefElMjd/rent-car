package com.rentalcaremirats.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.rentalcaremirats.app.model.Car;

public interface CarDB extends CrudRepository<Car, Integer> {
    public Car findByCarName(String name);
}
