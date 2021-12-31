package com.springBajo8.springBajo8.repository;

import com.springBajo8.springBajo8.domain.PadmntoDTOReactive;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface IPadmntosReactiveRepository extends ReactiveMongoRepository<PadmntoDTOReactive, String> {
    Flux<PadmntoDTOReactive> findByIdPaciente(String idPaciente);
}
