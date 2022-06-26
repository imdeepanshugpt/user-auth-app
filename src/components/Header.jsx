import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <div>
            <section>
                <Link to="/staff">Go to Staff Page</Link>

                <br/>
                <Link to="/student">Go to Student Page</Link>
                <br />
                <Link to="/register">Go to Register</Link>
                <br />
            </section>
        </div>
    );
}