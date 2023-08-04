import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import Modal from '../pages/modals';


function ModalItem(){
    const [state, dispatch] = useStoreContext();

    const { products } = state;

    const {
        _id,
        image,
        name,
        price,
        quantity
    } = item;

    return (
        <div>
            <img alt={name}
            src={`/images/${image}`}/>
        </div>
    )
}
export default ModalItem