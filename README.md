# book-frontend

git clone --recursive https://github.com/rikszabo/book-frontend.git

Book-app

Ez egy könyv nyilvántartó teszt alkalmazás 

Az alkalmazáshoz használt fontosabb technológiák: Angular 8, Node.JS, Firebase, Express.JS, MongoDB, JWT, Bootstrap, Sass, Docker.
A feladatban a Firebase és MongoDB is szerepel, így a könyvek tárolása Firebase Realtime Database segítségével történik, 
még a User authentikáció, regisztráció, illetve User adatainak tárolása MongoDB segítségével. Ugyan azzal az e-mail címmel nem lehet többször regisztrálni. A projektben használt összes képanyag free to use. 


Az alkalmazás indítása:

Elsőként a /book-app és a /book-backend mappában is ki kell adnunk az npm install parancsot!

-Docker

Az alkalmazás a Dockerben történő indításra van írva, komponensenként történő indításhoz változtatni kell pár dolgon(lent leírva).
Dockerben történő futtatás elött szükséges, hogy a Docker asztali verzója telepítve legyen, el legyen indítva, be legyünk jelentkezve.
A /book-frontend mappában adjuk ki a docker-compose up parancsot. Kis időt vehet igénybe mire mindent elindít.
A frontendet a böngészőben localhost:4200 cím alatt érjük el. Szükséges lehet a "docker pull mongo" parancs kiadása compose elött, ha nem tudunk kapcsolódni.

-Komponensenként (docker mentes, alternatív futtatási verzió)

Komponensenként történő futtatáshoz lokálisan kell letölteni egy MongoDB Server-t,
amihez ezután meg kell adni egy tetszőleges mappa elérési útvonalát, amely tárolja az adatbázis adatait. Ezt terminálban adjuk meg, nyomjunk entert.
Példa: /Users/felhasznalo/Desktop/tesztApp/database/mongodb/bin/mongod --dbpath=/Users/felhasznalo/Desktop/tesztApp/database/mongodb-data

Ezután a backend mappában található app.js fáljban le kell cserélni az adott sorokat: 
mongoose.connect('mongodb://mongo:27017/myData',  {
  useNewUrlParser: true
});

Erre:
mongoose.connect('mongodb://127.0.0.1:27017');

Egy másik terminálban miután benavigáltunk a /backend mappába, adjuk ki az npm start parancsot.

Majd utolsó lépésként egy harmadik terminálban a /book-app mappába navigálás után adjuk ki az ng serve parancsot
