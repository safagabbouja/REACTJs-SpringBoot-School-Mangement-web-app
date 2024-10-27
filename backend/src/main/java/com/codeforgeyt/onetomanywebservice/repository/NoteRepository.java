package com.codeforgeyt.onetomanywebservice.repository;
import com.codeforgeyt.onetomanywebservice.model.Note;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {
}
