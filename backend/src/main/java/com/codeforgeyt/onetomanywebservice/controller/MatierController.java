package com.codeforgeyt.onetomanywebservice.controller;


import com.codeforgeyt.onetomanywebservice.model.Matiere;
import com.codeforgeyt.onetomanywebservice.repository.MatiereReositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*" )
@RestController
@RequestMapping("/Matiere")
public class MatierController
{
    @Autowired
    private MatiereReositery repo;

    //affichage liste Matiere
    @GetMapping
    public List<Matiere> getMatiereList() {
        List<Matiere> mat = repo.findAll();
        return mat;
    }
    //add Note
    @PostMapping
    public Matiere addMatiere(@RequestBody Matiere newMatiere) {

        return repo.save(newMatiere);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Matiere> updateMatiere(@PathVariable long id, @RequestBody Matiere updatedMatiere) {
        Matiere matiere = repo.findById(id)
                .orElseThrow(() -> new com.codeforgeyt.onetomanywebservice.model.exception.ResourceNotFoundException("matiere not found with id: " + id));
        // Mettez à jour les propriétés de l'actualité avec les nouvelles valeurs
        matiere.setTitre(updatedMatiere.getTitre());
        matiere.setNotes(updatedMatiere.getNotes());
        //Enregistrez les modifications dans la base de données
        repo.save(matiere);
        return ResponseEntity.ok(matiere);
    }
}
