package com.codeforgeyt.onetomanywebservice.model;

import com.codeforgeyt.onetomanywebservice.model.Note;



import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "matiere")
@Entity
public class Matiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;


    @OneToMany(mappedBy ="matiere" )
    private List<Note> Notes;

    public List<Note> getNotes() {
        return Notes;
    }

    public void setNotes(List<Note> notes) {
        Notes = notes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }
}
