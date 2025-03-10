import { atom } from "recoil";
import { profileImg } from "../assets/asset";
import axios from "axios";


// ----- SPLINE -----
export const splineAtom = atom({
    key: 'splineAtom',
    default: {URL: 'https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode'}
})

export const projectAtom = atom({
    key: 'projectTitleAtom',
    default: [
        {
            projectId: 1,
            projectTitle: 'Text To Image Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode/textToImageGenerator.git',
            webLink: 'https://drive.google.com/file/d/1r7qk0R7CIsnJEhEQxFIC8WepA8PfzDGC/view?usp=sharing',
            image: profileImg.txtToImage
        },
        {
            projectId: 2,
            projectTitle: 'Portfolio',
            gitHubLink: 'https://github.com/pankaj-gitcode/myPortfolio.git',
            webLink: 'https://pankajaditya.netlify.app/',
            image: profileImg.img1
        },
        {
            projectId: 3,
            projectTitle: 'Password Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode/passwordGenerator.git',
            webLink: 'https://password-generator-vitereact.netlify.app/',
            image: profileImg.passGen
        },
        // {
        //     projectId: 4,
        //     projectTitle: 'Food Delivery WebApp',
        //     gitHubLink: 'https://github.com/pankaj-gitcode2',
        //     webLink: 'https://google.com2',
        //     image: profileImg.thumbnail2
        // },
        
        // {
        //     projectId: 5,
        //     projectTitle: 'AI Code Editor',
        //     gitHubLink: 'https://github.com/pankaj-gitcode5',
        //     webLink: 'https://google.com5',
        //     image: profileImg.img1
        // }
    ]
})

//------ VIDEO -----
export const videoAtom = atom({
    key: 'videoAtom',
    default: profileImg.contact_robot
})

// ------ EXIT -----
export const exitAtom = atom({
    key: 'exitAtom',
    default: false
})

// ----- ENV -----
export const envAtom =atom({
    key: 'envAtom',
    defaut: import.meta.env.Access_KEY
}) 