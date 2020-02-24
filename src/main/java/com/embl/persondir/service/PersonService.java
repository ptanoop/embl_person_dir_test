package com.embl.persondir.service;

import com.embl.persondir.domain.Person;
import com.embl.persondir.repo.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public void savePerson(Person person){
        personRepository.save(person);
    }

}
