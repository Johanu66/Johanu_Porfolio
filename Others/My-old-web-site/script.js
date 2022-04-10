AOS.init();
/***********Loader************/
window.addEventListener("load", () => { document.getElementById('loader').classList.add('hidden'); });

/***********Main Header*********/

let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};
function mainHeaderObserverFunction(entries, observer) {
    if(entries[0].isIntersecting){
        document.getElementById('mainHeader').classList.remove("mainHeaderVisible");
        document.getElementById('mainHeader').classList.add("mainHeaderInvisible");
        document.getElementById('mainFistScrollingList').classList.remove('show');
    }
    else{
        document.getElementById('mainHeader').classList.remove("mainHeaderInvisible");
        document.getElementById('mainHeader').classList.add("mainHeaderVisible");
        document.getElementById('fistScrollingList').classList.remove('show');
    }
}
let mainHeaderObserver = new IntersectionObserver(mainHeaderObserverFunction, observerConfig);
let firstSectionHeader = document.getElementById('firstSectionHeader');
mainHeaderObserver.observe(firstSectionHeader);

/*******************************/



/*********First Section********/

var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});




/*****************************/

/**************Services********/

let listServices = document.getElementById("listServices");
let services = [
    {
        type: "Développement De Site Web",
        image: "WebSitedevelopment.jpg",
        description: ""
    },
    {
        type: "Maintenance de site web",
        image: "WebSiteMaintenance.jpg",
        description: ""
    },
    {
        type: "Coaching en développement web",
        image: "WebCoaching.jpg",
        description: ""
    },
    {
        type: "Réalisation de logo",
        image: "LogoDesign.jpg",
        description: ""
    },
    {
        type: "Réalisation d'affiche",
        image: "PosterDesign.jpg",
        description: ""
    },
    {
        type: "Création de chatbot Telegram",
        image: "ChatbotTelegram.jpg",
        description: ""
    },
    {
        type: "Création de chatbot Whatsapp",
        image: "ChatbotWhatsapp.jpg",
        description: ""
    },
    {
        type: "Création de chatbot Messenger",
        image: "ChatbotMessenger.jpg",
        description: ""
    }
];
for(let i=0; i < services.length; i++){
    listServices.innerHTML += '<div class="col-10 col-lg-3 p-2 m-4 d-flex flex-column justify-content-between">'+
            '<div><img src="Images/'+services[i].image+'" alt="Image liée à ce service" class="bg-info"></div>'+
            '<h4>'+services[i].type+'</h4>'+
        '</div>';
}


/******************************/

/**************Knowledge********/
if(window.innerWidth > 992){
    knowledgePerPage = 12;
}
else{
    knowledgePerPage = 6;
}
let listKnowledge = document.getElementById("listKnowledge");
let knowledge = [
    {
        type: "JavaScript",
        image: "Javascript.jpg",
        description: "",
        masteryPercentage: 0.90
    },
    {
        type: "HTML",
        image: "HTML.jpg",
        description: "",
        masteryPercentage: 0.95
    },
    {
        type: "CSS",
        image: "CSS.png",
        description: "",
        masteryPercentage: 0.90
    },
    {
        type: "PHP",
        image: "PHP.png",
        description: "",
        masteryPercentage: 0.80
    },
    {
        type: "Java Entreprise Edition",
        image: "JavaEE.png",
        description: "",
        masteryPercentage: 0.60
    },
    {
        type: "Java",
        image: "Java.jpg",
        description: "",
        masteryPercentage: 0.60
    },
    {
        type: "MySQL",
        image: "MySQL.png",
        description: "",
        masteryPercentage: 0.80
    },
    {
        type: "C++",
        image: "C++.png",
        description: "",
        masteryPercentage: 0.85
    },
    {
        type: "Langage C",
        image: "C.jpg",
        description: "",
        masteryPercentage: 0.85
    },
    {
        type: "Moodle",
        image: "Moodle.png",
        description: "",
        masteryPercentage: 0.60
    },
    {
        type: "Adobe PhotoShop",
        image: "Photoshop.jpg",
        description: "",
        masteryPercentage: 0.70
    },
    {
        type: "Adobe XD",
        image: "AdobeXD.png",
        description: "",
        masteryPercentage: 0.90
    },
    {
        type: "Adobe Illustrator",
        image: "AdobeIllustrator.png",
        description: "",
        masteryPercentage: 0.85
    },
    {
        type: "Blender",
        image: "Blender.png",
        description: "",
        masteryPercentage: 0.70
    },
    {
        type: "UML2",
        image: "UML.png",
        description: "",
        masteryPercentage: 0.75
    },
    {
        type: "Bootstrap",
        image: "Bootstrap.png",
        description: "",
        masteryPercentage: 0.90
    },
    {
        type: "Merise",
        image: "Merise.png",
        description: "",
        masteryPercentage: 0.85
    },
    {
        type: "Oracle",
        image: "Oracle.png",
        description: "",
        masteryPercentage: 0.75
    }
];
let pagination = document.getElementById('pagination');
for(let i=0, a=0; i < knowledge.length; i++, a++){
    listKnowledge.innerHTML += '<div id="listKnowledge'+a+'" class="row d-flex justify-content-around listKnowledgeBlock slide nextSlide"></div>';
    pagination.innerHTML += '<span id="pagination-'+a+'" onclick="changeSlide('+a+')"><a href="#listKnowledge">'+(a+1)+'</a></span>';
    let listKnowledgeBlock = document.getElementById("listKnowledge"+a);
    for(let j=0; j < knowledgePerPage && i < knowledge.length; j++, i++){
        listKnowledgeBlock.innerHTML += '<div class="col-10 col-lg-3 p-2 m-4 d-flex flex-column justify-content-between pb-5">'+
                '<div><img src="Images/'+knowledge[i].image+'" alt="Image liée à ce service" class="bg-info"></div>'+
                '<h4>'+knowledge[i].type+'</h4>'+
                '<div class="progressBar" id="progressBar'+i+'" for="'+knowledge[i].masteryPercentage+'"></div>'+
            '</div>';
    }
}

//Pour le défilement parfait des slides
let currentSlide = 0;
document.getElementById('listKnowledge'+currentSlide).classList.add('activeSlide');
document.getElementById('listKnowledge'+currentSlide).classList.remove('nextSlide');
document.getElementById('listKnowledge'+currentSlide).classList.add('comeFromNext');
document.getElementById('pagination-'+currentSlide).style.backgroundColor = "cornflowerblue";

let changeSlide = (slidePage) => {
    document.getElementById('listKnowledge'+currentSlide).classList.remove('comeFromNext');
    document.getElementById('listKnowledge'+currentSlide).classList.remove('comeFromPrev');
    document.getElementById('listKnowledge'+currentSlide).classList.remove('activeSlide');

    document.getElementById('listKnowledge'+slidePage).classList.add('activeSlide');

    document.getElementById('pagination-'+slidePage).style.backgroundColor = "cornflowerblue";
    document.getElementById('pagination-'+currentSlide).style.backgroundColor = "#eee";
    
    if(currentSlide < slidePage){
        document.getElementById('listKnowledge'+currentSlide).classList.add('prevSlide');

        document.getElementById('listKnowledge'+slidePage).classList.add('comeFromNext');
        document.getElementById('listKnowledge'+slidePage).classList.remove('nextSlide');
    }
    else if(currentSlide > slidePage){
        document.getElementById('listKnowledge'+currentSlide).classList.add('nextSlide');

        document.getElementById('listKnowledge'+slidePage).classList.add('comeFromPrev');
        document.getElementById('listKnowledge'+slidePage).classList.remove('prevSlide');
    }
    currentSlide = slidePage;
};

/******************************/

/**************Projets********/

let listProjects = document.getElementById("listProjects");
let projects = [
    {
        type: "ECCéleste",
        image: "ECCéleste.png",
        url: "https://ecceleste.000webhostapp.com/",
        description: "ECCéleste est un site, qui fournir tous les programmes de tous les cultes de l'église du christianisme céleste."
    },
    {
        type: "Matrice",
        image: "Matrice.png",
        url: "https://johanu66.github.io/Matrice/",
        description: "Matrice est un site qui permet de définir une matrice et d'éffectuer toute sorte d'opérations sur cette dernière."
    },
    {
        type: "Mon Curriculum vitae",
        image: "CV.png",
        url: "https://johanu66.github.io/Mon-CV/",
        description: "Mon Curriculum vitae est un site propre à moi qui me permet de présenter mon CV à tout le monde."
    },
    {
        type: "Résolveur d'équation",
        image: "Resolveur.png",
        url: "https://johanu66.github.io/Equation-resolveur/",
        description: "Résolveur d'équation est un site qui résout les équations de degré 2 au plus."
    },
    {
        type: "Semi documentation JS",
        image: "DocumentationJS.png",
        url: "https://codepen.io/Johanu/full/VwPrZJN",
        description: "Ce projet est une simulation d'une documentation de JavaScript."
    },
    {
        type: "Joli formulaire",
        image: "Formulaire.png",
        url: "https://codepen.io/Johanu/full/MWJEPqo",
        description: "Ce projet présente un exemplaire de formulaire."
    },
    {
        type: "Cœur",
        image: "BatementDuCoeur.png",
        url: "https://codepen.io/Johanu/full/xxqvopr",
        description: "Cœur est un site qui montre une simulation d'un cœur qui bat."
    }
];
for(let i=0; i < projects.length; i++){
    listProjects.innerHTML += '<div class="col-10 col-lg-3 p-2 m-4 d-flex flex-column justify-content-between"><a href="'+projects[i].url+'" target="_blank">'+
            '<div><img src="Images/'+projects[i].image+'"></img></div>'+
            '<h4>'+projects[i].type+'</h4>'+
            '<div class="text-justify">'+projects[i].description+'</div>'+
        '</a></div>';
}


/******************************/

/***********About me***********/



/******************************/
/*************For activate the current section link***********/
let observerSectionConfig = {
    root: null,
    rootMargin: "0px 0px -"+((window.innerHeight) / 2)+"px 0px",
    threshold: 0.09
};

let SectionObserverFunction = (entries) => {
    entries.forEach(enty => {
        if(enty.isIntersecting){
            let tab = document.getElementsByClassName(enty.target.id+"Nav");
            for(let element of tab){
                element.classList.add("active");
            }
        }
        else{
            let tab = document.getElementsByClassName(enty.target.id+"Nav");
            for(let element of tab){
                element.classList.remove("active");
            }
        }
    });
};
let SectionObserver = new IntersectionObserver(SectionObserverFunction, observerSectionConfig);
let section = document.querySelectorAll(".section");
section.forEach(element => {
    SectionObserver.observe(element);
});
/******************************************************/

/*******Animation of Knowlegdes Mastery Percentage*******/
//ProgressJS
let animeBar = (idElement, percentage) => {
    let bar = new ProgressBar.Line('#'+idElement, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'coral',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
        style: {
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
        },
        autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
    });

    bar.animate(percentage);
};


//IntersectionObserver
let animeBarIntersector = {
    root: null,
    rootMargin: "0px",
    threshold: 1
};
let launchAnimationBar = (entries) => {
    entries.forEach(element => {
        if(element.intersectionRatio > 0){
            animeBar(element.target.id, element.target.getAttribute("for"));
            animeBarObserver.unobserve(element.target);
        }
    });
};
let animeBarObserver = new IntersectionObserver( launchAnimationBar, animeBarIntersector);
let progressBar = document.querySelectorAll(".progressBar");
progressBar.forEach(element => {
    animeBarObserver.observe(element);
});

/*************************************/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
});


let contactsFixe = document.getElementById('contactsFixe');
contactsFixe.style.top = ((window.innerHeight-contactsFixe.offsetHeight)/2)+"px";
