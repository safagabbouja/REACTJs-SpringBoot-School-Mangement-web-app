package com.codeforgeyt.onetomanywebservice.model;

import com.codeforgeyt.onetomanywebservice.model.dto.EtudiantDto;


import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;



@Entity
@Table(name = "lastetudiant")
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(name = "etud_id")
    private List<Note> notes = new ArrayList<>();


//pour ajouter un item a la collection de items
    public void addNote(Note note){
        notes.add(note);
    }

//pour supprimer un un note a la collection de notes

    public void removeNote(Note note){
        notes.remove(note);
    }

    public static Etudiant from(EtudiantDto cartDto){
       Etudiant etudiant = new Etudiant();
        etudiant.setName(cartDto.getName());
        return etudiant;
    }
}
