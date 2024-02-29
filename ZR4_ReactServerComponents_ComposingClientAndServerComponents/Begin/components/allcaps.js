"use client";

import { useState } from 'react';

export function AllCaps() {
    const [isAllCaps, setIsAllCaps] = useState(false);

    return (
        <article>
            <label htmlFor="allCaps">All Caps?</label>
            <input type="checkbox" id="allcaps" onClick={(event) => setIsAllCaps(event.target.checked)} />
            <section className={ isAllCaps ? "allcaps" : ""}>

            </section>
        </article>
    )
}