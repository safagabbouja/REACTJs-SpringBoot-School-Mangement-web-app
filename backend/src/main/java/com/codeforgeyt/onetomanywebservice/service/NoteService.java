package com.codeforgeyt.onetomanywebservice.service;

import com.codeforgeyt.onetomanywebservice.model.Note;
import com.codeforgeyt.onetomanywebservice.model.exception.ItemNotFoundException;
import com.codeforgeyt.onetomanywebservice.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note addItem(Note note){
        return noteRepository.save(note);
    }

    public List<Note> getNotes(){
        return StreamSupport
                .stream(noteRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Note getNote(Long id){
        return noteRepository.findById(id).orElseThrow(() ->
                new ItemNotFoundException(id));
    }

    public Note deleteNote(Long id){
        Note item = getNote(id);
        noteRepository.delete(item);
        return item;
    }

    @Transactional
    public Note editNote(Long id, Note note){
        Note noteToEdit = getNote(id);
        noteToEdit.setNote(note.getNote());
        return noteToEdit;
    }
}
