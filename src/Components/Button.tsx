import { ReactNode } from "react";

function Button({children}: {children: ReactNode}) {
    return ( 
        <>
            <a href="mailto:daveanthonyc@gmail.com" title="email">
                <button className="interactive-button">
                    {children}
                </button>
            </a>
        </>
     );
}

export default Button;