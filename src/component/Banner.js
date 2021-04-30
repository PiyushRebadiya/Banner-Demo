import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import "../css/banner.css"
import { addBanner } from '../redux/action/BannerAction';

const Banner = () => {
    const [blankArr, setBlankArr] = useState([])

    let history = useHistory();

    const dispatch = useDispatch()

    const StartDateHandler = (e) => {
        setBlankArr({ ...blankArr, bannerStartDate: e.target.value })
    }

    const EndDateHandler = (e) => {
        setBlankArr({ ...blankArr, bannerLastDate: e.target.value })
    }

    const Option_Handler = (e) => {
        let x = new Date(blankArr.bannerStartDate).getTime();
        let y = new Date(blankArr.bannerLastDate).getTime();
        let diff = y - x;
        let result = 1000 * 3600 * 24;
        let finalDay = (diff / result) + 1

        let item = e.target.value

        if (item === "Diwali") {
            setBlankArr({ ...blankArr, bannerImgSRC: "https://freedesignfile.com/upload/2017/08/Happy-diwali-background-design-vectors-03.jpg", bannerValue: item, price: 500, countDay: finalDay, site: "https://www.diwalifestival.org/", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Holi") {
            setBlankArr({ ...blankArr, bannerImgSRC: "https://image.freepik.com/free-vector/happy-holi-watercolor-floral-wreath-background_23-2147602204.jpg", bannerValue: item, price: 200, countDay: finalDay, site: "https://brojure.com/site-india/happy-holi/", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Summer") {
            setBlankArr({ ...blankArr, bannerImgSRC: "https://cdn4.vectorstock.com/i/1000x1000/10/53/children-summer-vacation-kids-playing-sand-around-vector-8881053.jpg", bannerValue: item, price: 250, countDay: finalDay, site: "https://www.123rf.com/stock-photo/people_on_beach.html?sti=mj3jc3xp51cd92mw84|", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Republic") {
            setBlankArr({ ...blankArr, bannerImgSRC: "https://image.shutterstock.com/z/stock-vector--th-january-happy-republic-day-of-india-in-vector-background-556926070.jpg", bannerValue: item, price: 100, countDay: finalDay, site: "https://republicday.nic.in/", ID: Math.random().toString().substr(9, 4) })
        } else {
            setBlankArr({ ...blankArr, bannerImgSRC: "https://commerceiets.com/wp-content/uploads/2019/04/specialoffer.jpg", bannerValue: "", price: "", countDay: finalDay, totalBanner: "" })
        }

    }

    const imgHeight = (e) => {
        setBlankArr({ ...blankArr, bannerImageHeight: e.target.value })
    }

    const imgWidth = (e) => {
        setBlankArr({ ...blankArr, bannerImageWidth: e.target.value })
    }

    const addButton = () => {
        dispatch(addBanner(blankArr))
        history.push("/desktop");
    }

    const bannerTypeChange = (e) => {
        let totalprice = blankArr.price * blankArr.countDay

        if (blankArr.bannerValue === "Diwali") {
            setBlankArr({ ...blankArr, bannerType: e.target.value, totalBanner: totalprice })
        } else if (blankArr.bannerValue === "Holi") {
            setBlankArr({ ...blankArr, bannerType: e.target.value, totalBanner: totalprice })
        } else if (blankArr.bannerValue === "Summer") {
            setBlankArr({ ...blankArr, bannerType: e.target.value, totalBanner: totalprice })
        } else if (blankArr.bannerValue === "Republic") {
            setBlankArr({ ...blankArr, bannerType: e.target.value, totalBanner: totalprice })
        } else {
            setBlankArr({ ...blankArr })
        }

    }

    const d = new Date()
    var latestDate = d.toISOString().slice(0, 10)

    return (
        <div className="mainDiv">
            <div className="container">
                <div>
                    <h1 className="firstDivH1">
                        Board Shop</h1></div>
                <div className="row">
                    <div className="col-md-6 firstDiv">
                        <h1 className="h1Data">Banner</h1>
                        <br />
                        <br />
                        <label className="bannerlabel">
                            Start Date :-
                  <input
                                type="date"
                                onChange={(e) =>
                                    StartDateHandler(e)}
                            /></label>
                        <br />
                        <br />
                        <label className="bannerlabel">
                            End Date :-
                   <input
                                type="date"
                                onChange={(e) =>
                                    EndDateHandler(e)}
                            />
                        </label>
                        <br /><br />
                        <label className="bannerlabel"> Select Banner :-
                      <select id="offer"
                                onChange={(e) => Option_Handler(e)}>
                                <option>--Festiwal--</option>
                                <option value="Diwali">Diwali</option>
                                <option value="Holi">Holi</option>
                                <option value="Summer">Summer</option>
                                <option value="Republic">Republic Day</option>
                            </select>
                        </label>
                        <br />
                        <br />
                        {
                            blankArr.bannerValue !== undefined && <div>
                                <h3>Price :- {blankArr.price}</h3>
                                <br />
                                <h3>Day :- {blankArr.countDay}</h3>
                                <br />
                                <h3>Total Bill Price :- {blankArr.price * blankArr.countDay}</h3>
                                <br /></div>
                        }
                        <label className="bannerlabel"> Banner Type :-
                       <input type="text"
                                onChange={(e) => bannerTypeChange(e)} />
                        </label>
                        <br /><br />
                        <label className="bannerlabel"> Height :-
                       <input type="number"
                                onChange={(e) => imgHeight(e)} />
                        </label>
                        <br /><br />
                        <label className="bannerlabel"> Width :-
                       <input type="number"
                                onChange={(e) => imgWidth(e)} />
                        </label>
                        <br /><br />
                        <button className="btn btn-outline-info" id="btnAdd"
                            onClick={() => addButton()} >
                            Add Banner
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src={blankArr.bannerImgSRC} alt="" className="imgChange" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
