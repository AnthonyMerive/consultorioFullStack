package com.springBajo8.springBajo8.service;

import com.springBajo8.springBajo8.domain.PadmntoDTOReactive;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IPadmntoReactiveService {

    Mono<PadmntoDTOReactive> save(PadmntoDTOReactive padmntoDTOReactive);

    Mono<PadmntoDTOReactive> delete(String id);

    Mono<PadmntoDTOReactive> update(String id, PadmntoDTOReactive padmntoDTOReactive);

    Flux<PadmntoDTOReactive> findByIdPaciente(String idPaciente);

    Flux<PadmntoDTOReactive> findAll();

}
