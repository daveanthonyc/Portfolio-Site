import { ReactNode } from 'react'

function SkillCard({ imgurl, children }: { imgurl: string, children: ReactNode }) {
    return ( 
        <>
            <div className="skill-card">
                <img className='skill-image' src={imgurl} alt="" />
                <h2 className='skill-text'>{children}</h2>
            </div>
        </>
     );
}

export default SkillCard;