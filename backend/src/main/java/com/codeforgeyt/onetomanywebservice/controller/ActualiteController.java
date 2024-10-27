package com.codeforgeyt.onetomanywebservice.controller;
import com.codeforgeyt.onetomanywebservice.model.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import com.codeforgeyt.onetomanywebservice.model.Actualite;
import com.codeforgeyt.onetomanywebservice.repository.ActualiteRepositery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*" )
@RestController
@RequestMapping("/actualites")
public class ActualiteController {
    @Autowired
    private ActualiteRepositery repo;

    //affichage liste actualites
    @GetMapping
    public List<Actualite> getActualiteList() {
        List<Actualite> act = repo.findAll();
        return act;
    }


    //add acutalite
    @PostMapping
    public Actualite addActualite(@RequestBody Actualite newActualite) {

        return repo.save(newActualite);
    }

    // build get employee by id REST API
    @GetMapping("/act/{id}")
    public ResponseEntity<Actualite> getactById(@PathVariable  long id){
        Actualite act = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("actualite not exist with id:" + id));
        return ResponseEntity.ok(act);
    }

    //mofifier actualite
    @PutMapping("/update/{id}")
    public ResponseEntity<Actualite> updateActualite(@PathVariable long id, @RequestBody Actualite updatedActualite) {
        Actualite actualite = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Actualite not found with id: " + id));
        // Mettez à jour les propriétés de l'actualité avec les nouvelles valeurs
        actualite.setTitre(updatedActualite.getTitre());
        actualite.setContenu(updatedActualite.getContenu());
        actualite.setStatut(updatedActualite.getStatut());
        // Enregistrez les modifications dans la base de données
        repo.save(actualite);
        return ResponseEntity.ok(actualite);
    }
    // build delete actualite REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteActualite(@PathVariable long id){
        Actualite employee = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("actualiter not exist with id: " + id));
        repo.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}






