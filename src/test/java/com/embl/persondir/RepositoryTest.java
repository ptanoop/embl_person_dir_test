package com.embl.persondir;

import com.embl.persondir.domain.Person;
import com.embl.persondir.repo.PersonRepository;
import com.embl.persondir.service.LoadDataSet;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.Optional;


@RunWith(SpringRunner.class)
@DataJpaTest
public class RepositoryTest {

    private static Logger logger = LoggerFactory.getLogger(RepositoryTest.class);

    @Autowired
    private PersonRepository personRepository;

    @Test
    public void addAndRetrievePersonData(){
        Person person = new Person();
        person.setFirst_name("ABCD");
        person.setLast_name("CDEF");
        person.setAge(20);
        person.setFavourite_color("Blue,#fffccc");
        ArrayList<String> hobbyList = new ArrayList<String>();
        hobbyList.add("Playing");
        hobbyList.add("Eating");
        person.setHobby(hobbyList);

        Person p = personRepository.save(person);

        Assert.notNull(p, "Person created");

        Optional<Person> pp = personRepository.findById(1);
        if(pp.isPresent()){
            logger.info("Person is present");
        }
        else{
            logger.info("Person is not present");
        }
    }




}

