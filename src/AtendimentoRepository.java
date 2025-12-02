package com.everton.clinica.atendimento.repository;

import com.seuempresa.clinica.atendimento.model.Atendimento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {
}
