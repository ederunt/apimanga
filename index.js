const express = require('express');
const cors = require('cors');
const app  = express();

app.use(cors());

app.use(express.json());

const mangas =[
    {
        id: 1,
        title: "Nana",
        author: "Yazawa, Ai",
        synopsis: "Nana Komatsu is a naive, unmotivated girl who spends her high school days chasing one crush after the other. Despite continually facing failure in her quest for love, her spirits have never dampened. At the age of 20, she finds herself on a train to Tokyo with hopes of reuniting with her current boyfriend. Nana Osaki, on the other hand, is feisty and prideful. After joining a local band during her high school days, she falls in love with music and one of the band members. However, when faced with the choice between her relationship and her musical career, she chooses the latter and separates from her boyfriend. On her 20th birthday, she boards the same train to Tokyo, like her namesake, where she aims to become a top vocalist. The two girls with the same name but very different aspirations find themselves sitting together on their journey to the city, and, as fate would have it, eventually share the same apartment. A deep and unique bond is then forged, where they will support each other in this saga of love, music, friendship, and heartbreak.",
        rank: 38,
        score: 8.81,
        volumes: 21,
        //image: "https://cdn.myanimelist.net/images/manga/1/262324.jpg",
        image: "https://cdn.myanimelist.net/images/manga/1/262324l.jpg",
        price: "$8.99",
        type: "Manga",
        chapters: 78,
        status: "Finished",
        published:"Nov 2, 2002 to Apr 3, 2008",
        Peso:"24kg",
        anio:2008,
        Genero:"Superhéroe",
        ISBN: 9788419518750,
        Idioma: "Japonés"
    },
    {
        id: 2,
        title: "Paradise Kiss",
        author: "Yazawa, Ai",
        synopsis: "After two eccentrically dressed individuals ambush her, high school student Yukari Hayasaka promptly passes out due to shock. She soon awakens to find herself surrounded by even more strangely dressed people in the basement studio of Paradise Kiss—a fashion design club composed of four students from Yazawa School for the Arts. Although it seems like Yukari has been kidnapped, the older students explain that they only approached her to see if she would model their collection for an upcoming fashion show. Being a senior with a busy schedule, Yukari furiously rejects the group's offer. But when she drops her student passbook in her haste to leave, the ringleader of the group, George Koizumi, picks it up and uses it as a means to coerce Yukari into considering their request. After hearing about the other members' unbridled ambition, Yukari is inspired to reevaluate her own circumstances and eventually agrees to help them out. Now as Paradise Kiss' model, Yukari must learn to balance her new responsibilities with her hectic personal life. However, the more time she spends with George and the rest of the team, the harder it becomes for her to avoid getting swept up in the glitz and glamor of the fashion world.",
        rank: 323,
        score: 8.29,
        volumes: 5,
        //image: "https://cdn.myanimelist.net/images/manga/1/262323.jpg",
        image: "https://cdn.myanimelist.net/images/manga/1/262323l.jpg",
        price: "$9.99",
        type: "Manga",
        chapters: 12,
        status: "Finished",
        published:"Jun 29, 1997 to Jun 3, 2000",
        Peso:"23kg",
        anio:2000,
        Genero:"Superhéroe",
        ISBN: 9788419518752,
        Idioma: "Japonés"
    },
    {
        id: 3,
        title: "Ouran Koukou Host Club",
        author: "Hatori, Bisco",
        synopsis: "At Ouran High School, an academy where only the children of the rich and powerful attend, there exists a club consisting of the most elite of the student body: the legendary Host Club. Within the club's room, six beautiful, bored boys spend their time entertaining equally beautiful and bored girls. Haruhi Fujioka, a poor scholarship student, has no interest in the Host Club—until she breaks a valuable vase in their clubroom. After being mistaken for a boy, Haruhi is forced by Kyouya Ootori to work for the Host Club to repay her debt. Tamaki Suou, the princely leader of the club, eagerly takes her under his wing to teach her the ways of the host. Things, however, are never quite so simple with the Host Club around. Even the most mundane events can turn into huge spectacles with the likes of prankster twins Hikaru and Kaoru Hitachiin, stoic Takashi Morinozuka, and sweet Mitsukuni Hunny Haninozuka. The crazy adventures of the Host Club are just beginning, and Haruhi must learn how to survive in the glitzy world of the hosts. [Written by MAL Rewrite] Note: The final volume contains a special bonus chapter where the group travels to Spain.",
        rank: 148,
        score: 8.5,
        volumes: 18,
        image: "https://cdn.myanimelist.net/images/manga/3/267782l.jpg",
        //image: "https://cdn.myanimelist.net/images/manga/3/267782.webp",
        price: "$10.99",
        type: "Manga",
        chapters: 44,
        status: "Finished",
        published:"Ene 29, 1997 to Jun 3, 2009",
         Peso:"23kg",
        anio:2009,
        Genero:"Superhéroe",
        ISBN: 9788419518756,
        Idioma: "Japonés"
    },
    {
        id: 4,
        title: "Lovely★Complex",
        author: "Tsugumi Ohba",
        synopsis: "When the taller than average 172 cm Risa Koizumi learns that her occasional nemesis, the shorter than average 156 cm Atsushi Ootani, is romantically interested in her friend, she decides to team up with him. After all, she also has feelings for his friend. Unluckily, however, their respective crushes fall for each other instead. Determined to find new love after their recent misfortunes, the pair decide to cheer each other on while maintaining their usual dynamic of constant bickering. Although they continually deny it, Risa and Ootani are more similar than they like to admit: they both have unusual heights, failing grades, identical tastes in food, and a tendency to act extremely childish. Together, they inspire laughter among their peers as a so-called comedic duo.",
        rank: 293,
        score: 8.32,
        volumes: 17,
        //image: "https://cdn.myanimelist.net/images/manga/1/209659.jpg",
        image: "https://cdn.myanimelist.net/images/manga/1/209659l.jpg",
        price: "$7.99",
        type: "Manga",
        chapters: 65,
        status: "Finished",
        published:"Ene 29, 1997 to Jun 3, 2003",
          Peso:"20kg",
        anio:2003,
        Genero:"Superhéroe",
        ISBN: 9788419518123,
        Idioma: "Japonés"
    },
    {
        id: 5,
        title: "666 Satan",
        author: "Kishimoto, Seishi",
        synopsis: "In the not too distant future, mankind battles over O-Parts, relics from an ancient civilization. It takes a special kind of person to unlock the full potential of these remnants from the past, and a unique breed of humans known as O.P.T.s (or O-Parts Tacticians) become a force to be reckoned with. Unfortunately, O-Parts can be used for good or evil purposes. Jio is a young boy with a tragic past who only trusts one thing in the world: money. Little does he suspect that he is actually a very powerful O.P.T., and inside him sleeps a demon of incredible ferocity. He meets up with a girl named Ruby, and together they decide to embark on a dangerous quest to discover as many O-Parts as they can. Will Jio help Ruby realize her dream of becoming a world famous treasure hunter? More importantly, will Ruby help Jio realize his dream of--world domination?! (Source: Viz Media) Included one-shots: Volume 6: Trigger",
        rank: 3651,
        score: 7.42,
        volumes: 19,
        //image: "https://cdn.myanimelist.net/images/manga/3/267783.jpg",
        image: "https://cdn.myanimelist.net/images/manga/3/267783l.jpg",
        price: "$8.49",
        type: "Manga",
        chapters: 52,
        status: "Finished",
        published:"Jun 29, 1997 to Jun 3, 2005",
        Peso:"25kg",
        anio:2005,
        Genero:"Superhéroe",
        ISBN: 9788419511111,
        Idioma: "Japonés"
    },
    {
        id: 6,
        title: "Pita-Ten",
        author: "Tite Kubo",
        synopsis: "Kotarou Higuchi is a sixth-grade student who not only has to work hard to get into a good middle school, but he also has to deal with the responsibilities that come with living in an apartment all by himself. One day, while leaving for school, he is greeted with a surprise: an unfamiliar, older girl in a frilly black dress is waiting by his front door, asking to be friends with him! Despite his attempts at ignoring her, the strange girl determinedly follows Kotarou all the way to school and back. Giving in, Kotarou finds out that the strange girl's name is Misha and that she is his new neighbor, supposedly from Heaven to work on becoming a full-time angel. What will become of Kotarou and his life with this clingy angel?",
        rank: 4553,
        score: 7.33,
        volumes: 8,
        //image: "https://cdn.myanimelist.net/images/manga/3/191236.jpg",
        image: "https://cdn.myanimelist.net/images/manga/3/191236l.jpg",
        price: "$9.49",
        type: "Manga",
        chapters: 50,
        status: "Finished",
        published:"May 29, 1997 to Jun 3, 1999",
        Peso:"15kg",
        anio:1999,
        Genero:"Superhéroe",
        ISBN: 9788419518333,
        Idioma: "Japonés"
    },
    {
        id: 7,
        title: "Di Gi Charat: Koushiki Comic Anthology",
        author: "Kohei Horikoshi",
        synopsis: "On planet Di Gi Charat, little Digiko was a pampered princess. Now living on Earth, the green-haired moppet is working for minimum wage at a hobby shop in Japan. Who ever said it was easy being cute? Based on the popular anime series, Di Gi Charat also features bratty Usada, shy boy Minagawa, and Digiko's wacky companions Puchiko and Gemo! (Source: VIZ Media)",
        rank: 16332,
        score: 6.53,
        volumes: 4,
        //image: "https://cdn.myanimelist.net/images/manga/1/267784.jpg",
        image: "https://cdn.myanimelist.net/images/manga/1/267784l.jpg",
        price: "$8.99",
        type: "Manga",
        chapters: 20,
        status: "Finished",
        published:"Dec 29, 1997 to Jun 3, 2001",
        Peso: "15kg",
        anio: 2001,
        Genero: "Superhéroe",
        ISBN: 9788419518987,
        Idioma: "Japonés"
    },
    {
        id: 8,
        title: "Kamichama Karin",
        author: "Koge-Donbo",
        synopsis: "After the death of her beloved cat, orphan Karin Hanazono is left lonesome and empty. As she does not have any friends and performs poorly at school, her mean-spirited aunt resents having to take care of her. Wholeheartedly believing that God will grant her salvation one day, she tightly holds onto the ring that her mother passed down to her. Seeking solace by spending time at her late cat's grave, Karin unexpectedly meets a boy named Kazune Kuujou, who claims he is looking for God. However, Kazune calls her weak for relying on her deceased cat for comfort. Angered by the insult, Karin subconsciously channels energy into her mother's ring. Soon enough, she begins to excel at school and classmates compliment her for the first time. Unbeknownst to her, the ring has bestowed her godly powers. The revelation of the ring's transcendent strength catches the eyes of not only Kazune but also more sinister figures who wish to take advantage of Karin for nefarious purposes. Karin must now use her newly acquired gift to fight back against these malicious forces, unaware of the truth behind her heritage and the existence of others with similar abilities. [Written by MAL Rewrite]",
        rank: 3059,
        score: 7.49,
        volumes: 7,
        //image: "https://cdn.myanimelist.net/images/manga/2/267789.jpg",
        image: "https://cdn.myanimelist.net/images/manga/2/267789l.jpg",
        price: "$10.49",
        type: "Manga",
         chapters: 33,
        status: "Finished",
        published:"Dec 29, 1997 to Jun 3, 2000",
        Peso: "15kg",
        anio: 2001,
        Genero: "Superhéroe",
        ISBN: 9788419518487,
        Idioma: "Japonés"
    },
    {
        id: 9,
        title: "Kamikaze Kaitou Jeanne",
        author: "Tanemura, Arina",
        synopsis: "It's nearly the end of the century, and one girl has been breaking the news: Kaitou Jeanne, a phantom thief supposedly sent by God, has been stealing paintings all around the city. Her real identity is Maron Kusakabe, a 16-year-old rhythmic gymnastics enthusiast and student at Momokuri Academy— something unknown to all, even her best friend Miyako Toudaiji, who is in charge of the police chase for Jeanne. Hidden inside the paintings Maron steals are demons sent by the demon lord, who plans to weaken God's power by having his minions possess human hearts. Assisted by the minor angel Finn Fish, it is up to Maron as the reincarnation of Jeanne d'Arc to assume her alter ego, hunt down the cursed paintings, and seal the vile demons away. However, the tough job of balancing this duty with her lonesome high school life only proves more challenging when a mysterious new phantom thief makes his appearance—Kaitou Sinbad. [Written by MAL Rewrite]",
        rank: 1432,
        score: 7.78,
        volumes: 7,
        //image: "https://cdn.myanimelist.net/images/manga/2/267790.jpg",
        image: "https://cdn.myanimelist.net/images/manga/2/267790l.jpg",
        price: "$7.99",
        type: "Manga",
        chapters: 33,
        status: "Finished",
        published:"Dec 29, 1997 to Jun 3, 2000",
        Peso: "22kg",
        anio: 2000,
        Genero: "Superhéroe",
        ISBN: 9788419518888,
        Idioma: "Japonés"
    },
    {
        id: 10,
        title: "Shinshi Doumei Cross",
        author: "Tanemura, Arina",
        synopsis: "Gon Freecss se embarca en un viaje para convertirse en un cazador profesional y encontrar a su padre desaparecido.",
        rank: 1192,
        score: 7.84,
        volumes: 11,
        //image: "https://cdn.myanimelist.net/images/manga/3/257940.jpg",
        image: "https://cdn.myanimelist.net/images/manga/3/257940l.jpg",
        price: "$9.99",
        type: "Manga",
         chapters: 59,
        status: "Finished",
        published:"Aug 3, 2004 to Jun 3, 2008",
        Peso: "18kg",
        anio: 2008,
        Genero: "Superhéroe",
        ISBN: 9788419518845,
        Idioma: "Japonés"
    },
     {
        id: 11,
        title: "+Anima",
        author: "Mukai, Natsumi",
        synopsis: "Anima are rare and mysterious human-like beings capable of transforming their body into the form of an animal, but they are ostracised from society by humans. Cooro, a young orphaned +Anima with the abilities of a crow, struggles to find acceptance and belonging. Having been found on a church altar as a baby, he knows little of his origins and his species despite the poor reputation they receive. Thus, he resolves to search for more of his kind. Together with his newfound companions—Husky, Nana Alba, and Senri—Cooro embarks on a quest to meet other outcasts and discover their place in an unforgiving world. As the bond between the four +Anima grows to become unbreakable throughout their travels, a sense of adventure seems everlasting. However, the group soon realizes that finding somewhere to belong might prove more challenging than previously anticipated. +Anima follows the hardships and adventures of Cooro and his friends as they learn of the difficulties and prejudice experienced by their kin.",
        rank: 2052,
        score: 7.65,
        volumes: 10,
        //image: "https://cdn.myanimelist.net/images/manga/3/257940.jpg",
        image: "https://cdn.myanimelist.net/images/manga/3/257940l.jpg",
        price: "$9.50",
        type: "Manga",
        chapters: 59,
        status: "Finished",
        published:"Dec 27, 1999 to Jan 27, 2005",
        Peso: "18kg",
        anio: 2005,
        Genero: "Superhéroe",
        ISBN: 9788419518658,
        Idioma: "Japonés"
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Manga API');
});

app.get('/mangas', (req, res) => {
    res.send(mangas);
});

app.get('/mangas/:id', (req, res) => {
    const manga = mangas.find(m => m.id === parseInt(req.params.id));
    if (!manga) return res.status(404).send('No se encuentra el manga.');
    res.send(manga);
});

app.post('/mangas', (req, res) => {
    const manga = {
        id: mangas.length + 1,
        title: req.body.title,  
        author: req.body.author,
        synopsis: req.body.synopsis,
        rank: req.body.rank,
        score: req.body.score,
        volumes: req.body.volumes,
        image: req.body.image,
        price: req.body.price    
    };
    mangas.push(manga);
    res.send(manga);
});

app.delete('/mangas/:id', (req, res) => {
    const manga = mangas.find(m => m.id === parseInt(req.params.id));
    if (!manga) return res.status(404).send('No se encuentra el manga.');
    
    const index = mangas.indexOf(manga);
    mangas.splice(index, 1);
    
    res.send(manga);
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Escuchando el puerto:  ${PORT}`);
});



