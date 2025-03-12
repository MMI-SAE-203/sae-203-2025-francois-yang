//trie des films par projection
import { getAllMoviesProjectionDate  } from "./backend.mjs";

try{
    const films = await getAllMoviesProjectionDate();
    console.log(films);
} catch (e) {
    console.error(e);
}


//trie des activités par date
import { getAllActivitiesByDate  } from "./backend.mjs";
try{
    const activities = await getAllActivitiesByDate();
    console.log(activities);
} catch (e) {
    console.error(e);
}


//trie des invités par nom
import { getAllInviteSorted  } from "./backend.mjs";
try{
    const invites = await getAllInviteSorted();
    console.log(invites);
} catch (e) {
    console.error(e);
}


//trie des films par ID
import { getFilmByID  } from "./backend.mjs";
try{
    const film = await getFilmByID('kjux4bm8w8zg2a0');
    console.log(film);
} catch (e) {
    console.error(e);
}

import { getAllFilms } from "./backend.mjs";
try {
    const films = await getAllFilms();
    console.log(films);
} catch (e) {
    console.error(e);
}

//trie des activités par ID
import { getActiviteByID  } from "./backend.mjs";
try{
    const activite = await getActiviteByID('in6jglubthijhj9') ;
    console.log(activite);
}
catch (e) {
    console.error(e);
}


//trie des invités par ID
import { getInviteByID  } from "./backend.mjs";
try{
    const invite = await getInviteByID('2498s0ax1x1apx3') ;
    console.log(invite);
}
catch (e) {
    console.error(e);
}


//trie des activités par animateur ID
import { getActivitiesByAnimatorID } from "./backend.mjs";
try {
    const animateur = await getActivitiesByAnimatorID('oh0lsq9k1ga7ba1');
    console.log(animateur);
} catch (e) {
    console.error(e);
}


import { getActivitiesByAnimatorName } from "./backend.mjs";
try {
    const animateur = await getActivitiesByAnimatorName('Lefevre');
    console.log(animateur);
} catch (e) {
    console.error(e);
}

import { UpdateData } from "./backend.mjs";

const ID = 'kjux4bm8w8zg2a0';
const data = {
    date_projection: '2025-07-09 18:00:00',
};

try {
    const update_data = await UpdateData(ID, data);
    console.log('Données mises à jour avec succès', update_data);
} catch (e) {
    console.error('Erreur lors de la mise à jour des données:', e);
}

import { Userauth } from "./backend.mjs";
    try {
        await Userauth('tom.hanks@gmail.com', 'tomhanks1234');
        console.log('Authentication succeeded');
    } catch (error) {
        console.error('Authentication failed:', error);
    }