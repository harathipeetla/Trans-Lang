import { createContext, useState, useContext } from "react";

const translations ={
    English: { home: 'Home', movies: 'Movies', tvshows: 'TV Shows', sports: 'Sports', live: 'Live' },
    French: { home: 'Accueil', movies: 'Films', tvshows: 'Séries TV', sports: 'Sports', live: 'En direct' },
    German: { home: 'Home', movies: 'Filme', tvshows: 'TV-Sendungen', sports: 'Sport', live: 'Live' },
    Russian: { home: 'Главная', movies: 'Фильмы', tvshows: 'Телешоу', sports: 'Спорт', live: 'прямом эфире' },
    Spanish: { home: 'Inicio', movies: 'Películas', tvshows: 'Programas de TV', sports: 'Deportes', live: 'En vivo' },
    Chinese: { home: '首页', movies: '电影', tvshows: '电视节目', sports: '体育', live: '直播' },

}


const LanguageContext = createContext({
    language:'English',
    setLanguage:() =>{},
    translations: translations
})

export const useLanguage = () => useContext(LanguageContext)
export const LanguageProvider =({children}) =>{
    const [language, setLanguage] = useState('English')


    return (
        <LanguageContext.Provider value={{language, setLanguage, translations}}>
            {children}
        </LanguageContext.Provider>
    )
}