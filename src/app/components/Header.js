const { default: Link } = require("next/link")

const Header  = ()=>{
    return (
        <header>
            <Link href={"/"}>Login</Link>
            <Link href={"/data-table"}>Data Table</Link>
        </header>
    )
}

export default Header