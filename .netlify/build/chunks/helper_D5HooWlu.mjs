import Pocketbase from 'pocketbase';

// Francois YANG - A2
const pb = new Pocketbase('http://127.0.0.1:433');

async function getAllActivitiesByDate() {
    const records_activites = await pb.collection('activite').getFullList({
        sort: 'date_activite',
    });
    records_activites.img=records_activites.map((record_activite) => {
        record_activite.img = pb.files.getURL(record_activite, record_activite.imgUrl);
       });
    return records_activites;
}

async function getAllInviteSorted() {
    let records_inviteFull = await pb.collection('invite').getFullList({
        sort: 'nom',
    });
    records_inviteFull.img=records_inviteFull.map((record_inviteFull) => {
     record_inviteFull.img = pb.files.getURL(record_inviteFull, record_inviteFull.imgUrl);
    });
    return records_inviteFull;
}

async function getFilmByID(id) {
    const record_id = await pb.collection('film').getOne(id, {
        expand: 'invite_lie'
    });
    record_id.img = pb.files.getURL(record_id, record_id.imgUrl);
    return record_id;
}

async function getAllFilms() {

    const record_idFull = await pb.collection('film').getFullList({
        sort: 'date_film',
    });
    record_idFull.img = pb.files.getURL(record_idFull, record_idFull.imgUrl);
    return record_idFull;
}



async function getActiviteByID(id) {
    const record_id_activite = await pb.collection('activite').getOne(id,{
        expand: 'invite_lie',
    });
    return record_id_activite;
}

async function getInviteByID(id) {
    const record_id_invite = await pb.collection('invite').getOne(id);
    return record_id_invite;
}

function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      
      timeZone: "Europe/Paris",
    };
  
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);
  
    return formattedDate;
  }

export { getAllActivitiesByDate as a, getInviteByID as b, getAllInviteSorted as c, getFilmByID as d, getAllFilms as e, formatDate as f, getActiviteByID as g };
