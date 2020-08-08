import Link from 'next/link';

function Header() {

    const menuItems =[
        {
        'name':'Home', 
        'route': '/'
        },
        {
        'name':'Contact Us', 
        'route': '/landing'
        },
        {
            'name':'Dogs', 
            'route': '/image'
        }
    ];

    return(
        <>
        <nav className="header">
            <div className="max-size">
            <div className="logo">logo</div>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                {menuItems && menuItems.map((item, index)=>(
                    <Link key={index} href={item.route}>
                    <a>
                        {item.name}
                    </a>
                    </Link>
                ))}
                </ul>
            </div>
        </nav>
        <style jsx>{`
        .header {
            background-color: #fff;
            box-shadow: 0px 0px 4px 0 rgba(0,0,0,.1);
            display: inline-block;
            width: 100%;
            z-index: 300;
            margin-bottom: 10px;
            font-weight: bold;
            }

            .max-size {
            margin: auto;
            max-width: 1366px;
            }

            .active {
            color: #979797 !important;
            }

            .header ul {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
            background-color: #fff;
            }

            ul {
            margin: 10px 0px;
            position: relative;
            }
            ul a {
            display: inline;
            list-style: none;
            padding: 20px 20px 22px;
            }

            .header a a {
            display: block;
            padding: 20px 20px;
            border-right: 1px solid #f4f4f4;
            text-decoration: none;
            }

            .header a a:hover,
            .header .menu-btn:hover {
            background-color: #f4f4f4;
            }

            .header .logo {
            display: block;
            float: left;
            font-size: 2em;
            padding: 10px 20px;
            text-decoration: none;
            }

            /* menu */

            .header .menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
            }

            /* menu icon */

            .header .menu-icon {
            cursor: pointer;
            float: right;
            padding: 28px 20px;
            position: relative;
            user-select: none;
            }

            .header .menu-icon .navicon {
            background: #333;
            display: block;
            height: 2px;
            position: relative;
            transition: background .2s ease-out;
            width: 18px;
            }

            .header .menu-icon .navicon:before,
            .header .menu-icon .navicon:after {
            background: #333;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all .2s ease-out;
            width: 100%;
            }

            .header .menu-icon .navicon:before {
            top: 5px;
            }

            .header .menu-icon .navicon:after {
            top: -5px;
            }

            /* menu button */

            .header .menu-btn {
            display: none;
            }

            .header .menu-btn:checked ~ .menu {
            max-height: 240px;
            }

            .header .menu-btn:checked ~ .menu-icon .navicon {
            background: transparent;
            }

            .header .menu-btn:checked ~ .menu-icon .navicon:before {
            transform: rotate(-45deg);
            }

            .header .menu-btn:checked ~ .menu-icon .navicon:after {
            transform: rotate(45deg);
            }

            .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
            .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
            top: 0;
            }


            @media (min-width: 500px) {
                .header a {
                    float: left;
                }
                .header a {
                    padding: 24px 30px;
                    color: #000;
                }
                .header a:hover {
                        color: #979797;
                    }
                .header .menu {
                    clear: none;
                    float: right;
                    max-height: none;
                }
                .header .menu-icon {
                    display: none;
                }
                ul li {
                    display: flex;
                }
            }

            @media (max-width: 500px){
                ul a {
                    display: block;
                    color: #000000;
                }
                a {
                    text-decoration: none;
                }
            }
        `}</style>
        </>
    )
} 

export default Header;