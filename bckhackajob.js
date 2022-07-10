function run(film, character) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	
    //url = 'https://challenges.hackajob.co/swapi/api/people/';
    url = 'https://swapi.dev/api/people';

    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    data = request.responseText

    let cabecalho = JSON.parse(data);
    result = [];
    result = cabecalho.results;

    //corpo.innerHTML = '';
    filmsAndCharacters = null

    let controle = 0;
    let entrada = 0;
    characterFilms = '';
    ordenaFilm = [];

    if(cabecalho.next!=''){
        url = cabecalho.next;
        entrar = 0;
    }
    else{
        entrar = 1;
    }

    while (controle==0){
        for (var j = 0; j < result.length; j++) {              
                
            if (character == result[j].name){
                characterFilms=(result[j].name);
                characterFilms+=(': ');

                for(var f = 0; f < result[j].films.length; f++){
                    urlf = result[j].films[f];
                    reqFilm = new XMLHttpRequest();
                    reqFilm.open("GET", urlf, false)
                    reqFilm.send()
                    dataFilm = reqFilm.responseText

                    cabecFilm = JSON.parse(dataFilm);

                    
                    ordenaFilm.push(cabecFilm.title); 

                }
                //numberOfFilms = result[j].films.length;

                filmOrdenado = ordenaFilm.sort();

                for(var f = 0; f < filmOrdenado.length; f++){
                    if(f>0){
                        characterFilms+=', ';
                    }
                    characterFilms+=filmOrdenado[f];
                }
                
                controle=1;
                break;
            }
        }   
        if (entrar==0 && controle==0){
            entrada++;
            request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            data = request.responseText

            cabecalho = JSON.parse(data);
            //let corpo = document.getElementById("main");
            result = [];
            result = cabecalho.results;

            if(cabecalho.next!=null){
                url = cabecalho.next;
                entrar = 0;
            }
            else{
                entrar = 1;
            }
        }
        else{
            controle=1;
        }
    }
    if(controle == 0){
        characterFilms = character;
        characterFilms+=': none';
    }


    //Parte 2 Film / Elenco

    //url = 'https://challenges.hackajob.co/swapi/api/films/';
    url = 'https://swapi.dev/api/films';

    request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    data = request.responseText

    cabecalho = JSON.parse(data);
    result = [];
    result = cabecalho.results;

    controle = 0;
    entrada = 0;
    filmCharacters = '';
    ordenaCharacters = [];

    if(cabecalho.next!=''){
        url = cabecalho.next;
        entrar = 0;
    }
    else{
        entrar = 1;
    }

    //while (controle==0){
        for (var j = 0; j < result.length; j++) {              
                
            if (film == result[j].title){
                filmCharacters=(result[j].title);
                filmCharacters+=(': ');

                for(var f = 0; f < result[j].characters.length; f++){
                    urlf = result[j].characters[f];
                    reqFilm = new XMLHttpRequest();
                    reqFilm.open("GET", urlf, false)
                    reqFilm.send()
                    dataFilm = reqFilm.responseText

                    cabecFilm = JSON.parse(dataFilm);

                    
                    ordenaCharacters.push(cabecFilm.name); 

                }
                //numberOfFilms = result[j].films.length;

                charactersOrdenado = ordenaCharacters.sort();

                for(var f = 0; f < charactersOrdenado.length; f++){
                    if(f>0){
                        filmCharacters+=', ';
                    }
                    filmCharacters+=charactersOrdenado[f];
                    
                }
                
                controle=1;
                break;
            }
        }   
        /*if (entrar==0 && controle==0){
            entrada++;
            request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            data = request.responseText

            cabecalho = JSON.parse(data);
            //let corpo = document.getElementById("main");
            result = [];
            result = cabecalho.results;

            if(cabecalho.next!=null){
                url = cabecalho.next;
                entrar = 0;
            }
            else{
                entrar = 1;
            }
        }
        else{
            controle=1;
        }*/
    //}
    if(controle == 0){
        filmCharacters = 'none';
        characterFilms+=': none';
    }

    filmsAndCharacters = filmCharacters + '; ' + characterFilms;
    
	return filmsAndCharacters;
}

retorno = run("A New Hope", "Raymus Antilles")
teste = "A New Hope: Beru Whitesun lars, Biggs Darklighter, C-3PO, Chewbacca, Darth Vader, Greedo, Han Solo, Jabba Desilijic Tiure, Jek Tono Porkins, Leia Organa, Luke Skywalker, Obi-Wan Kenobi, Owen Lars, R2-D2, R5-D4, Raymus Antilles, Wedge Antilles, Wilhuff Tarkin; Raymus Antilles: A New Hope, Revenge of the Sith"
if (teste == retorno){
    teste = ok;
}
retorno = run("The Force Awakens", "Poggle the Lesser")
teste = "The Force Awakens: Ackbar, BB8, Captain Phasma, Chewbacca, Finn, Han Solo, Leia Organa, Luke Skywalker, Poe Dameron, R2-D2, Rey; Poggle the Lesser: Attack of the Clones, Revenge of the Sith"
if (teste == retorno){
    teste = ok;
}
retorno = run("The Force Awakens", "Walter White")
teste = "The Force Awakens: Ackbar, BB8, Captain Phasma, Chewbacca, Finn, Han Solo, Leia Organa, Luke Skywalker, Poe Dameron, R2-D2, Rey; Walter White: none"
if (teste == retorno){
    teste = ok;
}
retorno = run("A New Hope", "Tion Medon")
teste = ""
if (teste == retorno){
    teste = ok;
}
retorno = run("Revenge of the Sith", "Luke Skywalker")
teste = ""
if (teste == retorno){
    teste = ok;
}

