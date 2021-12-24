import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout";
import ProductCards from "../components/ProductCards";
import ProductService from "../services/ProductService";

type Props = {};

const HomePage: React.FC<Props> = ({}) => {
    const [products, setProducts] = useState();
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    const searchData = useSelector((store: any) => store.search);
    const filterData = useSelector((store: any) => store.filter);

    // setSearch(searchData);

    useEffect(() => {
        setLoading(true);
        getData();
    }, [searchData, filterData]);

    const getData = async () => {
        setOpen(true);
        setLoading(true);

        const product = await ProductService.getProducts(
            filterData.price[0],
            filterData.price[1],
            searchData,
            "salePrice",
            "ASC"
        ).then((items) => {
            setProducts(items.data);
            setOpen(false);
            setLoading(false);
        });
    };

    return (
        <>
            {/* {loading ? (
                <h1>hello </h1>
            ) : ( */}
            <Layout>
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
                <ProductCards productsList={products} loading={loading} />
            </Layout>
            {/* )} */}
        </>
    );
};

export default HomePage;
