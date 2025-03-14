// Francois YANG - A2
import Pocketbase from 'pocketbase';
const pb = new Pocketbase('https://pb-sae-203-flashcine.fryg.fr:443');


export async function getAllMoviesProjectionDate() {
    const records_film = await pb.collection('film').getFullList({
        sort: 'date_projection',
    });
    return records_film;
}

export async function getAllActivitiesByDate() {
    const records_activites = await pb.collection('activite').getFullList({
        sort: 'date_activite',
    });
    records_activites.img=records_activites.map((record_activite) => {
        record_activite.img = pb.files.getURL(record_activite, record_activite.imgUrl);
       });
    return records_activites;
}

export async function getAllInviteSorted() {
    let records_inviteFull = await pb.collection('invite').getFullList({
        sort: 'nom',
    });
    records_inviteFull.img=records_inviteFull.map((record_inviteFull) => {
     record_inviteFull.img = pb.files.getURL(record_inviteFull, record_inviteFull.imgUrl);
    });
    return records_inviteFull;
}

export async function getFilmByID(id) {
    const record_id = await pb.collection('film').getOne(id, {
        expand: 'invite_lie'
    });
    record_id.img = pb.files.getURL(record_id, record_id.imgUrl);
    return record_id;
}

export async function getAllFilms() {

    const record_idFull = await pb.collection('film').getFullList({
        sort: 'date_film',
    });
    record_idFull.img = pb.files.getURL(record_idFull, record_idFull.imgUrl);
    return record_idFull;
}



export async function getActiviteByID(id) {
    const record_id_activite = await pb.collection('activite').getOne(id,{
        expand: 'invite_lie',
    });
    return record_id_activite;
}

export async function getInviteByID(id) {
    const record_id_invite = await pb.collection('invite').getOne(id);
    return record_id_invite;
}

export async function getFilmByAnimatorID(id) {
    const records_film = await pb.collection('film').getFullList({
        filter: `id="${id}"`,
        expand: 'invite',
    });
    return records_film;
}

export async function getActivitiesByAnimatorID(id) {
    const records_activites = await pb.collection('activite').getFullList({
        filter: `invite_lie.id="${id}"`,
        expand: 'invite_lie',
    });
    return records_activites;
}

export async function getActivitiesByAnimatorName(name) {
    const records_invite = await pb.collection('activite').getFullList({
        filter: `invite_lie.nom="${name}"`,
        expand: 'invite',
    });
    return records_invite;
}

export async function UpdateData(id, data) {
    const collections = ['film', 'activite', 'invite'];
    for (const collection of collections) {
        const record = await pb.collection(collection).update(id, data);
        return record;
    }
}

export async function Userauth(login, password) {
    const authData = await pb.collection('users').authWithPassword(login, password);
    return authData;
}

