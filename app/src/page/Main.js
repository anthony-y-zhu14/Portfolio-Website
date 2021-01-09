import React from 'react'
import Header from '../component/Header'
import FrontPage from './FrontPage'
import ProjectPage from './ProjectPage'
import BioPage from './BioPage'
import ContactPage from './ContactPage'
import { Container } from '@material-ui/core';

export default function Main(){    

    const [ frontPage, setFrontPage ] = React.useState(true);
    const [ projectPage, setPorjectPage ] = React.useState(false);
    const [ bioPage, setBioPage ] = React.useState(false);
    const [ contactInfoPage, setcontactInfoPage ] = React.useState(false);  

    const renderFrontPage = () => {
        if(!frontPage) setFrontPage(true)
    };

    const renderProjectPage = () =>{setPorjectPage(true);
        if (contactInfoPage) setcontactInfoPage(false);
        if (bioPage) setBioPage(false);}

    const renderBioPage = () =>{setBioPage(true);
        if (frontPage) setFrontPage(false);
        if (projectPage) setPorjectPage(false);
        if (contactInfoPage) setcontactInfoPage(false);}

    const renderContactInfoPage = () =>{setcontactInfoPage(true);
        if (projectPage) setPorjectPage(false);
        if (bioPage) setBioPage(false);}

    const render = {
        renderFront: renderFrontPage, 
        renderContact: renderContactInfoPage, 
        renderProject: renderProjectPage, 
        renderBio: renderBioPage, 
    }

    const page = () => {        
        if (projectPage) return <ProjectPage render={render} />
        if (bioPage) return <BioPage render={render}/>
        if (contactInfoPage) return <ContactPage render={render} />
    }       

    return (
        
        <Container>    
            {frontPage && <FrontPage render={render} /> }
            {!frontPage && 
                <div>
                    <Header render={render}/>
                    {page()} 
                </div>
            }         
        </Container>
    )
}