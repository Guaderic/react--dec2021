import { axiosService } from './axios.service'
import {urls} from '../constants/urls'


export const postsService = {
    getPostsByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)

}