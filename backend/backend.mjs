// Francois YANG - A2

import Pocketbase from 'pocketbase';
const pb = new Pocketbase('http://127.0.0.1:8090');

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
    return records_activites;
}

export async function getAllInviteSorted() {
    const records_invite = await pb.collection('invite').getFullList({
        sort: 'nom',
    });
    return records_invite;
}

export async function getFilmByID(id) {
    const record_id = await pb.collection('film').getOne(id);
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
    const record_id_activite = await pb.collection('activite').getOne(id);
    return record_id_activite;
}

export async function getInviteByID(id) {
    const record_id_invite = await pb.collection('invite').getOne(id);
    return record_id_invite;
}

export async function getActivitiesByAnimatorID(id) {
    const records_activites = await pb.collection('activite').getFullList({
        filter: `id="${id}"`,
        expand: 'invite',
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