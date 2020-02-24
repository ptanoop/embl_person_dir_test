
# EMBL Test

## Application

( nb : Assuming both maven & angular-cli installed globally)

This is a maven project using spring boot. A front-end application built using angular placed inside the spring application.

So directory structure is 

embl_person_dir_test/src contains the java code.

embl_person_dir_test/src/client/personExpo contains the front-end code.

Running in development mode.

Please navigate to embl_person_dir_test and use following commands

mvn install 

mvn spring-boot:run

This will up java application on localhost:8080

Navigate to localhost:8080, rest api explorer will display available apis.



Please navigate to embl_person_dir_test/src/client/personExpo and use following commands

npm install 

ng serve

This will run angular application on localhost:4200

Navigate to localhost:4200, which will help to interact with applications.

