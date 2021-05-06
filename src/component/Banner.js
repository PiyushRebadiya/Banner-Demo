import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import "../css/banner.css"
import { addBanner, updateAddBanner } from '../redux/action/BannerAction';

const Banner = () => {
    const updateData = useSelector(state => state.bannerUpdate)

    const [blankArr, setBlankArr] = useState(
        {
            bannerImageHeight: "",
            bannerImageWidth: "",
            bannerImgSRC: "",
            bannerLastDate: "",
            bannerStartDate: "",
            bannerType: "",
            bannerValue: "",
            countDay: "",
            price: "",
            site: "",
            totalBanner: ""
        }
    )
    const [updateArr, setUpdateArr] = useState()
    const [validation, setValidation] = useState(false)

    let history = useHistory();
    const dispatch = useDispatch()

    console.log("bannerUpdate", updateData);
    console.log("updateArr", updateArr);
    console.log("blankArr", blankArr);

    useEffect(() => {
        if (updateData) {
            setUpdateArr(updateData[0])
        }
    }, [])

    const StartDateHandler = (e) => {
      
        if (updateArr) {
            let x = new Date(e.target.value).getTime();
            let y = new Date(updateArr.bannerLastDate).getTime();
            let diff = y - x;
            let result = 1000 * 3600 * 24;
            let finalDay = (diff / result) + 1

            setUpdateArr({ ...updateArr, bannerStartDate: e.target.value , countDay: finalDay, totalBanner: updateArr.price * finalDay})
        } else {
            setBlankArr({ ...blankArr, bannerStartDate: e.target.value })
        }
    }

    const EndDateHandler = (e) => {
        let x = new Date(updateArr ? updateArr.bannerStartDate : blankArr.bannerStartDate).getTime();
        let y = new Date(e.target.value).getTime();
        let diff = y - x;
        let result = 1000 * 3600 * 24;
        let finalDay = (diff / result) + 1

        if (updateArr) {
            setUpdateArr({ ...updateArr, bannerLastDate: e.target.value, countDay: finalDay, totalBanner: updateArr.price * finalDay })
        } else {
            setBlankArr({ ...blankArr, bannerLastDate: e.target.value, countDay: finalDay, totalBanner: blankArr.price * finalDay })
        }
    }

    const Option_Handler = (e) => {

        
        let item = e.target.value

        if (updateArr) {
            if (item === "Diwali") {
                setUpdateArr({ ...updateArr, bannerImgSRC: "https://freedesignfile.com/upload/2017/08/Happy-diwali-background-design-vectors-03.jpg", bannerValue: item, price: 500, site: "https://www.diwalifestival.org/", ID: Math.random().toString().substr(9, 4) , totalBanner: updateArr.countDay * 500})
            } else if (item === "Holi") {
                setUpdateArr({ ...updateArr, bannerImgSRC: "https://image.freepik.com/free-vector/happy-holi-watercolor-floral-wreath-background_23-2147602204.jpg", bannerValue: item, price: 200, site: "https://brojure.com/site-india/happy-holi/", ID: Math.random().toString().substr(9, 4) , totalBanner: updateArr.countDay * 200})
            } else if (item === "Summer") {
                setUpdateArr({ ...updateArr, bannerImgSRC: "https://cdn4.vectorstock.com/i/1000x1000/10/53/children-summer-vacation-kids-playing-sand-around-vector-8881053.jpg", bannerValue: item, price: 250, site: "https://www.123rf.com/stock-photo/people_on_beach.html?sti=mj3jc3xp51cd92mw84|", ID: Math.random().toString().substr(9, 4) , totalBanner: updateArr.countDay * 250})
            } else if (item === "Republic") {
                setUpdateArr({ ...updateArr, bannerImgSRC: "https://image.shutterstock.com/z/stock-vector--th-january-happy-republic-day-of-india-in-vector-background-556926070.jpg", bannerValue: item, price: 100, site: "https://republicday.nic.in/", ID: Math.random().toString().substr(9, 4) , totalBanner: updateArr.countDay * 100})
            } else {
                setUpdateArr({ ...updateArr, bannerImgSRC: "https://commerceiets.com/wp-content/uploads/2019/04/specialoffer.jpg", bannerValue: "", price: "", totalBanner: "" })
            }
        } else {
            if (item === "Diwali") {
                setBlankArr({ ...blankArr, bannerImgSRC: "https://freedesignfile.com/upload/2017/08/Happy-diwali-background-design-vectors-03.jpg", bannerValue: item, price: 500, site: "https://www.diwalifestival.org/", ID: Math.random().toString().substr(9, 4) })
            } else if (item === "Holi") {
                setBlankArr({ ...blankArr, bannerImgSRC: "https://image.freepik.com/free-vector/happy-holi-watercolor-floral-wreath-background_23-2147602204.jpg", bannerValue: item, price: 200, site: "https://brojure.com/site-india/happy-holi/", ID: Math.random().toString().substr(9, 4) })
            } else if (item === "Summer") {
                setBlankArr({ ...blankArr, bannerImgSRC: "https://cdn4.vectorstock.com/i/1000x1000/10/53/children-summer-vacation-kids-playing-sand-around-vector-8881053.jpg", bannerValue: item, price: 250, site: "https://www.123rf.com/stock-photo/people_on_beach.html?sti=mj3jc3xp51cd92mw84|", ID: Math.random().toString().substr(9, 4) })
            } else if (item === "Republic") {
                setBlankArr({ ...blankArr, bannerImgSRC: "https://image.shutterstock.com/z/stock-vector--th-january-happy-republic-day-of-india-in-vector-background-556926070.jpg", bannerValue: item, price: 100, site: "https://republicday.nic.in/", ID: Math.random().toString().substr(9, 4) })
            } else {
                setBlankArr({ ...blankArr, bannerImgSRC: "https://commerceiets.com/wp-content/uploads/2019/04/specialoffer.jpg", bannerValue: "", price: "", totalBanner: "" })
            }
        }

    }

    const imgHeight = (e) => {
        if (updateArr) {
            setUpdateArr({ ...updateArr, bannerImageHeight: e.target.value })
        } else {
            setBlankArr({ ...blankArr, bannerImageHeight: e.target.value })
        }
    }

    const imgWidth = (e) => {
        if (updateArr) {
            setUpdateArr({ ...updateArr, bannerImageWidth: e.target.value })
        } else {
            setBlankArr({ ...blankArr, bannerImageWidth: e.target.value })
        }
    }

    const addButton = () => {
        if (blankArr.bannerImageHeight
            && blankArr.bannerImageWidth
            && blankArr.bannerImgSRC
            && blankArr.bannerLastDate
            && blankArr.bannerStartDate
            && blankArr.bannerType
            && blankArr.bannerValue
            && blankArr.countDay
            && blankArr.price
            && blankArr.site
            && blankArr.totalBanner
        ) {
            dispatch(addBanner(blankArr))
            history.push("/desktop");
            setBlankArr({
                bannerImageHeight: "",
                bannerImageWidth: "",
                bannerImgSRC: "",
                bannerLastDate: "",
                bannerStartDate: "",
                bannerType: "",
                bannerValue: "",
                countDay: "",
                price: "",
                site: "",
                totalBanner: ""
            })
            setValidation(false)
        } else {
            setValidation(true)
        }
    }

    const updateButton = () => {
        dispatch(updateAddBanner(updateArr))
        history.push("/data");
    }

    const bannerTypeChange = (e) => {
        if (updateArr) {
            setUpdateArr({ ...updateArr, bannerType: e.target.value })
        } else {
            setBlankArr({ ...blankArr, bannerType: e.target.value })
        }
    }

    if (blankArr.totalBanner === 0) {
        blankArr.totalBanner = blankArr.price * blankArr.countDay
    }

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
                        <label className="bannerlabel"> Select Banner :-
                      <select id="offer"
                                onChange={(e) => Option_Handler(e)}
                                value={updateArr && updateArr.bannerValue}>
                                <option>--Festiwal--</option>
                                <option value="Diwali">Diwali</option>
                                <option value="Holi">Holi</option>
                                <option value="Summer">Summer</option>
                                <option value="Republic">Republic Day</option>
                            </select>
                        </label>
                        <br />
                        {
                            !blankArr.bannerValue && validation && <p>Required!!!</p>
                        }
                        <br />
                        <label className="bannerlabel">
                            Start Date :-
                     <input
                                type="date"
                                onChange={(e) =>
                                    StartDateHandler(e)}
                                value={updateArr && updateArr.bannerStartDate}
                            /></label>
                        <br />
                        {
                            !blankArr.bannerStartDate && validation && <p>Required!!!</p>
                        }
                        <br />
                        <label className="bannerlabel">
                            End Date :-
                     <input
                                type="date"
                                onChange={(e) =>
                                    EndDateHandler(e)}
                                disabled={!blankArr.bannerStartDate && !updateArr}
                                min={blankArr.bannerStartDate || updateArr && updateArr.bannerStartDate}
                                value={updateArr && updateArr.bannerLastDate}
                            />
                        </label>
                        <br />
                        {
                            !blankArr.bannerLastDate && validation && <p>Required!!!</p>
                        }
                        <br />
                        {
                            blankArr && blankArr.bannerValue && <div>
                                <h3>Price :- {blankArr.price}</h3>
                                <br />
                            </div>
                        }
                        {
                            updateArr && updateArr.bannerValue && <div>
                                <h3>Price :- {updateArr.price}</h3>
                                <br />
                            </div>
                        }
                        {
                            blankArr && blankArr.countDay && blankArr.totalBanner && <div>
                                <h3>Day :- {blankArr.countDay}</h3>
                                <br />
                                <h3>Total Bill Price :- {blankArr.totalBanner}</h3>
                                <br /></div>
                        }
                        {
                            updateArr && updateArr.countDay && updateArr.totalBanner && <div>
                                <h3>Day :- {updateArr.countDay}</h3>
                                <br />
                                <h3>Total Bill Price :- {updateArr.totalBanner}</h3>
                                <br /></div>
                        }
                        <label className="bannerlabel"> Banner Title :-
                       <input type="text"
                                onChange={(e) => bannerTypeChange(e)} value={updateArr && updateArr.bannerType} />
                        </label>
                        <br />
                        {
                            !blankArr.bannerType && validation && <p>Required!!!</p>
                        }
                        <br />
                        <label className="bannerlabel"> Height :-
                       <input type="number"
                                onChange={(e) => imgHeight(e)} value={updateArr && updateArr.bannerImageHeight} />
                        </label>
                        <br />
                        {
                            !blankArr.bannerImageHeight && validation && <p>Required!!!</p>
                        }
                        <br />
                        <label className="bannerlabel"> Width :-
                       <input type="number"
                                onChange={(e) => imgWidth(e)} value={updateArr && updateArr.bannerImageWidth} />
                        </label>
                        <br />
                        {
                            !blankArr.bannerImageWidth && validation && <p>Required!!!</p>
                        }
                        <br />
                        {
                            updateData && updateData.length > 0 ? <button className="btn btn-outline-success" id="btnAdd"
                                onClick={() => updateButton()} >
                                Update Banner
                        </button> :
                                <button className="btn btn-outline-info" id="btnAdd"
                                    onClick={() => addButton()} >
                                    Add Banner
                        </button>
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            blankArr.bannerImgSRC && <img src={blankArr.bannerImgSRC} alt="" className="imgChange" />
                        }
                        {
                            updateArr && updateArr.bannerImgSRC && <img src={updateArr.bannerImgSRC} alt="" className="imgChange" />
                        }
                        {
                            !blankArr.bannerImgSRC && validation && <p className="imgPTag">Select Banner !!!</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
