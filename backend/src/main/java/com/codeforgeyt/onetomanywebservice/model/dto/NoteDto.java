package com.codeforgeyt.onetomanywebservice.model.dto;

import com.codeforgeyt.onetomanywebservice.model.Note;

import java.util.Objects;


public class NoteDto {
    private Long id;
    private String note;
    //private PlainEtudiantDto plainEtudiantDto;

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

   /* public PlainEtudiantDto getPlainEtudiantDto() {
        return plainEtudiantDto;
    }

    public void setPlainEtudiantDto(PlainEtudiantDto plainEtudiantDto) {
        this.plainEtudiantDto = plainEtudiantDto;
    } */

    public static NoteDto from(Note note){
        NoteDto noteDto = new NoteDto();
        noteDto.setId(note.getId());
        noteDto.setNote(note.getNote());
        /*if(Objects.nonNull(note.getEtudiant())){
            noteDto.setPlainEtudiantDto(PlainEtudiantDto.from(note.getEtudiant()));
        }*/
        return noteDto;
    }
}
