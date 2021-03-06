import fetch from 'isomorphic-fetch';

const get = (url) => fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));

export const openComment = () => (dispatch, getState) => {
    dispatch({
        type: 'show-Comment',
    });

    setTimeout(() => {
        dispatch({
            type: 'open-Comment'
        })
    }, 50);
};

export const closeComment = () => (dispatch, getState) => {
    const { article } = getState();

    dispatch({
        type: 'close-Comment',
    });

    setTimeout(() => {
        dispatch({
            type: 'hide-Comment',
        });
    }, article.animatedTime);
}

export const initComment = (aid) => (dispatch, getState) => {
    return get('http://127.0.0.1:3333/api/comments/' + aid).then(result => {
        dispatch({
            type: 'init-Comment',
            data: result,
        });
    });
}