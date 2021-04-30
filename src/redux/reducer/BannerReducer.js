import { ADD_BANNER, REMOVE_BANNER, UPDATE_BANNER, UPDATE_ADD_BANNER } from "../action/BannerAction";

const initialState = {
    banner: [],
}

export const BannerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_BANNER:
            return {
                ...state,
                banner: [
                    ...state.banner,
                    action.payload,
                ]
            };

        case REMOVE_BANNER:
            let dummyData = state.banner
            const newData = dummyData.filter((item) => { if (item.ID !== action.payload) return item })
            return {
                ...state,
                banner: newData
            }

        case UPDATE_BANNER:
            return {
                ...state,
                bannerUpdate: [action.payload],
            };

        case UPDATE_ADD_BANNER:
            const dummyBanner = state.banner
            const dummyupdateData  = state.bannerUpdate 
            const dummyId = action.payload
            const dummyIndex = dummyBanner.findIndex((item) => item.ID === dummyupdateData[0].ID)
            dummyBanner[dummyIndex] = dummyId
            
            return {
                ...state,
                bannerUpdate: []
            };

        default:
            return state
    }
}
