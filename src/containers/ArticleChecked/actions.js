import {getArticleList, getArticleDetail, addArticle, updateArticle} from '@/api/article';
import * as actionTypes from './actionTypes';

export const fetchArticleCheckedListStarted = () => ({type: actionTypes.FETCH_ARTICLE_CHECKED_LIST_STARTED});

export const fetchArticleCheckedListSuccess = result => ({type: actionTypes.FETCH_ARTICLE_CHECKED_LIST_SUCCESS, result});

export const fetchArticleCheckedList = params => dispatch => {
    dispatch(fetchArticleCheckedListStarted());
    return getArticleList(params).then(data => dispatch(fetchArticleCheckedListSuccess(data)));
};
