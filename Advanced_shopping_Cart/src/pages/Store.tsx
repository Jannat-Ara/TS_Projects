
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export default function Store() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {storeItems.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded shadow">
                        <StoreItem {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
