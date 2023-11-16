package com.rentalcaremirats.app.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import groovyjarjarantlr4.v4.runtime.misc.NotNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    @NotBlank(message = "Need to provide a email")
    private String email;
    @NotBlank(message = "Need to provide a phone number")
    private String phoneNumber;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "car")
    private Car car;
    @NotNull()
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate startDateRent;
    @NotNull()
    @Future
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate endDateRent;

}
