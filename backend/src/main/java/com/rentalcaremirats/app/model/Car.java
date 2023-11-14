package com.rentalcaremirats.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // @NotBlank(message = "Car name is required")
    private String carName;
    // @NotBlank(message = "Car power is required")
    private int carPower;
    // @NotBlank(message = "Rent price is required")
    private double rentPrice;
    // @NotBlank(message = "Car deposit is required")
    private double carDeposit;
    @OneToOne(mappedBy = "car")
    private Rent rent;

}
