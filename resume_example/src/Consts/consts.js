import pic1 from '../Components/ProjectCard/pictures/MembershipProject/1.png'
import pic2 from '../Components/ProjectCard/pictures/MembershipProject/2.png'
import pic3 from '../Components/ProjectCard/pictures/MembershipProject/3.png'
import pic4 from '../Components/ProjectCard/pictures/MembershipProject/4.png'
import valopic1 from '../Components/ProjectCard/pictures/ValorantPage/valo1.png'
import valopic2 from '../Components/ProjectCard/pictures/ValorantPage/valo2.png'
import valopic3 from '../Components/ProjectCard/pictures/ValorantPage/valo3.png'
import valopic4 from '../Components/ProjectCard/pictures/ValorantPage/valo4.png'

export const mainPageRoute = '/';
export const aboutMeRoute = '/about';
export const myProjectsRoute = '/projects';
export const contactMeRoute = '/contact';



export const weatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=54.69&longitude=25.28&timezone=Europe/Vilnius&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max';

export const sliderDataMembProject = [
    {
        image:pic1
    },
    {
        image:pic2
    },
    {
        image:pic3
    },
    {
        image:pic4
    },
]

export const sliderDataValo = [
    {
        image: valopic1
    },
    {
        image: valopic2
    },
    {
        image: valopic3
    },
    {
        image:valopic4
    },
]

export const projects = [
    {
        title: 'Membership Management Page',
        image: pic1,
        subtitle: `It's a fully functional membership management site, where you can add, remove different kinds of memberships also, a user registration + sorting.`,
        picturesArr: sliderDataMembProject
    },
    {
        title: 'Valorant page',
        image: valopic1,
        subtitle: `Fun little project about the FPS game, called "Valorant".`,
        picturesArr: sliderDataValo
    },
]