import React from "react";
import Header from "./header";
import Navigation from "./navigation";

type Props = {
    children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <React.Fragment>
            <div className="navigationWrapper">
                <Navigation />
                <main>{children}</main>
            </div>
        </React.Fragment>
    );
};
export default Layout;
