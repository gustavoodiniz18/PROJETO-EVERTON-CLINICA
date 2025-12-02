package com.seuempresa.clinica.atendimento.controller;

import com.seuempresa.clinica.atendimento.dto.AtendimentoRequestDTO;
import com.seuempresa.clinica.atendimento.dto.AtendimentoResponseDTO;
import com.seuempresa.clinica.atendimento.service.AtendimentoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/atendimentos")
public class AtendimentoController {

    private final AtendimentoService service;

    @PostMapping
    public AtendimentoResponseDTO criar(@RequestBody AtendimentoRequestDTO dto) {
        return service.salvar(dto);
    }

    @GetMapping
    public List<AtendimentoResponseDTO> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public AtendimentoResponseDTO buscar(@PathVariable Long id) {
        return service.buscarPorId(id);
    }
}
