export const TYPES = {
    SEARCH_ACTOR: "SEARCH ACTOR",
    CLEAN_SEARCH: "CLEAN_SEARCH"
}


export const createSearch = (content) =>
({
    type: TYPES.SEARCH_ACTOR,
    payload:content
})
export const resetSearch = () =>
({
    type: TYPES.CLEAN_SEARCH
})
