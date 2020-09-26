//import i18next from 'i18next'
/*
export const setUiLocale = (locale) => {

    return fetch(`/translations/${locale}.json`)
        .then(response => response.json())
        .then(loadedResources => (
            new Promise((resolve, reject) => {
                i18next.init({
                    lng: locale,
                    debug: false,
                    resources: { [locale]: loadedResources },
                    interpolation: {
                        format: function (value, format, locale) {
                            return value
                        }
                    }
                }, (err, t) => {                   
                    resolve()
                })
            })
        ))
        .catch(err => console.log(err))
}
*/

export const _t = (key, opt) => {
    return key;
    //return i18next.t(key, opt)
}
