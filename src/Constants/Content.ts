import {
    FrontEnd,
    Designer,
    Holsum,
    Bimbo,
    WbcLogo,
    NwkLogo,
    EhaLogo,
    UserInterface,
    Ux,
    Marketing,
    Will,
    Roman,
    Girish,
} from "../Assets"

export const skills = [
    {
        image: UserInterface,
        title: 'U/I Designer',
        subTitle: 'Things I enjoy designing:',
        description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        skills: 'UX, UI, Web, Mobile, Apps',
        width: 5,
        id: 'ui'

    },
    {
        image: Ux,
        title: 'Front-end Developer',
        subTitle: 'Languages I speak:',
        description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        skills: 'HTML, CSS, Sass, Javascript, React',
        width: 5,
        id: 'ux'

    },
    {
        image: Marketing,
        title: 'Marketing Strategist',
        subTitle: 'Marketing applications I enjoy:',
        description: 'I enjoy valuable content that allows the user to get what they need quickly.',
        skills: 'SEM, SMM, PPC, Content',
        width: 4,
        id: 'marketing'

    },
]

export const projects = [
    {
        logo: EhaLogo,
        background: '#fcfffc',
        name: 'Eagle Harbor Advisors',
        url: 'https://eagleharboradvisors.com',
        description: 'Eagle Harbor Advisors is a wealth management firm offering services for business owners and individuals in the United States.',
        id: 'eha',
        width: 11
    },
    {
        logo: Holsum,
        background: '#ED7423',
        name: 'Holsum',
        url: 'https://www.holsumpr.com/',
        description: 'Holsumpr is one of the biggest bread manufacturers in Puerto Rico, they also offer several tasty treats.',
        id: 'holsum',
        width: 15,
    },
    {
        logo: Bimbo,
        background: '#006AA8',
        name: 'Bimbo',
        url: 'https://bimbo-web.ue.r.appspot.com',
        description: 'This is a project still in progress, Bimbopr is an undisputed leader in the baking industry.',
        id: 'bimbo',
        width: 15
    },
    {
        logo: NwkLogo,
        background: '#dadfe4',
        name: 'KnowWeKnowTv',
        url: 'https://nowweknowtv.com',
        description: 'NowWeKnowTv, hosted by actor Steve Guttenberg educates audiences with remarkable insight into industries and businesses.',
        id: 'nwk',
        width: 15
    },
    {
        logo: WbcLogo,
        background: '#37393D',
        name: 'WBC Productions',
        url: 'https://wbcproductions.com',
        description: 'WBC Productions is innovating in the sphere of television production while traveling to some of the most unique settings and exotic locations in the world.',
        id: 'wbc',
        width: 15
    },

]

export const quotes = [
    {
        author: 'Roman C.',
        title: 'Sr. Software Engineer, StoneX',
        image: Roman,
        quote: `"Glen's a clear communicator with the tenacity and confidence to really dig in to tricky development scenarios and the collaborative friction that's needed to produce excellent work."`
    },
    {
        author: 'Girish N.',
        title: 'Director of Investment Strategies, Eagle Harbor Advisors',
        image: Girish,
        quote: `"Glen was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish."`
    },
    {
        author: 'Will B.',
        title: 'Founder, WBC Productions',
        image: Will,
        quote: `"I have worked with Glen for over 3 years, he's pragmatic and delivers high quality web design and always gives great feedback on how to improve my social media marketing."`
    },
]