export const ADD_BANNER = "ADD_BANNER"
export const REMOVE_BANNER = "REMOVE_BANNER"
export const UPDATE_BANNER = "UPDATE_BANNER"
export const UPDATE_ADD_BANNER = "UPDATE_ADD_BANNER"

export const addBanner = (data) => ({
    type: ADD_BANNER,
    payload: data,
})

export const removeBanner = (data) => ({
    type: REMOVE_BANNER,
    payload: data,
  });

export const updateBanner = (data) => ({
    type: UPDATE_BANNER,
    payload: data,
  });

export const updateAddBanner = (data) => ({
    type: UPDATE_ADD_BANNER,
    payload: data,
  });