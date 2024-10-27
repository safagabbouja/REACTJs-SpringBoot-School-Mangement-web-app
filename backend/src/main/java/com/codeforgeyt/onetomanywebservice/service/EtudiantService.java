package com.codeforgeyt.onetomanywebservice.service;

import com.codeforgeyt.onetomanywebservice.model.Etudiant;
import com.codeforgeyt.onetomanywebservice.model.Note;
import com.codeforgeyt.onetomanywebservice.model.exception.EtudiantNotFoundException;
import com.codeforgeyt.onetomanywebservice.model.exception.NoteIsAlreadyAssignedException;
import com.codeforgeyt.onetomanywebservice.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class EtudiantService {

    private final EtudiantRepository etudiantRepository;
    private final NoteService noteService;

    @Autowired
    public EtudiantService(EtudiantRepository etudiantRepository, NoteService noteService) {
        this.etudiantRepository = etudiantRepository;
        this.noteService = noteService;
    }

    public Etudiant addEtudiant(Etudiant etudiant){
        return etudiantRepository.save(etudiant);
    }

    public List<Etudiant> getEtudiants(){
        return StreamSupport
                .stream(etudiantRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Etudiant getEtudiant(Long id){
        return etudiantRepository.findById(id).orElseThrow(() ->
                new EtudiantNotFoundException(id));
    }

    public Etudiant deleteEtudiant(Long id){
        Etudiant etudiant = getEtudiant(id);
        etudiantRepository.delete(etudiant);
        return etudiant;
    }

    @Transactional
    public Etudiant editEtudiant(Long id, Etudiant etudiant){
        Etudiant etudiantToEdit = getEtudiant(id);
        etudiantToEdit.setName(etudiant.getName());
        return etudiantToEdit;
    }

    @Transactional
    public Etudiant addNoteToEtudiant(Long etudianId, Long noteId){
        Etudiant etudiant = getEtudiant(etudianId);
        Note note = noteService.getNote(noteId);
        if(Objects.nonNull(note.getEtudiant())){
            throw new NoteIsAlreadyAssignedException(noteId,
                    note.getEtudiant().getId());
        }
        etudiant.addNote(note);
        note.setEtudiant(etudiant);
        return etudiant;
    }

    @Transactional
    public Etudiant removeNoteFromEtudiant(Long etudianId, Long noteId){
        Etudiant etudiant = getEtudiant(etudianId);
        Note item = noteService.getNote(noteId);
        etudiant.removeNote(item);
        return etudiant;
    }
}
