import axios from 'axios';
import { ISelectionDetails } from '../components/SelectionDetails';
import { User } from '../models/user';


class FavoritesService {
    private URI: string;
    constructor() {
        this.URI = 'http://localhost:8000/favorites';
    }
    addFavorite(user: User, selection: ISelectionDetails): Promise<ISelectionDetails> {
        return axios.post(this.URI, {user, selection }).then((result:any) => result.data).catch((err: any) => err);
    }
    removeFavorite(userId: string, selectionId: string): Promise<ISelectionDetails> {
        return axios.delete(this.URI, {data: {userId, selectionId }}).then((result:any) => result.data).catch((err: any) => err);
    }
}

export default new FavoritesService();