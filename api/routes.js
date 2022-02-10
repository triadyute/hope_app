import client from './client';

//Routes
const getAboutUs = client.get('/about-us');
const getWelcome = client.get('/welcome');
const getHome = client.get('/home');
const getGbvAndHumanRights = client.get('/gbv-and-human-rights');
const getKnowYourRights = client.get('/know-your-rights');
const getMythsAboutGbv = client.get('/myths-about-gbv');
const getSafetyPlanning = client.get('/safety-plannings');
const getFormsOfGbv = client.get('/forms-of-gbvs');
const getHowCanIHelp = client.get('/how-can-i-helps');
const getLeavingTheRelationship = client.get('/leaving-the-relationships');
const getKnowOurLaws = client.get('/know-our-laws');
const getResources = client.get('/resources');
const getSexualConsent = client.get('/sexual-consent');
const getCases = client.get('/cases');
const getNationalHotlines = client.get('/emergency-hotlines');

export default {
  getAboutUs,
  getWelcome,
  getHome,
  getGbvAndHumanRights,
  getKnowYourRights,
  getMythsAboutGbv,
  getSafetyPlanning,
  getFormsOfGbv,
  getHowCanIHelp,
  getLeavingTheRelationship,
  getKnowOurLaws,
  getResources,
  getSexualConsent,
  getCases,
  getNationalHotlines,
};
