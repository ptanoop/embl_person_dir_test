package com.embl.persondir.repo;

import com.embl.persondir.domain.Person;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9876"})
public interface PersonRepository extends PagingAndSortingRepository<Person, Integer> {


}
