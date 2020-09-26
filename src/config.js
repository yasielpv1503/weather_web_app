
import * as moment from 'moment'

export const  defaultFilter = {
    offerPrice_min: 0,
    offerPrice_max: process.env.REACT_APP_MAX_FILTER_PRICE_VALUE,
    percentDiscount_min: 0,
    percentDiscount_max: 100,
    createdAt_min: moment().subtract(365, 'days').toDate(),
    createdAt_max: moment().toDate(),
    category:'all',
    order:"orderByDate",
    typeOrder:"desc",
}

export const includeDefaultFilterInQueryParam = false