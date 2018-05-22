export const getRedirectPath = ({ type, avatar }) => {
    let url = (type == 1) ? '/boss' : '/genius'
    if(!avatar) {
        url += 'info'
    };

    return url
}