import { Link } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <Link to="/">
                <h1>Home으로 이동</h1>
            </Link>
            <Link to="/rq-super-heroes">
                <h1>rq-super-heros로 이동</h1>
            </Link>
            <Link to="/super-heros">
                <h1>super-heros로 이동</h1>
            </Link>
        </>
    );
};