import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import styles from "../Styles/productCard.module.css";
import { ProductType } from "../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router";
// import { useRoute } from '@react-navigation/native';

type Props = {
    productsList: any;
    loading: boolean;
};

const ProductCards: React.FC<Props> = ({ productsList, loading }) => {
    const totalStar = [0];
    const totalStars = [0, 1, 2, 3, 4];

    const navigate = useNavigate();

    const cardClicked = (id: string) => {
        console.log(id, "Card Clicked");
        navigate(`/product/${id}`);
    };

    const addToCardClicked = () => {
        console.log("AddToCardClicked Clicked");
    };

    if (loading == true) {
        console.log("loading");
        return <h1>LOADING</h1>;
    }

    console.log(productsList);

    return (
        <>
            {/* {loading == true ? <h1>Loading</h1> : null} */}
            <div className={styles.productCardContainer}>
                {productsList !== undefined ? (
                    productsList.map((item: ProductType, index: number) => (
                        <div className={styles.card} key={index}>
                            <div
                                className={styles.imageMain}
                                onClick={() => {
                                    console.log("card");
                                    cardClicked(JSON.stringify(item.id));
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.image}
                                />
                            </div>
                            <div
                                className={styles.centerData}
                                onClick={() => {
                                    console.log("card");
                                    cardClicked(JSON.stringify(item.id));
                                }}
                            >
                                <h3> {item.name}</h3>
                                <div className={styles.centerDataSub}>
                                    <h4>{`Product ID: ${item.productId}`}</h4>

                                    <div>{`Category: ${item.category}`}</div>
                                    <div>
                                        <div className={styles.rating}>
                                            {totalStar.map(() => {
                                                let stars = JSON.parse(
                                                    JSON.stringify(
                                                        JSON.parse(item.rating)
                                                            .rate
                                                    )
                                                );
                                                return totalStars.map(
                                                    (data, index: number) => {
                                                        if (stars >= 1) {
                                                            stars = stars - 1;
                                                            return (
                                                                <StarRateIcon
                                                                    key={index}
                                                                />
                                                            );
                                                        } else if (
                                                            stars >= 0.5
                                                        ) {
                                                            stars = stars - 0.5;
                                                            return (
                                                                <StarHalfIcon
                                                                    key={index}
                                                                />
                                                            );
                                                        } else {
                                                            stars = stars - 1;
                                                            return (
                                                                <StarBorderIcon
                                                                    key={index}
                                                                />
                                                            );
                                                        }
                                                    }
                                                );
                                            })}
                                            {`${
                                                JSON.parse(item.rating).rate
                                            } (${
                                                JSON.parse(item.rating).count
                                            })`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.priceMain}>
                                    {item.salePrice === item.price ? (
                                        <div className={styles.price}>
                                            {"Rs "}

                                            {item.salePrice}
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                className={styles.priceWithOff}
                                            >
                                                {"Rs "}
                                                {item.salePrice}
                                                <div
                                                    className={styles.offPrice}
                                                >
                                                    {"Rs "}

                                                    {item.price}
                                                </div>
                                            </div>
                                            <div className={styles.off}>
                                                {(
                                                    -100 *
                                                    ((item.salePrice -
                                                        item.price) /
                                                        item.price)
                                                ).toFixed(2)}
                                                {"% "}
                                                OFF{" "}
                                            </div>
                                            <div className={styles.off}>
                                                {"RS "}
                                                {item.price -
                                                    item.salePrice}{" "}
                                                {"SAVE"}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <button
                                        className={styles.button}
                                        onClick={() => {
                                            console.log("whatsapp");
                                        }}
                                    >
                                        {/* <a href="https://wa.me/+918073038821/?text=urlencodedtext"> */}
                                        Order on WhatsApp
                                        {/* </a> */}
                                    </button>
                                    <button
                                        className={styles.button}
                                        onClick={() => {
                                            console.log("wishlist");
                                        }}
                                    >
                                        Add to WishList
                                    </button>
                                    <button
                                        className={styles.button}
                                        onClick={() => {
                                            console.log("cart");
                                        }}
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <Button
                                        variant="contained"
                                        className={styles.button}
                                    >
                                        Order on WhatsApp
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={styles.button}
                                    >
                                        Add to WishList
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className={styles.button}
                                    >
                                        Add to Cart
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3>No Products</h3>
                )}
            </div>
        </>
    );
};

export default ProductCards;
