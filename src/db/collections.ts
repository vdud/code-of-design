import db from './mongo';

export const dataPosts = db.collection('dataPosts');
export const subscriber = db.collection('subscriber');
