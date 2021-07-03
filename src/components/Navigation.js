import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            {/* 'a href'를 사용하면 전체 페이지를 새로고침하면서 리액트를 죽임. Link to를 사용하야함 */}
            {/* <HashRouter> 라우터 바깥에서는 Link to를 사용 할 수 없음. */}
            <Link to="/">Home</Link>
            <Link to={{
                pathname:"/about",
                state:{
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    );
}

export default Navigation;