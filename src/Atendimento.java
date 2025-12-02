package com.everton.clinica.atendimento.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Atendimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String paciente;

    private String descricao;

    private String dataAtendimento;
}

