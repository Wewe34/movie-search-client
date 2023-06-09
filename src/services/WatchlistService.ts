import axios from 'axios';
import { ISelectionDetails } from '../components/SelectionDetails';
import { User } from '../models/user';


class WatchlistService {
    private URI: string;
    constructor() {
        this.URI = 'http://localhost:8000/watchlist';
    }
    loadWatchlist(userId: string): Promise<ISelectionDetails[]> {
        return axios.get(`${this.URI}/${userId}`, {params: {userId}}).then((results:any) => results.data).catch((err:any) => err);
    }
    addToWatchlist(user: User, selection: ISelectionDetails): Promise<ISelectionDetails> {
        return axios.post(this.URI, {user, selection }).then((result:any) => result.data).catch((err: any) => err);
    }
    removeFromWatchlist(userId: string, selectionId: string): Promise<ISelectionDetails> {
        return axios.delete(this.URI, {data: {userId, selectionId }}).then((result:any) => result.data).catch((err: any) => err);
    }
}

export default new WatchlistService();