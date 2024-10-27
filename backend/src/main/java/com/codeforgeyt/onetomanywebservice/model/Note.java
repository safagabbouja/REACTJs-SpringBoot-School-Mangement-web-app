package com.codeforgeyt.onetomanywebservice.model;

import com.codeforgeyt.onetomanywebservice.model.dto.NoteDto;


import jakarta.persistence.*;

@Entity
@Table(name = "lastnote")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    private String note;



    @ManyToOne
    private Etudiant etudiant;

    public static Note from(NoteDto noteDto){
     Note note = new Note();
       note.setNote(noteDto.getNote());
        return note;
    }
    @ManyToOne(cascade = CascadeType.ALL  )
    @JoinColumn(name="matiere_id")
    private Matiere matiere;

    public Matiere getMatiere() {
        return matiere;
    }

    public void setMatiere(Matiere matiere) {
        this.matiere = matiere;
    }
}
