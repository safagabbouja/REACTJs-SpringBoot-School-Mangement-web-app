package com.codeforgeyt.onetomanywebservice.repository;

import com.codeforgeyt.onetomanywebservice.model.Etudiant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends CrudRepository<Etudiant, Long> {
}
