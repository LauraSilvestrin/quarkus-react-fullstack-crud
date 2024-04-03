package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.Pessoa;

@ApplicationScoped
public class PessoaRepository implements PanacheRepository<Pessoa> {
}
