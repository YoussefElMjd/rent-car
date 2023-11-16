package com.rentalcaremirats.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
    @Column(unique = true)
    private String carName;
    // @NotBlank(message = "Car power is required")
    private int carPower;
    // @NotBlank(message = "Rent price is required")
    private double rentPrice;
    // @NotBlank(message = "Car deposit is required")
    private double carDeposit;
    @JsonBackReference
    @OneToMany(mappedBy = "car")
    private List<Rent> rents = new ArrayList<Rent>();

    @Override
    public String toString() {
        return "Car Name " + carName;
    }
}
