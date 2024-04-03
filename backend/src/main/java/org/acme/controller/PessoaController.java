package org.acme.controller;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import org.acme.entity.Pessoa;
import org.acme.service.PessoaService;
import java.util.ArrayList;
import java.util.List;

@Path("/api/pessoas")
public class PessoaController {

    @Inject
    PessoaService pessoaService;

    // Create
    @POST
    @Transactional
    public void addPessoa(Pessoa pessoa){
        pessoaService.addPessoa(pessoa);
    }

    //Find all registers
   @GET
    public List<Pessoa> retrievePessoas(){
       List<Pessoa> pessoas = new ArrayList<>();

       try{
           pessoas = pessoaService.findAllPessoas();
       }catch (Exception e){
           e.printStackTrace();
       }
       return pessoas;
   }

   //Find by ID
    @GET
    @Path("/{id}")
    public Pessoa findPessoaById(@PathParam("id") Long id) {
        Pessoa pessoa = pessoaService.findPessoaById(id);
        if (pessoa == null) {
            throw new NotFoundException("Pessoa com ID " + id + " não encontrada");
        }
        return pessoa;
    }

    //Update
    @PUT
    @Path("/{id}")
    @Transactional
    public void updatePessoa(@PathParam("id") Long id, Pessoa updatedPessoa) {
        // Encontre a pessoa pelo ID
        Pessoa existingPessoa = pessoaService.findPessoaById(id);
        if (existingPessoa == null) {

            throw new NotFoundException("Pessoa com ID " + id + " não encontrada");

        }

        // Atualizando os dados da pessoa
        existingPessoa.setNome(updatedPessoa.getNome());
        existingPessoa.setNumero(updatedPessoa.getNumero());
        existingPessoa.setEmail(updatedPessoa.getEmail());

        // Salvando os dados atualizados
        pessoaService.updatePessoa(existingPessoa);

    }

    //Delete
    @DELETE
    @Path("/{id}")
    @Transactional
    public void deletePessoa(@PathParam("id") Long id) {
        Pessoa existingPessoa = pessoaService.findPessoaById(id);
        if (existingPessoa == null) {
            throw new NotFoundException("Pessoa com ID " + id + " não encontrada");
        }

        pessoaService.deletePessoa(id);

    }



}
