import React from 'react'
import './header.scss'
import Headervideo from '../../asstes/video/video.mp4'

function header() {
    return (
        <section className='video'>
            <video autoPlay loop muted plays-Inline src={Headervideo} className='section__video'>
            </video>
            <section className='section__title'>
                <h1>
                    Мировые промышленные поставки <br /> и технологии в Узбекистане
                </h1>
            </section>
            <section className='section__text'>
                <p>Официальный дистрибьютор ведущих производителей</p>
            </section>
        </section>
    )
}

export default header
