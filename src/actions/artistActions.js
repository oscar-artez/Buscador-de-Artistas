export const TYPES = {
    SEARCH_ACTOR: "SEARCH ACTOR",
    CLEAN_SEARCH: "CLEAN_SEARCH"
}


export const createSearch = (content) =>
({
    type:'SEARCH_ACTOR',
    payload:content
})