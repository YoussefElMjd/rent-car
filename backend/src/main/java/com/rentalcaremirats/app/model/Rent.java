package com.rentalcaremirats.app.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import groovyjarjarantlr4.v4.runtime.misc.NotNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Rent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Need to provide a phone number")
    private String phoneNumber;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "car_id", unique = true, nullable = false)
    private Car car;
    @NotNull()
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDateRent;
    @NotNull()
    @Future
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDateRent;

}
