export function searchMerchant(searchKey) {
    return (searchKey) => {
        dispatch(action.searchMerchant(searchKey))
    }
};