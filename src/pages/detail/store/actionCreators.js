import axios from 'axios';
import * as ActionTypes from './actionTypes'
const changeDetail = (data) => ({
	type:ActionTypes.GET_HomeDATA,
	data
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result));
		}).catch(() => {
			
		})
	}
};