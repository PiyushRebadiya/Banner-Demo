import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { removeBanner, updateBanner } from '../redux/action/BannerAction';
import "../css/bannerData.css"

const BannerData = () => {
    const [dateFormat, setDateFormat] = useState()

    const Data = useSelector(state => state.banner)

    let history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        const d = new Date()
        var latestDate = d.toISOString().slice(0, 10)
        setDateFormat(latestDate)
    }, [])

    const bannerData = Data.filter((item) => { if (item.bannerStartDate <= dateFormat && item.bannerLastDate >= dateFormat) return item })
    const bannerComingData = Data.filter((item) => { if (item.bannerStartDate > dateFormat && item.bannerLastDate >= dateFormat) return item })
    const bannerExpireData = Data.filter((item) => { if (item.bannerStartDate < dateFormat && item.bannerLastDate < dateFormat) return item })

    const editHandler = (data) => {
        dispatch(updateBanner(data))
        history.push("/update")
    }

    const deleteHandler = (id) => {
        dispatch(removeBanner(id))
    }

    return (
        <div className="row">

            {
                bannerData.length > 0 && (
                    <Table data={bannerData} title={'Current Plan'} type={'current_plan'} editHandler={editHandler} deleteHandler={deleteHandler} />
                )
            }

            {
                bannerComingData.length > 0 && (
                    <Table data={bannerComingData} title={'Up-comming Plan'} type={'up_comming_plan'} editHandler={editHandler} deleteHandler={deleteHandler} />
                )
            }

            {
                bannerExpireData.length > 0 && (
                    <Table data={bannerExpireData} title={'Exipiry Plan'} type={'exipiry_plan'} editHandler={editHandler} deleteHandler={deleteHandler} />
                )
            }

        </div>

    )
}

const Table = ({ data, title, type, deleteHandler, editHandler }) => {
    console.log('type', type);
    return (
        <div className={classNames("col-md-12", { 'firstCol': type === 'current_plan', 'secondCol': type === 'up_comming_plan', 'thirdCol': type === 'exipiry_plan' })}>
            <div >
                <h1 className={classNames({ 'currantH1first': type === 'current_plan', 'currantH1second': type === 'up_comming_plan', 'currantH1third': type === 'exipiry_plan' })}>{title}</h1>
            </div>
            <div className="secondDiv">
                <table class="table table-hover">
                    <thead>
                        <tr className={classNames({ 'first': type === 'current_plan', 'second': type === 'up_comming_plan', 'third': type === 'exipiry_plan' })}>
                            <th>#</th>
                            <th className="thCenter">Image</th>
                            <th>Name</th>
                            <th>Caption</th>
                            <th>Price</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td className="thCenter"><img src={item.bannerImgSRC} className="mr-2 images"
                                            size="10"
                                            round={true}
                                            alt="Avatar" alt="" /></td>
                                        <td>{item.bannerValue}</td>
                                        <td>{item.bannerType}</td>
                                        <td>{item.totalBanner}</td>
                                        <td>{item.bannerStartDate}</td>
                                        <td>{item.bannerLastDate}</td>
                                        <td>
                                            <button className="btn btn-outline-warning btnEdit" onClick={() => editHandler(item)}>Edit</button>
                                            <button className="btn btn-outline-danger btnDelete" onClick={() => deleteHandler(item.ID)}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BannerData