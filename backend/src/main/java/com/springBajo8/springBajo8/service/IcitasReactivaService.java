package com.springBajo8.springBajo8.service;

import com.springBajo8.springBajo8.domain.citasDTOReactiva;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IcitasReactivaService {
    Mono<citasDTOReactiva> save(citasDTOReactiva citasDTOReactiva);

    Mono<citasDTOReactiva> delete(String id);

    Mono<citasDTOReactiva> update(String id, citasDTOReactiva citasDTOReactiva);

    Flux<citasDTOReactiva> findByIdPaciente(String idPaciente);

    Flux<citasDTOReactiva> findAll();

    Mono<citasDTOReactiva> findById(String id);

    Mono<citasDTOReactiva> cancelarCitaReactiva(String id);

    Flux<citasDTOReactiva> buscarCitaPorFechaYHora(String fechaReservaCita, String horaReservaCita);

    String consultarMedico (String id);
}
