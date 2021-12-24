import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useLayoutEffect } from "react";
import { useParams, useRoutes } from "react-router";
import ProductService from "../services/ProductService";
import styles from "../Styles/ProductDetails.module.css";

type Props = {};

const ProductDetailPage: React.FC<Props> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const [productId, setProductId] = React.useState("");
    const [product, setProduct] = React.useState<any>();

    const route = useParams();
    console.log(route.id);

    useLayoutEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        setOpen(true);

        const product = await ProductService.getProductById(
            route?.id as string
        ).then((items) => {
            console.log(JSON.parse(items.data.rating).rate);

            setProduct(items.data);

            setOpen(false);
        });
    };

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={styles.productMain}>
                <div className={styles.imageMain}>
                    <img
                        src={product?.image}
                        alt={product?.image}
                        className={styles.image}
                    />
                </div>
                <div className={styles.productData}>
                    <h1>{product?.title}</h1>
                    <p>{product?.description}</p>
                    <span>
                        {"Rating  "}{" "}
                        {product ? JSON.parse(product.rating).rate : null}
                        {"                "}
                    </span>
                    ( {product ? JSON.parse(product.rating).count : null})
                    {" Reviews"}
                    <span></span>
                    <p>category: {product?.category}</p>
                    <h3>Price {product?.price}</h3>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;
