package org.acme.entity;

import jakarta.persistence.Entity;
import jdk.jfr.DataAmount;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Pessoa {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private Integer idade;
    private String email;
}
