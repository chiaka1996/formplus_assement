import {combineReducers} from 'redux';
import AddTemplates from './AddTemplates';
import SinglePageTemp from './SinglePageTemp';
import Category from './Category';
import FilteredTemplates from './FilteredTemplate';
import FilteredTemplates2 from './FilteredTemplate2';
import SearchInput from './SearchInput';
import FilteredCategory from './FilteredCategory';
import Order from './Order'
import Date from './Date'



const allreducers = combineReducers ({
AddTemplates,
SinglePageTemp,
Category,
FilteredTemplates,
FilteredTemplates2,
Order,
Date,
SearchInput,
FilteredCategory
});

export default allreducers;