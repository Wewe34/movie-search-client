import axios from 'axios';
import { ISelectionDetails } from '../components/SelectionDetails';


class FavoritesService {
    private URI: string;
    constructor() {
        this.URI = 'http://localhost:8000/favorites';
    }
    addFavorite(userId: string, selection: ISelectionDetails): Promise<ISelectionDetails> {
        return axios.post(this.URI, {userId, selection }).then((result:any) => result.data).catch((err: any) => err);
    }
}

export default new FavoritesService();