package com.springBajo8.springBajo8.web;

import com.springBajo8.springBajo8.domain.PadmntoDTOReactive;
import com.springBajo8.springBajo8.service.IPadmntoReactiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins ="https://consultorio-react-spring.web.app/")
public class PadmntoReactiveResource {

    @Autowired
    private IPadmntoReactiveService service;

    @PostMapping("/padecimientos")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<PadmntoDTOReactive> save(@RequestBody PadmntoDTOReactive padecimiento) {
        return service.save(padecimiento);
    }

    @DeleteMapping("/padecimientos/{id}")
    private Mono<ResponseEntity<PadmntoDTOReactive>> delete(@PathVariable("id") String id) {
        return service.delete(id)
                .flatMap(padecimiento -> Mono.just(ResponseEntity.ok(padecimiento)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @PutMapping("/padecimientos/{id}")
    private Mono<ResponseEntity<PadmntoDTOReactive>> update(@PathVariable("id") String id, @RequestBody PadmntoDTOReactive padecimiento) {
        return service.update(id, padecimiento)
                .flatMap(padecimiento1 -> Mono.just(ResponseEntity.ok(padecimiento1)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @GetMapping("/padecimientos/{idPaciente}")
    private Flux<PadmntoDTOReactive> findByidPaciente(@PathVariable("idPaciente") String idPaciente) {
        return service.findByIdPaciente(idPaciente);
    }

    @GetMapping("/padecimientos")
    private Flux<PadmntoDTOReactive> findAll() {
        return service.findAll();
    }
}
