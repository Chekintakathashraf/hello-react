import React from 'react';
import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatching the action to add the item to the cart
        dispatch(addItems(item));
    };

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
                >
                    {/* Left section - Item info */}
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - $ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    
                    <div className="w-3/12 p-4 relative">
                        <button
                            className="p-2 m-1 rounded-lg bg-blue-500 shadow-lg w-[60px] text-xs font-bold text-white"
                            onClick={() => handleAddItem(item)}
                        >
                            Add +
                        </button>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
