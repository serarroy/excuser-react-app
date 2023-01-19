import React, {useState} from 'react'
import { useEffect } from 'react';
import categories from '../categories';
import '../stylesheets/MainPage.css'

function MainPage() {

    const [excuse, setExcuse] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState(`https://excuser-three.vercel.app/v1/excuse/`);



    const searchExcuse = (category) => {
        setUrl(url + `${category}`);
        console.log(url);
        setCategory('');
        fetch(url).then(res => res.json()).then(data => {
            setExcuse(data[0].excuse);
            console.log('Excuse: ' + excuse);
        })
    }

    useEffect(() => {
        searchExcuse(category);
    }, [category]);

    return (
        <div className='main-page'>
            <div className='categories-container'>
                {   
                    categories.map((category) => {
                        return <button className='category-btn' key={category.id} onClick={() => setCategory(category.text.toLowerCase())}>{category.text}</button>
                    })
                }
            </div>
            <div className='excuse-container'>
                <p>{excuse}</p>
            </div>
        </div>
    )
}

export default MainPage;
