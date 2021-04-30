import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'

import "../css/desktop.css"

const Desktop = () => {
    const [dateFormat, setDateFormat] = useState()
    const Data = useSelector(state => state.banner)
   

    useEffect(() => {
        const d = new Date()
        var latestDate = d.toISOString().slice(0, 10)
        setDateFormat(latestDate)
    }, [])

    const bannerData = Data.filter((item) => { if (item.bannerStartDate <= dateFormat && item.bannerLastDate >= dateFormat) return item })
    const bannerComingData = Data.filter((item) => { if (item.bannerStartDate > dateFormat && item.bannerLastDate >= dateFormat) return item })

    return (
        <div>
            <Carousel>
                {
                    bannerData.map((item) => {
                        return (
                            <Carousel.Item interval={500}>
                                <a href={item.site} target="_blank"> <img
                                    className="d-block w-100"
                                    src={item.bannerImgSRC}
                                    className="imgData"
                                /></a>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>

    )
}

export default Desktop
