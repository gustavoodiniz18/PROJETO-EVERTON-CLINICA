package com.seuempresa.clinica;

import com.seuempresa.clinica.atendimento.dto.AtendimentoRequestDTO;
import com.seuempresa.clinica.atendimento.service.AtendimentoService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AtendimentoServiceTest {

    @Autowired
    private AtendimentoService service;

    @Test
    void deveSalvarAtendimento() {
        AtendimentoRequestDTO dto = new AtendimentoRequestDTO();
        dto.setPaciente("João");
        dto.setDescricao("Consulta de rotina");
        dto.setDataAtendimento("01/12/2025");

        var result = service.salvar(dto);

        Assertions.assertNotNull(result.getId());
    }
}
