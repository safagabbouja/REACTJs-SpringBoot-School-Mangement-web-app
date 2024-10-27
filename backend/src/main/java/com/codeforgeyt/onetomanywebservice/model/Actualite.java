package com.codeforgeyt.onetomanywebservice.model;


import jakarta.persistence.*;

//import java.util.List;


@Table(name = "actualite")
@Entity
public class Actualite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* public Matiere getMatieres() {
        return matieres;
    }
   public void setMatieres(Matiere matieres) {
        this.matieres = matieres;
    }
    //@ManyToOne()
   // private Matiere matieres;*/
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

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public Boolean getStatut() {
        return statut;
    }
    public void setStatut(Boolean statut) {
        this.statut = statut;
    }
    private String titre;
    private String contenu;
    private Boolean statut;

}

