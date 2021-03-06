import * as actionTypes from '../actions/actionTypes';

const initialState = {
    site: {
        id: '',
        name: '',
        address: '',
        phone_number: '',
        vendors: [],
        documents: []
    },
    message: {
        type: 'none',
        message: ''
    },
    edit: false,
    new: false
}


const reducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.SHOW_SITE:
            return {
                ...state,
                site: action.site
            };

        case actionTypes.DELETE_SITE:
            
            return {
                ...state,
                message: action.message,
                site: null
            };
        
        case actionTypes.UPDATE_SITE:
            return {
                ...state,
                site: action.updatedSite
            }

        case actionTypes.EDIT_SITE:
            return {
                ...state,
                edit: action.edit
            }

        case actionTypes.ATTACH_VENDOR:
            return {
                ...state,
                site: action.site
            }
        
        case actionTypes.DETACH_VENDOR:
            return {
                ...state,
                site: action.site
            }
        case actionTypes.ADD_DOCUMENT:
            return{
                ...state,
                site: action.site
            }
        default:
            return state;
    }


}

export default reducer;