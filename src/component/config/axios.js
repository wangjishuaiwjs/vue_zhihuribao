
import axios from 'axios'

var $http = axios.create({
	baseURL : 'http://www.justbecoder.com'
});

export default $http