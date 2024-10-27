package com.codeforgeyt.onetomanywebservice.controller;

import com.codeforgeyt.onetomanywebservice.model.Note;
import com.codeforgeyt.onetomanywebservice.model.dto.NoteDto;
import com.codeforgeyt.onetomanywebservice.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<NoteDto> addNote(@RequestBody final NoteDto noteDto){
        Note note = noteService.addItem(Note.from(noteDto));
        return new ResponseEntity<>(NoteDto.from(note), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<NoteDto>> getNotes(){
        List<Note> notes = noteService.getNotes();
        List<NoteDto> notesDto = notes.stream().map(NoteDto::from).collect(Collectors.toList());
        return new ResponseEntity<>(notesDto, HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<NoteDto> getNote(@PathVariable final Long id){
        Note note = noteService.getNote(id);
        return new ResponseEntity<>(NoteDto.from(note), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<NoteDto> deleteNote(@PathVariable final Long id){
        Note note = noteService.deleteNote(id);
        return new ResponseEntity<>(NoteDto.from(note), HttpStatus.OK);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<NoteDto> editItem(@PathVariable final Long id,
                                            @RequestBody final NoteDto noteDto){
        Note editedNote = noteService.editNote(id, Note.from(noteDto));
        return new ResponseEntity<>(NoteDto.from(editedNote), HttpStatus.OK);
    }
}
