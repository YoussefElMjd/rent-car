package com.rentalcaremirats.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    @ElementCollection
    @CollectionTable(name = "car_images", joinColumns = @JoinColumn(name = "car_id"))
    @Column(name = "image_urls")
    private List<String> imageUrls = new ArrayList<String>();

    @Override
    public String toString() {
        return "Car Name " + carName;
    }
}
