import Carousel from "./Carousel";
// import { IMAGE_URLS } from "./constants";
// import axios from "axios";
import { isNotNil, append } from "ramda";
import { Spinner } from "neetoui";
import { useState, useEffect } from "react";
import productsApi from "apis/products";

const Product = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = async () => {
        try {
            const product = await productsApi.show();
            setProduct(product);
        } catch (error) {
            console.log("An error occurred:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;
    const totalDiscounts = mrp - offerPrice;
    const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="px-6 pb-6">
            <div>
                <p className="py-2 text-4xl font-semibold">{name}</p>
                <hr className="border-2 border-black" />
            </div>
            <div className="flex gap-4 mt-6">
                <div className="w-2/5">
                    {isNotNil(imageUrls) ? (
                        <Carousel imageUrls={append(imageUrl, imageUrls)} title={name} />
                    ) : (
                        <img alt={name} className="w-48" src={imageUrl} />
                    )}
                </div>
                <div className="w-3/5 space-y-4">
                    <p>
                        {description}
                    </p>
                    <p>MRP: {mrp}</p>
                    <p className="font-semibold">Offer price: {offerPrice}</p>
                    <p className="font-semibold text-green-600">{discountPercentage}% off</p>
                </div>
            </div>
        </div>
    )
};

export default Product;