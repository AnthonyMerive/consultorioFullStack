package com.springBajo8.springBajo8.service.impl;

import com.springBajo8.springBajo8.domain.PadmntoDTOReactive;
import com.springBajo8.springBajo8.repository.IPadmntosReactiveRepository;
import com.springBajo8.springBajo8.service.IPadmntoReactiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class IPadmntoReactiveServiceImpl implements IPadmntoReactiveService {

    @Autowired
    private IPadmntosReactiveRepository repository;

    @Override
    public Mono<PadmntoDTOReactive> save(PadmntoDTOReactive padecimientoDTOReactivo) {
        return repository.save(padecimientoDTOReactivo);
    }

    @Override
    public Mono<PadmntoDTOReactive> delete(String id) {
        return repository
                .findById(id)
                .flatMap(p -> repository.deleteById(p.getId()).thenReturn(p));
    }

    @Override
    public Mono<PadmntoDTOReactive> update(String id, PadmntoDTOReactive padecimientoDTOReactivo) {
        return repository
                .findById(id)
                .flatMap(citasDTOReactiva1 -> {
                    padecimientoDTOReactivo.setId(id);
                    return save(padecimientoDTOReactivo);
                })
                .switchIfEmpty(Mono.empty());
    }

    @Override
    public Flux<PadmntoDTOReactive> findByIdPaciente(String idPaciente) {
        return repository
                .findByIdPaciente(idPaciente);
    }

    @Override
    public Flux<PadmntoDTOReactive> findAll() {
        return repository
                .findAll();
    }

}
