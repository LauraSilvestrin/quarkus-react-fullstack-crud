package org.acme.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.AssertTrue;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import org.acme.entity.Pessoa;
import org.acme.repository.PessoaRepository;

import java.util.List;

@ApplicationScoped
public class PessoaService {

    @Inject
    PessoaRepository pessoaRepository;

    //Create
    public void addPessoa(Pessoa pessoa){

        pessoaRepository.persist(pessoa);
    }

    //Find all registers
    public List<Pessoa> findAllPessoas(){
        return pessoaRepository.findAll().list();
    }

    //Find by ID
    public Pessoa findPessoaById(Long id) {
        return pessoaRepository.findByIdOptional(id).orElse(null);
    }

    //Insira aqui um metodo pra encontrar pelo nome e/ou email

    //Update
    @Transactional
    public void updatePessoa(Pessoa updatedPessoa) {
        // Encontre a Pessoa existente pelo ID
        Pessoa existingPessoa = findPessoaById(updatedPessoa.getId());
        if (existingPessoa == null) {
            throw new NotFoundException("Pessoa com ID " + updatedPessoa.getId() + " não encontrada");
        }

        // Atualize as propriedades da Pessoa existente
        existingPessoa.setNome(updatedPessoa.getNome());
        existingPessoa.setIdade(updatedPessoa.getIdade());
        existingPessoa.setEmail(updatedPessoa.getEmail());
    }

    //Delete
    @Transactional
    public void deletePessoa(Long id) {
        // Encontre a Pessoa existente pelo ID
        Pessoa existingPessoa = findPessoaById(id);
        if (existingPessoa == null) {
            throw new NotFoundException("Pessoa com ID " + id + " não encontrada");
        }

        // Exclua a Pessoa
        pessoaRepository.delete(existingPessoa);
    }
}
