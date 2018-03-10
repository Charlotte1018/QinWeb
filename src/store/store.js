import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import Perf from 'react-addons-perf';

// import UserReducer from '@/containers/User/reducer';
import {reducer as DashboardReducer} from '@/containers/Dashboard';
// import UserAnalysisReducer from '@/containers/UserAnalysis/reducer';
// import RankUserReducer from '@/containers/RankUser/reducer';
// import RankArticleReducer from '@/containers/RankArticle/reducer';
// import {reducer as MenuReducer} from '@/containers/Menu';
// import {reducer as AdminReducer} from '@/containers/Admin';
// import {reducer as RoleReducer} from '@/containers/Role';
// import {reducer as PermissionReducer} from '@/containers/Permission';
// import PermissionListReducer from '@/containers/PermissionList/reducer';
// import {reducer as CategoryReducer} from '@/containers/Category';
// import {reducer as NavReducer} from '@/containers/Nav';
// import {reducer as NavCategoryReducer} from '@/containers/NavCategory';
// import UserAuthReducer from '@/containers/UserAuth/reducer';
// import {reducer as ArticleCheckedReducer} from '@/containers/ArticleChecked';
// import ArticleDetailReducer from '@/containers/ArticleDetail/reducer';
// import ArticleFeedbackReducer from '@/containers/ArticleFeedback/reducer';
import {loading, loaded, detail} from './reducer';

// const win = window; win.Perf = Perf;

const reducer = combineReducers({
    loading,
    loaded,
    detail,
    DashboardReducer,
});

const middlewares = [ReduxThunk];

// redux-immutable-state-invariant
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(applyMiddleware(...middlewares));

// export default createStore(reducer, {}, storeEnhancers);
// 使用chrome开发工具
export default createStore(reducer, composeWithDevTools(storeEnhancers));
