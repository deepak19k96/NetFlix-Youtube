import React from 'react'
import './Homescreen.css';
import Nav  from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import rowsList from '../rowsList';
export const Homescreen = () => {

    return (
        <div className='Home'>      
            <Nav></Nav>
            <Banner></Banner>
             { 
                rowsList.map(row  => { 
                  return <Row isLargeRow={row.isLargeRow} title={row.title} FetchUrl={row.FetchUrl}></Row>
                }) 
            }
        </div>
    )
}
