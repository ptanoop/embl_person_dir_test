package com.embl.persondir.service;

import com.embl.persondir.domain.Person;
import com.embl.persondir.repo.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class LoadDataSet {

    private static Logger logger = LoggerFactory.getLogger(LoadDataSet.class);

    LoadDataSet(@Autowired PersonRepository personRepository){
        try {
            File namesfile = ResourceUtils.getFile("classpath:dataset/names.txt");
            File hobbiesfile = ResourceUtils.getFile("classpath:dataset/hobbies.txt");
            File colorsfile = ResourceUtils.getFile("classpath:dataset/colors.txt");

            List<String> namesList = Files.readAllLines(namesfile.toPath());
            List<String> hobbiesList = Files.readAllLines(hobbiesfile.toPath());
            List<String> colorsList = Files.readAllLines(colorsfile.toPath());

            logger.info("names list size = " + namesList.size());
            logger.info("names list size = " + hobbiesList.size());
            logger.info("names list size = " + colorsList.size());


            for (int i = 0; i < 50; i++) {
                Person p = new Person();
                String[] splitName = namesList.get(i).split(" ");
                p.setFirst_name(splitName[0]);
                p.setLast_name(splitName[1]);
                p.setFavourite_color(colorsList.get(i));

                Random r = new Random();
                int result = 20 + r.nextInt(80);
                p.setAge(result);
                result = r.nextInt(5);
                List<String> hList = new ArrayList<String>();
                for(int j = 0; j < result; j++) {
                    int h = r.nextInt(50);
                    hList.add(hobbiesList.get(h));
                }
                p.setHobby(hList);
                personRepository.save(p);
            }
        }
        catch(IOException ex){
            ex.printStackTrace();
        }
    }

}
