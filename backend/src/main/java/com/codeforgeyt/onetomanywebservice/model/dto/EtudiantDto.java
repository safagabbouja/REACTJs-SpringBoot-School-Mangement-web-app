package com.codeforgeyt.onetomanywebservice.model.dto;

import com.codeforgeyt.onetomanywebservice.model.Etudiant;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class EtudiantDto {
    private Long id;
    private String name;
    private List<NoteDto> NotesDto = new ArrayList<>();

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

    public List<NoteDto> getNotesDto() {
        return NotesDto;
    }

    public void setNotesDto(List<NoteDto> notesDto) {
        NotesDto = notesDto;
    }

    public static EtudiantDto from(Etudiant etudiant){
        EtudiantDto etudiantDto = new EtudiantDto();
        etudiantDto.setId(etudiant.getId());
        etudiantDto.setName(etudiant.getName());
        etudiantDto.setNotesDto(etudiant.getNotes().stream().map(NoteDto::from).collect(Collectors.toList()));
        return etudiantDto;
    }
}
