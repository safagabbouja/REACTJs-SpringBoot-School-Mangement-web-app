package com.codeforgeyt.onetomanywebservice.controller;

import com.codeforgeyt.onetomanywebservice.model.Etudiant;
import com.codeforgeyt.onetomanywebservice.model.dto.EtudiantDto;
import com.codeforgeyt.onetomanywebservice.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/etudiants")
public class EtudiantController {

    private final EtudiantService etudiantService ;

    @Autowired
    public EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @PostMapping
    public ResponseEntity<EtudiantDto> addEtudiant(@RequestBody final EtudiantDto cartDto){
        Etudiant cart = etudiantService.addEtudiant(Etudiant.from(cartDto));
        return new ResponseEntity<>(EtudiantDto.from(cart), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EtudiantDto>> getEtudiants(){
        List<Etudiant> etudiants = etudiantService.getEtudiants();
        List<EtudiantDto> etudiantsDto = etudiants.stream().map(EtudiantDto::from).collect(Collectors.toList());
        return new ResponseEntity<>(etudiantsDto, HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<EtudiantDto> getEtudiant(@PathVariable final Long id){
        Etudiant etudiant = etudiantService.getEtudiant(id);
        return new ResponseEntity<>(EtudiantDto.from(etudiant), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<EtudiantDto> deleteEtudiant(@PathVariable final Long id){
        Etudiant etudiant = etudiantService.deleteEtudiant(id);
        return new ResponseEntity<>(EtudiantDto.from(etudiant), HttpStatus.OK);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<EtudiantDto> editEtudiant(@PathVariable final Long id,
                                                @RequestBody final EtudiantDto etudiantDto){
        Etudiant etudiant = etudiantService.editEtudiant(id, Etudiant.from(etudiantDto));
        return new ResponseEntity<>(EtudiantDto.from(etudiant), HttpStatus.OK);
    }

    @PostMapping(value = "{etudiantId}/notes/{noteId}/add")
    public ResponseEntity<EtudiantDto> addNoteToEtudiant(@PathVariable final Long etudiantId,
                                                     @PathVariable final Long noteId){
        Etudiant etudiant = etudiantService.addNoteToEtudiant(etudiantId, noteId);
        return new ResponseEntity<>(EtudiantDto.from(etudiant), HttpStatus.OK);
    }

    @DeleteMapping(value = "{etudiantId}/notes/{noteId}/remove")
    public ResponseEntity<EtudiantDto> removeItemFromCart(@PathVariable final Long etudiantId,
                                                          @PathVariable final Long noteId){
        Etudiant etudiant = etudiantService.removeNoteFromEtudiant(etudiantId, noteId);
        return new ResponseEntity<>(EtudiantDto.from(etudiant), HttpStatus.OK);
    }
}
