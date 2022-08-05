import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";

const BreadCrumb = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split("/").filter((item) => item);
        const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        return (
            <div style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "30px" }}>
                <Breadcrumb>
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <Link to="/"><HomeOutlined /></Link>
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item>
                                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            </div>
        );
    };

    return <>{breadCrumbView()}</>;
};

export default BreadCrumb;