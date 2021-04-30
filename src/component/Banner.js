import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import "../css/banner.css"
import { addBanner , updateAddBanner} from '../redux/action/BannerAction';

const Banner = () => {
    const updateData = useSelector(state => state.bannerUpdate)

    const [blankArr, setBlankArr] = useState([])
    const [updateArr, setUpdateArr] = useState(updateData[0])

    let history = useHistory();
    const dispatch = useDispatch()

    console.log("bannerUpdate",updateData);
    console.log("updateArr",updateArr);

    const StartDateHandler = (e) => {
        if(updateArr){
            setUpdateArr({ ...updateArr, bannerStartDate: e.target.value })
        }else{
            setBlankArr({ ...blankArr, bannerStartDate: e.target.value })
        }
    }

    const EndDateHandler = (e) => {
        if(updateArr){
            setUpdateArr({ ...updateArr, bannerLastDate: e.target.value })
        }else{
            setBlankArr({ ...blankArr, bannerLastDate: e.target.value })
        }
    }

    const Option_Handler = (e) => {
        let x = new Date(updateArr ? updateArr.bannerStartDate : blankArr.bannerStartDate).getTime();
        let y = new Date(updateArr ? updateArr.bannerLastDate : blankArr.bannerLastDate).getTime();
        let diff = y - x;
        let result = 1000 * 3600 * 24;
        let finalDay = (diff / result) + 1

        let item = e.target.value

       if(updateArr){
        if (item === "Diwali") {
            setUpdateArr({ ...updateArr, bannerImgSRC: "https://freedesignfile.com/upload/2017/08/Happy-diwali-background-design-vectors-03.jpg", bannerValue: item, price: 500, countDay: finalDay, site: "https://www.diwalifestival.org/", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Holi") {
            setUpdateArr({ ...updateArr, bannerImgSRC: "https://image.freepik.com/free-vector/happy-holi-watercolor-floral-wreath-background_23-2147602204.jpg", bannerValue: item, price: 200, countDay: finalDay, site: "https://brojure.com/site-india/happy-holi/", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Summer") {
            setUpdateArr({ ...updateArr, bannerImgSRC: "https://cdn4.vectorstock.com/i/1000x1000/10/53/children-summer-vacation-kids-playing-sand-around-vector-8881053.jpg", bannerValue: item, price: 250, countDay: finalDay, site: "https://www.123rf.com/stock-photo/people_on_beach.html?sti=mj3jc3xp51cd92mw84|", ID: Math.random().toString().substr(9, 4) })
        } else if (item === "Republic") {
            setUpdateArr({ ...updateArr, bannerImgSRC: "https://image.shutterstock.com/z/stock-vector--th-january-happy-republic-day-of-india-in-vector-background-556926070.jpg", bannerValue: item, price: 100, countDay: finalDay, site: "https://republicday.nic.in/", ID: Math.random().toString().substr(9, 4) })
        } else {
            setUpdateArr({ ...updateArr, bannerImgSRC: "https://commerceiets.com/wp-content/uploads/2019/04/specialoffer.jpg", bannerValue: "", price: "", countDay: finalDay, totalBanner: "" })
        }
       } else {
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

    }

    const imgHeight = (e) => {
        if(updateArr){
            setUpdateArr({ ...updateArr, bannerImageHeight: e.target.value })
        }else{
            setBlankArr({ ...blankArr, bannerImageHeight: e.target.value })
        }
    }

    const imgWidth = (e) => {
       if(updateArr){
           setUpdateArr({ ...updateArr, bannerImageWidth: e.target.value })
        }else{
           setBlankArr({ ...blankArr, bannerImageWidth: e.target.value })
       }
    }

    const addButton = () => {
        dispatch(addBanner(blankArr))
        history.push("/desktop");
    }

    const updateButton = () => {
        dispatch(updateAddBanner(updateArr))
        history.push("/data");
    }

    const bannerTypeChange = (e) => {
        let totalprice = blankArr.price * blankArr.countDay
        let totalpriceUpdate = updateArr.price * updateArr.countDay

       if(updateArr){
        if (updateArr.bannerValue === "Diwali") {
            setUpdateArr({ ...updateArr, bannerType: e.target.value, totalBanner: totalpriceUpdate })
        } else if (updateArr.bannerValue === "Holi") {
            setUpdateArr({ ...updateArr, bannerType: e.target.value, totalBanner: totalpriceUpdate })
        } else if (updateArr.bannerValue === "Summer") {
            setUpdateArr({ ...updateArr, bannerType: e.target.value, totalBanner: totalpriceUpdate })
        } else if (updateArr.bannerValue === "Republic") {
            setUpdateArr({ ...updateArr, bannerType: e.target.value, totalBanner: totalpriceUpdate })
        } else {
            setUpdateArr({ ...updateArr })
        }
       }else{
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
                                    value={updateArr && updateArr.bannerStartDate}
                            /></label>
                        <br />
                        <br />
                        <label className="bannerlabel">
                            End Date :-
                   <input
                                type="date"
                                onChange={(e) =>
                                    EndDateHandler(e)}
                                    value={updateArr && updateArr.bannerLastDate}
                            />
                        </label>
                        <br /><br />
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
                                onChange={(e) => bannerTypeChange(e)} value={updateArr && updateArr.bannerType}/>
                        </label>
                        <br /><br />
                        <label className="bannerlabel"> Height :-
                       <input type="number"
                                onChange={(e) => imgHeight(e)} value={updateArr && updateArr.bannerImageHeight}/>
                        </label>
                        <br /><br />
                        <label className="bannerlabel"> Width :-
                       <input type="number"
                                onChange={(e) => imgWidth(e)} value={updateArr && updateArr.bannerImageWidth}/>
                        </label>
                        <br /><br />
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
                        <img src={updateArr ? updateArr.bannerImgSRC : blankArr.bannerImgSRC} alt="" className="imgChange" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
